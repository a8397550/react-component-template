const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const { dirname } = path;
const resolve = function (filePath) {
  return path.join(__dirname, '.', filePath)
}
const styleRootPath = resolve('../dist/style.css');
try {
  fs.unlinkSync(styleRootPath);
} catch (e) {
  //
}


const writeFile = function (filePath, content) {
  let loop = false; // 防止死循环
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      if (err.code === 'ENOENT' && !loop) {
        loop = true;
        fs.mkdirSync(dirname(filePath))
        writeFile(filePath, content);
      } else {
        console.error(err);
      }
    }
  })
}

const appendToFile = (path, contents) => {
  return new Promise((resolve, reject) => {
    mkdirp(dirname(path), function (err) {
      if (err) {
          reject(err)
      }

      fs.appendFileSync(path, contents)
      resolve();
    });
  });
}


module.exports = function (content, filename) {
  let filePath = filename.match(/src\/.*\.less/g)[0]

  if (filePath) {
    const writeTargetFilePath = filePath.replace('src/', '../dist/')
    filePath = writeTargetFilePath.replace('.less', '.css')
    filePath = resolve(filePath)
    
    // 写 css 
    writeFile(filePath, content)
  }

  appendToFile(styleRootPath, content)
  return content;
}