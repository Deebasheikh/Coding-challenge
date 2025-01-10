// this function takes out the first 10 characters from any text
function extractFirstTenChars(str:string) string {
    return string.substring(0,10);// gets characters from start to position 10
}
// example:takingt the first 10 characters of a sentence
console.log(extractFirstTenChars("hello, typescript world!"));
// shows the first 10 characters
// it gives a small piece us a smaller piece of the orignial text,just the begining part