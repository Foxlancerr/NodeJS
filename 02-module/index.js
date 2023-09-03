/**
 ************************************************************************
 * @Modules                       @lec2                           3/9/2023
 *  modules are not a complex words it means divide the code into differents 
 *  files or store the same logics with one file and other logics into other
 *  files.
 *  with this our code readibily is very easy and we can understand easily
 * 
 * @Export_modules
 *    for export we can used different ways
 *    1) @param { 
 *          modules.exports = "hello world"
 *    }
 *    2) @param { 
 *         exports.test = "hello world"
 *    }
 *    3) @param { 
 *         modules.export ={
 *          add: "addition",
 *          integer: 34,
 *          sub: "subtract"
 *    }
 *    }
 * 
 * @import_modules
 *    we can import the module the by the following ways
 *    we used @require to import the file in node Js
 *    1) by fileName
 *        @param { const hello = require("./filename")}
 *    2) from NodeModules
 *        @param { const hello = require("yourNodeModulesFileName")}
 *    2) object Destructuring
 *        @param { const {add,integer,sub} = require("./fileName")}
 * 
 * @folderDirectoriesStructure
 *   ./   current directory 
 *   ../   step backward 
 * 
 * @note
 *   when we import a file without specifying its diretory path, so by
 *   default node will search that file in the node_modules folder
 *   @param { const fs = require("fs"), const data = require("data")  }
 *   in here we can not specify the path 
 ************************************************************************
 */

const Math = require("./Math");
// object Destructuring
const { greet, age } = require("./Math");

console.log(Math)
console.log(Math.greet)
console.log(Math.age)
console.log(Math.combo)
console.log(Math.Mul(8, 4))
console.log(Math.combo.Add(3, 4))
console.log(Math.combo.Sub(3, 4))

// example of node modules
const fs = require('fs')
console.log(fs);

/**
* ************** @The_End ******************
* ************** @The_End ******************
* ************** @The_End ******************
*/