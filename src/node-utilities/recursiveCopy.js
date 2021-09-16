const fs = require("fs");
const path = require("path");
const { errTxt, warnTxt, infoTxt, log } = require("./shortFunctions");

const RecursCopySync = ({ src, destination, logDuplicates = true }) => {
  const files = fs.readdirSync(path.resolve(src));

  files.map((file) => {
    const srcPath = path.resolve(src, file);
    const destPath = path.resolve(destination, file);

    const srcStats = fs.lstatSync(srcPath);
    const srcIsDir = srcStats.isDirectory();
    const destExists = fs.existsSync(destPath);

    if (destExists) {
      if (logDuplicates)
        log(`❕  ${errTxt(file)} already exists at ${warnTxt(destPath)}`);
    }

    if (!destExists && srcIsDir) {
      log(`✔️  ${infoTxt("Creating")} ${warnTxt(file)} at ${destination}`);
      fs.mkdirSync(destPath);
      RecursCopySync({ src: srcPath, destination: destPath });
    } else if (destExists && srcIsDir) {
      RecursCopySync({ src: srcPath, destination: destPath });
    }

    if (!destExists && !srcIsDir) {
      log(`✔️  ${infoTxt("Copying")} ${warnTxt(file)} to ${destination}`);
      fs.copyFileSync(srcPath, destPath);
    }

    return true;
  });
};

module.exports = RecursCopySync;
