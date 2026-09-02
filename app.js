// alert("HELLO !!!");

for (let i = 0; i<=5; i++) {
    console.log(i);
}

let bedrooms = 2;
if (bedrooms < 3) {
    console.error("bedrooms < 3")
}
else {
    console.log("Bedrooms = 3")
}

function square(x){
    return x*x;
}

console.log(square(5));

// const sample ={
//     id:1,
//     name: "Son",
//     age: 20
// };
// console.log(sample.name);

const subjects = [
    {id:1, name:"toan", score:9},
    {id:2, name:"van", score:8},
    {id:3, name:"anh", score:9.5},
    {id:4, name:"ly", score:7},
    {id:5, name:"hoa", score:4},
];


let sum = 0;
let max = 0;
for(let i=0; i<=subjects.length-1; i++){
    if(subjects[i].score < 5){
        console.log("Mon "+subjects[i].name+" Truot");
    }

    if(subjects[i].score > max){
        max = subjects[i].score;
    }

    sum += subjects[i].score;
}

console.log("Tong:"+sum);
console.log("Lon Nhat:"+max);


let card = document.querySelector(".article1");
card.style.backgroundColor = "red";

console.log(card.innerHTML);

//Làm Notification
let noti = document.createElement("div");
let message = document.createElement("p");

noti.textContent = "Thanks";
message.textContent = "see u again";
noti.appendChild(message);

noti.style.backgroundColor = "pink";
noti.style.padding = "10px";
noti.style.border = "1px solid #ccc";

let form = document.querySelector("#Contact");
form.appendChild(noti);

setTimeout(() => {
        noti.remove();
    }, 5000);
