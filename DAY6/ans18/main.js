"use strict";
let places = [
    "Madinah",
    "Makkah",
    "Dubai",
    "Germany",
    "Palestine",
    "switzerland",
];
console.log("original order:", places);
console.log("alphabetical order:", [...places].sort());
console.log("orginial order", places);
console.log("reverse alphabetical order:", [...places].sort().reverse());
console.log("original order:", places);
places.reverse();
console.log("reversed order", places);
places.reverse();
console.log("original order:", places);
places.sort();
console.log("alphabetical order:", places);
places.reverse();
console.log("reverse alphabetical order:", places);
