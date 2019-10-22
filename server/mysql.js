const mysql = require('mysql');

const config = require('./config.database.js');

export default class Mysql {
    constructor() {
        this.connection = mysql.createConnection({
            host: config.host,
            user: config.user,
            password: config.password
        });
    }

    connect() {
        // 创建连接
        this.connection.connect((err) => {
            if (err) {
                console.log('[mysql connect] fail');
                return;
            }
            console.log('[mysql conect] success');
        });
    }
    query(querString) {
        // 执行sql语句
        this.connection.query(querString, function (err, rows, fields) {
            if (err) {
                console.log('[query] - :' + err);
                return;
            }
            console.log('The solution is: ', rows[0].solution);
        });
    }
    end() {
        // 关闭连接
        this.connection.end((err) => {
            if (err) {
                console.log('mysql connect fail');
                return;
            }
            console.log('mysql conect success');
        });
    }
};

