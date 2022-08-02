const { default: makeWASocket } = require('@adiwajshing/baileys');
const {
  DisconnectReason,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  makeInMemoryStore,
} = require('@adiwajshing/baileys');

const MAIN_LOGGER = require('@adiwajshing/baileys/lib/Utils/logger');
const logger = MAIN_LOGGER.default;
logger.level = 'error';
const useStore = !process.argv.includes('--no-store')
const doReplies = !process.argv.includes('--no-reply')
const store = useStore ? makeInMemoryStore({ logger }) : undefined
store?.readFromFile('./baileys_store_multi.json')



async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState('session');
  const { version, isLatest } = await fetchLatestBaileysVersion();
  console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`);

  const sock = makeWASocket({
    version,
    printQRInTerminal: true,
    auth: state,
    logger,
  });
  store?.bind(sock.ev)
  sock.ev.on('creds.update', saveCreds);
  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'close') {
      const shouldReconnect =
        lastDisconnect?.error.output.statusCode !== DisconnectReason.loggedOut;

      if (shouldReconnect) {
        connectToWhatsApp();
      }
    } else if (connection === 'open') {
      console.log('connection opened');
    }
  });
  return sock;
}
// console.log(connectToWhatsApp());
connectToWhatsApp();

exports.sendMessage = async function (req, res) {
  const sock = makeWASocket();
  let { message, jid } = req.body;
  console.log(message, jid);

  if (!message || !jid) {
    throw Error('Pesan atau penerima tidak boleh kosong');
  }
  if (!Array.isArray(jid)) {
    jid = [jid];
  }
  // const receivers = [];
  jid.forEach(async (receiver) => {
    receiver = phoneNumberFormatter(receiver);
    await sock.sendMessage(receiver, message);
  });
 
  res.send('OK');
};

const phoneNumberFormatter = function (number) {
  // 1. Menghilangkan karakter selain angka
  let formatted = number.replace(/\D/g, '');

  // 2. Menghilangkan angka 0 di depan (prefix)
  //    Kemudian diganti dengan 62
  if (formatted.startsWith('0')) {
    formatted = '62' + formatted.substr(1);
  }=
















































  if (!formatted.endsWith('@s.whatsapp.net')) {
    formatted += '@s.whatsapp.net';
  }

  if (formatted == null) {
  }
  return formatted;
};


