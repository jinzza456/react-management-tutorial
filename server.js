//데이터 베이스 파일에 접근하기위한 라이브러리
const fs = require('fs')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// 데이터 베이스 파일을 읽어온다.
const data = fs.readFileSync('./database.json');
// 환경설정 데이터를 파싱한다.
const conf = JSON.parse(data);
// mysql 라이브러리를 불러온다.
const mysql = require('mysql');

// db 연동과 관련된 변수 설정
const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database,
});
// db와 연동한다.
connection.connect();

app.get('/api/customers',(req,res)=>{
    // 데이터를 가져올 쿼리를 입력
    connection.query(
        "select * from customer",
        //가져온 데이터를 클라이언트로 보내준다.
        (err, rows, fields)=>{
            res.send(rows);
        }
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));