"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this function checks if a sentence has "TypeScript" in it
function hasTypeScript(str) {
    return str.includes("TypeScript"); //check for "TypeScript" and returns true or false
}
//example: seeing if a text mentions typescript
console.log(hasTypeScript("i love coding in TypeScript!"));
//outputs true or false based on the check
//it simply says true if "typescript" is there, 
//  or false if it's not
