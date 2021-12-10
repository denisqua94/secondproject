const fs = require("fs").promises;
const readline = require("readline");

class Model {
    constructor() {}

    async getMenu() {
        const menu = await fs.readdir("./topics");
        let arr = []
        // console.log(menu);
        for (let i = 0; i < menu.length; i += 1) {
            arr.push(`${menu[i].slice(0, -4)}`);
        }
        return arr
    }
    async readStr(id){
      const menu = await this.getMenu();
      if( id > menu.length+1){
        return false
      }
      console.log(menu);
      const read = await fs.readFile(`./topics/${menu[id-1]}.txt`, 'utf-8')
      console.log(read)
      
      
      // const approveTopic = await this.askQuestion();
      // if(nameFile==="1"){}
      // let strs = []
      // const 
    }
  
}

const model = new Model();
console.log(model.readStr(3));
module.exports = Model;
