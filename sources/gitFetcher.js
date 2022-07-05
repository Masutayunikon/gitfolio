let fs = require("fs");
let axios = require("axios");

function sleep(number) {
    return new Promise(resolve => setTimeout(resolve, number));
}

function getUserInfo(username) {
    axios.get(`https://api.github.com/users/${username}`).then(function(response) {
        fs.writeFileSync(`${username}.json`, JSON.stringify(response.data, null, 4));
    });
}

function getUserRepos(username) {
    axios.get(`https://api.github.com/users/${username}/repos`).then(function(response) {
        fs.writeFileSync(`${username}-repos.json`, JSON.stringify(response.data, null, 4));
    });
}

exports.getUserInfo = getUserInfo;
exports.getUserRepos = getUserRepos;