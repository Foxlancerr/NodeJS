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