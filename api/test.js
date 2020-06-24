require('dotenv').config({path: './cloud.env'})

const name = process.env.CLOUD_NAME;
const api = process.env.API_KEY;
const secret = process.env.API_SECRET;

console.log(name);
console.log(api);
console.log(secret);