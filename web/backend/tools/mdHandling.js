const dirTree = require("directory-tree");
const path = require('path');

async function scrapeMD(){
    return await dirTree(path.join(__dirname, "../../md_files"), {attributes:['type']} )
}

async function getTLFolders (){ // create top level buttons
    return await scrapeMD().then(a => {
        a.children.forEach(child => {
            let cpath = child.path.split("\\web\\")
            child.path = cpath[cpath.length-1]
        })
        return a.children.filter(child=>{
            return child.type == 'directory';
        })
    })
}

function getButtons(inp) {
    console.log(inp)
}

getTLFolders().then(a =>{
    console.log(a)
})

module.exports = { getButtons, getTLFolders }
