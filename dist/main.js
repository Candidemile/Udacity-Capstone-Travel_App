var Client=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=async e=>{const t={method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};console.log("Creating promise");const n=await fetch("http://localhost:80/trip",t);try{return console.log("trying.."),console.log("done\n"),n.json()}catch(e){console.log("That is the error: ",e)}}},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"handleSubmit",(function(){return a})),n.d(t,"saveTrip",(function(){return l}));n(1),n(2),n(3);var o=n(0),r=n.n(o);const i=e=>{let t=document.getElementById("trip-template").content.cloneNode("true"),n=t.firstElementChild.children;n[1].textContent=`${e.destination.city}, ${e.destination.country}`,n[2].textContent="Departing: "+e.date,n[3].textContent=e.countdown+" days left",n[4].firstElementChild.src=e.image,n[5].children[0].textContent=`Typical weather for that day is:\n${e.weather.temperature}C, ${e.weather.description}`,n[5].children[1].src=e.weather.icon,n[6].children[1].textContent=`minimum price is ${e.flight.price}$,\n\n    airline - ${e.flight.carrier},\n ${e.flight.direct?"direct":"not direct"}`,n[7].children[1].textContent=`${e.destination.country} has ${e.covid.level} level of COVID-19 on ${(new Date).toString().slice(4,15)}`,n[7].children[2].value=50,n[7].children[2].textContent="50%",n[7].children[3].textContent="The growth rate is "+e.covid.growth,document.getElementsByClassName("trips")[0].appendChild(t)},l=e=>{let t=[];null!=localStorage.trips&&(t=JSON.parse(localStorage.trips)),t.push(e),localStorage.trips=JSON.stringify(t),console.log(localStorage.trips),i(e)};async function a(e){console.log("::: Starting Form Validation :::"),e.preventDefault();let t,n=document.getElementById("departure").value,o=document.getElementById("destination").value,i=document.getElementById("date").value,a={departure:n,destination:o,date:i};console.log(n,o,i);const c=/[a-zA-Z]+/;if(!(n.match(c)&&o.match(c)&&i.match(/^(202\d{1})-(\d{1,2})-(\d{1,2})$/g)&&(e=>new Date(e)-new Date>0)(i)))return alert("Please input valid data!!!"),!1;document.getElementById("loading").classList.remove("hide"),console.log("::: Form is valid :::\n::: Form is Submitted :::"),r()(a).then(e=>{document.getElementById("loading").classList.add("hide"),console.log(e),(e=>{document.getElementById("new-trip-destination").textContent=`${e.destination.city}, ${e.destination.country}`,document.getElementById("new-trip-date").textContent="Departing: "+e.date,document.getElementById("new-trip-countdown").textContent=e.countdown+" days left",document.getElementById("new-trip-weather").textContent=`Typical weather for that day is:\n${e.weather.temperature} C, ${e.weather.description}`,document.getElementById("new-trip-weather-icon").src=e.weather.icon,document.getElementById("new-trip-flight").textContent=`minimum price is ${e.flight.price}$,\n\n        airline - ${e.flight.carrier},\n ${e.flight.direct?"direct":"not direct"}`,document.getElementById("new-trip-image").src=e.image,document.getElementById("new-trip-covid-level").textContent=`${e.destination.country} has ${e.covid.level} level of COVID-19 on ${(new Date).toString().slice(4,15)}`,document.getElementById("new-trip-covid-growth").textContent="The growth rate is "+e.covid.growth,document.getElementById("new-trip-covid-progress").value=50,document.getElementById("new-trip-covid-progress").textContent="50%",document.getElementById("new-trip").classList.remove("hide")})(e),t=e});document.getElementsByClassName("save")[0].addEventListener("click",()=>{console.log(document.getElementsByClassName("save")[0]),l(t),document.getElementById("new-trip").classList.add("hide")})}(()=>{let e=[];null!=localStorage.trips&&(e=JSON.parse(localStorage.trips));e=e.sort((e,t)=>new Date(e.date)-new Date(t.date)),console.log(e),e.forEach(i)})()}]);