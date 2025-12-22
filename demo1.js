//break
let text=" ";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i  ;
}
console.log(text);

//break in switch
let trafficLight = "green";
let message = "";

switch (trafficLight) {
case "red":
message = "Stop immediately.";
break;
case "yellow":
message = "Prepare to stop.";
break;
case "green":
message = "Proceed or continue driving.";
break;
default:
message = "Invalid traffic light color.";
}

console.log(message);

//continue 
let i = 0;
while (i < 5) {
i++;
if (i === 3) continue;
console.log(i); 
}

//for of 
const numbers = [10, 20, 30, 40];

for (const num of numbers) {
    console.log(num);
}

///ternary
let mark = 60;
let result= mark >= 50 ? "Pass":" Fail";
console.log(result); 