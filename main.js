const start = Date.parse(`1 Jan ${new Date(Date.now()).getFullYear()}`);
const current = Date.now();

console.log(Math.floor((current - start)/1000/60/60/24));