const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const ejs = require("ejs");

const projectName = process.argv[2];
if (!projectName) {
    console.log("\n")
    console.log(chalk.redBright.bold("ERROR：命令缺少项目名称！"))
    console.log(chalk.redBright("命令格式: yarn run create <projectName>"))
    console.log("\n")
} else {
    fs.copySync(path.resolve(__dirname, "../packages/lk-template"), path.resolve(__dirname, `../packages/${projectName}`));
    const templatePath = path.resolve(__dirname, `../packages/${projectName}/package.ejs`)
    const templateCode = fs.readFileSync(templatePath);
    const content = ejs.render(templateCode.toString(), {
        projectName,
        version: "1.0.0"
    });

    outFile = path.resolve(__dirname, path.resolve(__dirname, `../packages/${projectName}/package.json`));
    fs.outputFileSync(outFile, content);

    fs.remove(templatePath, function(err) {
        if (err) return console.log(chalk.red(err))
        console.log(chalk.green(`${projectName}工程生成成功！\n`))
    })
}

