const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;
fs.writeFileSync(filePath,'This is simple file');

fs.readFile(filePath,'utf8',(err,item)=>{
    console.log(item);
});

fs.appendFile(filePath,' and file name',(err)=>{
    if(!err) console.log("file is updated");
});

fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err) console.log("file is updated");
});
//buffer is temperorary memory