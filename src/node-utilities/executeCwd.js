const { resolve } = require("path");
const { execSync } = require("child_process");

/**
 *
 * @param {String} cmd command string, e.g. 'npm install'
 * @param {String|Boolean} startMsg (optional) a message displayed in terminal before command is run.
 * @param {String|Boolean} endMsg (optional) a message displayed in terminal after command is run.
 */
function executeCwd(cmd, startMsg = false, endMsg = false) {
  try {
    if (startMsg) console.log(`\n${startMsg}`);
    execSync(cmd, {
      cwd: resolve(process.cwd()),
      stdio: "inherit"
    });
    if (endMsg) console.log(`\n${endMsg}`);
  } catch (err) {
    err.stdout;
    err.stderr;
    err.pid;
    err.signal;
    err.status;
  }
}

module.exports = executeCwd;
