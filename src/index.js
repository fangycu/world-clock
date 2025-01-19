setInterval(function(){

let la = document.querySelector("#losangeles");
let laDate = la.querySelector(".date");
let laTime = la.querySelector(".time");
laDate.innerHTML = moment().tz("America/Los_Angeles").format("MMMM Do YYYY");
laTime.innerHTML = `${moment()
  .tz("America/Los_Angeles")
  .format("hh:mm:ss")} <small> ${moment()
  .tz("America/Los_Angeles")
  .format("A")} </small>`;


  let sd = document.querySelector("#sydney");
  let sdDate = sd.querySelector(".date");
  let sdTime = sd.querySelector(".time");
  sdDate.innerHTML = moment().tz("Australia/Sydney").format("MMMM Do YYYY");
  sdTime.innerHTML = `${moment()
    .tz("Australia/Sydney")
    .format("hh:mm:ss")} <small> ${moment()
    .tz("Australia/Sydney")
    .format("A")} </small>`;


 let tk = document.querySelector("#tokyo");
 let tkDate = tk.querySelector(".date");
 let tkTime = tk.querySelector(".time");
 tkDate.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
 tkTime.innerHTML = `${moment()
   .tz("Asia/Tokyo")
   .format("hh:mm:ss")} <small> ${moment()
   .tz("Asia/Tokyo")
   .format("A")} </small>`;


 let ps = document.querySelector("#paris");
 let psDate = ps.querySelector(".date");
 let psTime = ps.querySelector(".time");
 psDate.innerHTML = moment().tz("Europe/Paris").format("MMMM Do YYYY");
 psTime.innerHTML = `${moment()
   .tz("Europe/Paris")
   .format("hh:mm:ss")} <small> ${moment()
   .tz("Europe/Paris")
   .format("A")} </small>`;


    })