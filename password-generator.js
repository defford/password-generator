const process = require("process");
const args = process.argv.slice(2);

const lowercase = "abcdefghijklmnopqrstuvwxyz";
let string = lowercase;

const randomizer = (string) =>
  string[Math.floor(Math.random() * string.length)];

const passwordGenerator = (length, string) => {
  let password = "";

  for (i = 0; i < length; i++) {
    let letter = randomizer(string);
    password += letter;
  }

  return password;
};

const helpMessage = `
Usage: node password-generator [options]

Options:
  --[num]      Set the length of password

Example:
  node password-generator --10 (Generates a 10 character password)
   
  `;

if (args[0] === "--help") {
  console.log(helpMessage);
}

if (/^--\d+$/.test(args[0])) {
  const length = parseInt(args[0].slice(2), 10);
  console.log(length);
  if (!isNaN(length)) {
    console.log(passwordGenerator(length, string));
  }
} else {
  console.log(helpMessage);
}
