const dirTree = require("directory-tree");
const path = require('path');

async function scrapeMD(){
    let tree = await dirTree(path.join(__dirname, "../../md_files"), {attributes:['path']} )
    console.log(JSON.stringify(tree))
}

function getButtons(inp) {
    console.log(inp)
}

scrapeMD()

module.exports = { getButtons }
