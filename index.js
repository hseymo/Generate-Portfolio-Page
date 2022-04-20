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
    <h1>${data.username}</h1>
    <h2>${data.location}</h2>
    <p>${data.bio}</p>
    <a href="${data.LinkedIn}">LinkedIn URL</a> <br>
    <a href="${data.Github}">Github URL</a>
</body>
</html>`

    fs.writeFile(filename, content, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
})

