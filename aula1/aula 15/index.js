function random(min, max){
   const r =   Math.random() * (max, min) + min;
   return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(1, 50);

while (rand !== 10){
   rand = random(min, max);
   console.log(rand)
}
