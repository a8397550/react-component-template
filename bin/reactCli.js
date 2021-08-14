#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const c = require('ansi-colors')
let createFilePath;

process.argv.forEach((text, index) => {
  if (text === '--create' || text === '-c') {
    createFilePath = process.argv[index + 1]
  }

  if (text === '--output' || text === '-o') {
    // ... 
  }
  // ...
})

if (!createFilePath) {
  console.log(c.yellow("Usage: create [options] <app-name>"))
  console.log(c.yellow("hibobi-react-cli -c <app-name>"))

  return
}

const exclude = ['node_modules', 'bin', 'package-lock.json', 'yarn.lock']


const checkDirectory = function (src, dst, callback) {
  fs.access(dst, fs.constants.F_OK, (err) => {
    if (err) {
      fs.mkdirSync(dst);
      callback(src, dst);
    } else {
      callback(src, dst);
    }
  });
}

const copy = function (src, dist) {
  const paths = fs.readdirSync(src); //同步读取当前目录
  paths.forEach(function (path) {
    if (exclude.includes(path)) {
      return;
    }
    var _src = src + '/' + path;
    var _dist = dist + '/' + path;
    fs.stat(_src, function (err, stats) {  //stats  该对象 包含文件属性
      if (err) throw err;
      if (stats.isFile()) { //如果是个文件则拷贝 
        let readable = fs.createReadStream(_src);//创建读取流
        let writable = fs.createWriteStream(_dist);//创建写入流
        readable.pipe(writable);
      } else if (stats.isDirectory()) { //是目录则 递归 
        checkDirectory(_src, _dist, copy);
      }
    });
  });
}

try {
  const target = path.resolve(createFilePath);
  const source = path.resolve(__dirname, '../');

  fs.mkdirSync(target);
  copy(source, target);
} catch (e) {
  console.error(c.red(e))
}

