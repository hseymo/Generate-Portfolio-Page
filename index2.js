const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you located?',
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Please tell us about yourself:',
    },
    {
        type: 'input',
        name: 'LinkedIn',
        message: 'What is your LinkedIn URL?',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github URL?',
    }
])
.then((data) => {
    const filename = `${data.username}.html`;

    const { username, location, bio, LinkedIn, Github } = data; 

    fs.writeFile(filename, generateHTML(username, location, bio, LinkedIn, Github), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
})

const generateHTML = (user, loc, bio, link, git) => {
    let content = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio Page</title>
        <link rel="stylesheet" href="./assets/style.css">
    </head>
    <body>
        <h1>${user}</h1>
        <h2>${loc}</h2>
        <p>${bio}</p>
        <a href="${link}">LinkedIn URL</a> <br>
        <a href="${git}">Github URL</a>
    </body>
    </html>`;
    return content;
}