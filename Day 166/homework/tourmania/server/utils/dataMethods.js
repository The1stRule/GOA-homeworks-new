const fs = require("fs");

const readFile = (filePath) => {
    return fs.readFileSync(filePath, "utf-8");
}

const writeFile = (filePath, data) => {
    return fs.writeFileSync(filePath, data, "utf-8");
}

module.exports = { readFile, writeFile };