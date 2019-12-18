const mysql = require('mysql');

const config = require('./config.database.js');

module.exports = class Mysql {
  constructor() {
    this.connection = mysql.createConnection(config);
  }

  connect() {
    // 创建连接
    return new Promise((resolve, reject) => {
      this.connection.connect(err => {
        if (err) {
          console.log('[mysql connect] fail');
          reject(err);
        }
        resolve();
      });
    });
  }
  query(querString) {
    // 执行sql语句
    return new Promise((resolve, reject) => {
      this.connection.query(querString, function(err, results, fields) {
        if (err) {
          console.log('[query] - :' + err);
          reject(err);
        }
        resolve(results[0]);
        // console.log('The solution is: ', results[0].solution);
      });
    });
  }
  end() {
    // 关闭连接
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  }
};
