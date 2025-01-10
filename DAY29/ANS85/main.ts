// this function finds where "code" first shows up in a text
function findCodePosition(str:string) : number {
    return str.indexOf("code");
}
// example: searching within a sentence
console.log(findCodePosition("learn to code with TypeScript"));
//Outputs the start position of "code" 
// It tells us the position number where code starts.