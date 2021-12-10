const fs = require("fs").promises;
const readline = require("readline");

class Model {
    constructor() {}

    async getMenu() {
        const menu = await fs.readdir("./topics");
        // console.log(menu);
        for (let i = 0; i < menu.length; i += 1) {
            console.log(`${i + 1}. ${menu[i].slice(0, -4)}`);
        }
    }
}

const model = new Model();
console.log(model.getMenu());
module.exports = Model;