const { spawn } = require('child_process')
const c = require('ansi-colors')
const path = require('path');

function runService() {
  const task = spawn('node', ['index'], {
    cwd: path.join(__dirname, './')
  })

  task.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
}

function runWatch() {
  const task = spawn('npm', ['run', 'watch-build'], {
    cwd: path.join(__dirname, '../')
  })

  task.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
}

runService();
runWatch();