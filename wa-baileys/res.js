'use strict';

exports.ok = function(values, res) {
  var data = {
      'status': 200,
      'values': values
  };
  res.json(data);
  res.end();
};

exports.error = function(error, res) {
  console.log(error)

  var data = {
      'status': error.errno || error.status || 401,
      'values': error.sqlMessage || error.message
  };
  res.json(data);
  res.end();
};