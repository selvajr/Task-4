const stringArray = ["hello", "world", "javascript"];
const titleCapsArray = stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log("Title caps array:", titleCapsArray);
