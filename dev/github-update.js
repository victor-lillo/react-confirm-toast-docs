require('dotenv').config();
const { execSync } = require('child_process')

const GITHUB_COMMIT_NAME = process.env.GITHUB_COMMIT_NAME

const console_run = async () => {
    execSync(`git add .`)
    execSync(`git commit -m ${GITHUB_COMMIT_NAME ? `"${GITHUB_COMMIT_NAME}"` : "commit"}`)
    // execSync("git commit -m " + '"Saludo hermano"')
    execSync(`git push`)
}

console_run()
