const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
            'id':1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '티모',
            'birthday':'961222',
            'gender':'남자',
            'job':'탑'
        },
        {
            'id':2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '진수',
            'birthday':'910226',
            'gender':'남자',
            'job':'학생'
        },
        {
            'id':3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '홍길동',
            'birthday':'961222',
            'gender':'남자',
            'job':'정글'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));