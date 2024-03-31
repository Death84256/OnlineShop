const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "onlineshop",
});

exports.checkAdmin=(username, password) => {
    return new Promise((resolve, reject)=>{
        const query = "SELECT * from administrator WHERE Username = ? AND Password = ?";
        connection.query(query, [username,password], async (error, results) =>{
            if(error){
                return reject(error);
            }
            resolve(results);
        });
    });
};

exports.checkUser = (username,password) => {
    return new Promise((resolve, reject)=> {
        const query = "SELECT * from user WHERE Username = ? AND Password = ?";
        connection.query(query, [username,password], async (error, result) =>{
            if(error){
                return reject(error);
            }
            resolve(results);
        });
    })
}