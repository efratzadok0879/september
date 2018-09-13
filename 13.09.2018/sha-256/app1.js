const jwt=require('jsonwebtoken');
const {SHA256}=require('crypto-js');

let data={
    password:SHA256('1234').toString(),
    name:'Efrat'
};

 let token=jwt.sign(data,'my secret');
 console.log(`token: ${token}`);

 let decoded=jwt.verify(token,'my secret');
 console.log(`decoded: ${JSON.stringify(decoded)}`);