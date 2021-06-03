const connection = require('./');

module.exports = {
  getAll: function (callback) {
    // fetch all dogs
    var queryStr = 'select * from dogsTable';
    connection.query(queryStr, function(err, results) {
      callback(err, results);
    });
  },
  create: function (params, callback) {
    // create a dog
    var queryStr = 'insert into dogsTable SET ?';
    connection.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  }
};