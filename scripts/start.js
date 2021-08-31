const chalk = require("chalk");
const fs = require("fs-extra");
const path = require("path");
const ejs = require("ejs");

const projectName = process.argv[2];
console.log("> 启动项目：" + projectName);
let outFile = "";
if (!projectName) {
    console.log(chalk.redBright.bold("ERROR：缺少项目名称！"))
    console.log(chalk.redBright("命令格式: yarn run start <projectName>"))
    console.log("\n")
    console.log(chalk.blueBright("<------------------------可选择的项目名称---------------------------->"))
    getProjectList();
    console.log("\n")
} else {
    fs.ensureDirSync(`.cache/${projectName}`);

    const templateCode = fs.readFileSync(path.resolve(__dirname, "../config/vite.config.ejs"));
    const content = ejs.render(templateCode.toString(), {
        projectName
    });
    outFile = path.resolve(__dirname, `../.cache/${projectName}/vite.config.js`);
    fs.outputFileSync(outFile, content);

    const templateIndexCode = fs.readFileSync(path.resolve(__dirname, "../config/index.ejs"));
    const contentIndex = ejs.render(templateIndexCode.toString(), {
        projectName
    });
    const outFileIndex = path.resolve(__dirname, `../.cache/${projectName}/index.html`);
    fs.outputFileSync(outFileIndex, contentIndex);

    startProject();
}

async function spawnAction (...args) {
    const { spawn } = require('child_process')
    return new Promise(resolve => {
        const proc = spawn(...args)
        proc.on('close', () => {
            resolve()
        })
    })
}

async function startProject() {
    const cmd = path.resolve(__dirname, "../node_modules/.bin/vite.cmd")
    const config = path.resolve(__dirname, `../.cache/${projectName}/vite.config.js`)
    await spawnAction(cmd, [`--config=${config}`], {
        stdio: 'inherit'
    });
}

function getProjectList () {
    let fsList = fs.readdirSync(path.resolve(__dirname, "../packages"));
    if (fsList) {
        fsList = fsList.filter(v => !v.startsWith("lk-"));
        fsList.forEach(f => {
            console.log(chalk.blueBright(">· " + f))
        })
    }
}

