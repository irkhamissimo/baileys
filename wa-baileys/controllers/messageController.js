// const { on } = require('nodemon');
const {connectToWhatsApp} = require('../controllers/baileysController');
// const sock = new baileys();
connectToWhatsApp();
exports.sendMessage = async function (req, res) {
 const sock = await connectToWhatsApp();
  let { message, jid } = req.body;
  if (!message || !jid) {
    throw Error('Pesan atau penerima tidak boleh kosong');
  }
  if (!Array.isArray(jid)) {
    jid = [jid];
  }
  jid.forEach(async (receiver) => {
    console.log(sock)
    sock.ev.on.external.event(()=> {
       connectToWhatsApp.sendMessage(receiver, message);

    })
  }
  );
  res.send('OK');
}

const phoneNumberFormatter = function (number) {
  // 1. Menghilangkan karakter selain angka
  let formatted = number.replace(/\D/g, '');

  // 2. Menghilangkan angka 0 di depan (prefix)
  //    Kemudian diganti dengan 62
  if (formatted.startsWith('0')) {
    formatted = '62' + formatted.substr(1);
  }
  if (!formatted.endsWith('@s.whatsapp.net')) {
    formatted += '@s.whatsapp.net';
  }

  if (formatted == null) {
  }
  return formatted;
};