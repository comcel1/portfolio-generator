const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

const fs = require("fs");
// const http = require("http");
// const url = require("url");

// LESSON 9.1 FOR REFERENCE ONLY
// const printProfileData = (profileDataArr) => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log("================");

//   // Is the same as this...
//   profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// LESSON 9.2

// This...
// const generatePage = () => 'Name: Jane, Github: janehub';
// Is the same as this...
// const generatePage = (userName, githubName) =>
//   `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage("Jane", "janehub"));

// Adding Template Literals (back tick) allows us to see the manual carriage returns as below:
// const generatePage = (userName, githubName) => {
//     return `
//     Name: ${userName}
//     GitHub: ${githubName}
//     `;
// };

// Changing the code to be able to generate HTML
const generatePage = (name, github) => {
  return `
            <!DOCTYPE html> 
            <html lang="en"> 
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <title>Portfolio Demo</title>
            </head>
          
            <body>
              <h1>${name}</h1>
              <h2><a href="https://github.com/${github}">Github</a></h2>
            </body>
            </html>
            `;
};

// console.log(name, github);
// console.log(generatePage(name, github));

fs.writeFile("index.html", generatePage(name, github), (err) => {
  if (err) throw err;

  console.log("Portfolio complete! Check out index.html to see the output!");
});
