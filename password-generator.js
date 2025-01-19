const process = require("process");
const args = process.argv.slice(2);

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";

const validOptions = ["l", "u", "n", "s"];

// Initialize possible password characters to all lowercase and length to 8
let string = "";
let length = 8;

const helpMessage = `
Usage: node password-generator [options]

Options:
  --[num]      Set the length of password
  --[a || l &| u &| n &| s]  Set the character type by specifying the first letter of type
  (a = all, l = lowercase, u = uppercase, n = number,  s = special character)

Example:
  node password-generator --10 (Generates a 10 character password)
  node password-generator --6 -lu (Generates a 6 character password with lowercase and uppercase letters)
  node password-generator --a (Generates an 8 character password with all character types)
  `;

const randomizer = (string) =>
  string[Math.floor(Math.random() * string.length)];

const passwordGenerator = (length, string) => {
  let password = "";

  for (i = 0; i < length; i++) {
    let letter = randomizer(string);
    password += letter;
  }

  return console.log(password);
};

if (args.length === 0) {
  string = lowercase;
} else if (args.length === 1) {
  string = lowercase;

  if (!isNaN(parseInt(args[0].slice(2)))) {
    length = parseInt(args[0].slice(2));
  }

  switch (args[0]) {
    case "--help":
      console.error(helpMessage);
      process.exit(1);
    case "--a":
      string = lowercase + uppercase + numbers + specialCharacters;
      break;
    case args[0].includes(validOptions):
        console.log("includes validOptions");
        for (let char of args[0]) {
            if (validOptions.includes(char)) {
                switch (char) {
                    case "l":
                        string += lowercase;
                        break;
                    case "u":
                        string += uppercase;
                        break;
                    case "n":
                        string += numbers;
                        break;
                    case "s":
                        string += specialCharacters
                        break;
                    default:
                        break;

            }
            }
        }
  }
}

//   if (args.includes("--a")) {
//     string += lowercase + uppercase + numbers + specialCharacters;
//   } else {
//     const validOptions = ["l", "u", "n", "s"];
//     for (i = 0; i < args.length; i++) {

//       const option = args[i];
//       if (isNaN(parseInt(option.slice(2)))) {

//         for (let char of option) {

//           // Print help message if the flags contain non-valid options
//           if (!validOptions.includes(char)) {
//             console.error(helpMessage);
//             process.exit(1);
//           }

//           if (option.includes("l")) string += lowercase;
//           if (option.includes("u")) string += uppercase;
//           if (option.includes("n")) string += numbers;
//           if (option.includes("s")) string += specialCharacters;

//         }
//       } else {

//         length = parseInt(option.slice(2));

//       }
//     }
//   }
// }

passwordGenerator(length, string);
