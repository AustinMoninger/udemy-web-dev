var database = [
    {
    username: "austin",
    password: "password"
    }
];

var newsFeed = [
    {
        username: "Bob",
        timeline: "here is a picture"
    },
    {
        username: "Sally",
        timeline: "here is a like"
    }
];

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Wrong username or password");
    }
}

signIn(usernamePrompt, passwordPrompt);