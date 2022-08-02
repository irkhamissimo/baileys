var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  bodyParser = require('body-parser');
//   cors = require('cors'),
//   fileUpload = require('express-fileupload');

// app.use(fs)
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//   fileUpload({
//     createParentPath: true,
//     useTempFiles: true,
//     tempFileDir: '/tmp/',
//   })
// );

var baileysRoutes = require('./routes/baileysRoutes');
// var violationRoutes = require('./routes/violationRoutes'),
//   dosirRoutes = require('./routes/dosirRoutes'),
//   pegawaiRoutes = require('./routes/pegawaiRoutes'),
//   stRoutes = require('./routes/stRoutes'),
//   attendanceRoutes = require('./routes/attendanceRoutes'),
//   organizationRoutes = require('./routes/organizationRoutes'),
//   authRoutes = require('./routes/authRoutes'),
//   wfhRoutes = require('./routes/wfhRoutes'),
//   rankRoutes = require('./routes/rankRoutes'),
//   dapurRoutes = require('./routes/dapurRoutes'),
//   messageRoutes = require('./routes/messageRoutes'),
//   mantelAuthRoutes = require('./routes/mantelAuthRoutes'),
//   userRoutes = require('./routes/userRoutes'),
//   boksPegawaiRoutes = require('./routes/boksPegawaiRoutes');
//   roleRoutes = require('./routes/roleRoutes');
  // receiversRoutes = require('./routes/receiversRoutes');
// hppRoutes 	   			= require('./routes/hppRoutes');

// violationRoutes(app);
// dosirRoutes(app);
// pegawaiRoutes(app);
// stRoutes(app);
// attendanceRoutes(app);
// organizationRoutes(app);
// authRoutes(app);
// wfhRoutes(app);
// rankRoutes(app);
// dapurRoutes(app);
// messageRoutes(app);
// mantelAuthRoutes(app);
// userRoutes(app);
// boksPegawaiRoutes(app);
// roleRoutes(app);
// receiversRoutes(app);
// hppRoutes(app);
baileysRoutes(app);

app.listen(port);
console.log('Baileys server started on: ' + port);
