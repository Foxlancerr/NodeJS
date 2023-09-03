/**
 ************************************************************************
 *@fs_modules                lec3                       3/9/2023
 *   with the help of fs_modules we can read, write, update and delete any
 *   file.
 *   we can read and write data asynchronously and syncronously.
 * 
 * @import_fs_modules
 *   @param { const fs = require('fs') }
 * 
 * @writeFile
 *   we can create or update the file both asynchronously and syncronously
 *   @sync_writing
 *     in the sync writing there is a function in fs modules called
 *     fs.writeFileSync which can take two arguments.
 *      1) the path to the file
 *      2) the text which will be included in that file
 *    if there have error occurs we can handle it by usingtry and catch block
 *   @param { const writeFileResult = fs.writeFileSync('./filePath',"hello world") }
 *   @async_writing
 *    in the Async writing there is a function in fs modules called
 *    fs.writeFile which can take three arguments.
 *      1) the path to the file
 *      2) the text which you will include in that file
 *      3) the callback function which will show its result and also have 1
 *         argument (err) 
 *    it does not return anything.
 *   @param {fs.writeFile('./filePath',"PakistanZindabad",(err)=>{ }) }
 * 
 * @note
 *   if the directory exist then it will updated, else it will create new directory with the given
 *   path name.
 * 
 * 
 * @AppendFiles
 *   Append files is another function that can help to add the data(text) without overriding the 
 *   original text, it will place the content next to the old content without overridding the 
 *   original content.
 *   it may be synchronously or asynchronously
 *   @sync_appending
 *     in the sync reading there is a function in fs modules called
 *     fs.appendFileSync which can take two arguments.
 *      1) the path to the file
 *      2) the text which will be inserted 
 *    if there have error occurs we can handle it by using try and catch block
 *   @param { const appendFileResult = fs.appendFileSync('./filePath',"appended Text") }
 *   @async_reading
 *    in the Async appending there is a function in fs modules called
 *    fs.appendFile which can take three arguments.
 *      1) the path to the file
 *      2) the encoded format of the file like (UTF8, UTF-8 etc)
 *      3) the callback function which will show its result and also have two
 *         arguments (err, result) 
 *    it does not return anything
 *   @param { fs.readFile('./filePath',"appended Text",(err,res)=>{ }) }
 * 
 * 
 * @readFiles
 *   we can read the file both asynchronously and syncronously
 *   @sync_reading
 *     in the sync reading there is a function in fs modules called
 *     fs.readFileSync which can take two arguments.
 *      1) the path to the file
 *      2) the encoded format of the file like (UTF8, UTF-8 etc) 
 *     and it also return the result of that file.
 *    if there have error occurs we can handle it by usingtry and catch block
 *   @param { const readFileResult = fs.readFileSync('./filePath',"utf8") }
 *   @async_reading
 *    in the Async reading there is a function in fs modules called
 *    fs.readFile which can take three arguments.
 *      1) the path to the file
 *      2) the encoded format of the file like (UTF8, UTF-8 etc)
 *      3) the callback function which will show its result and also have two
 *         arguments (err, result).  
 *   @param { const readFileResult = fs.readFile('./filePath',"utf8",(err,res)=>{ }) }
 * 
 * 
 * @copyFile
 *   with the help of this fs modules, it can be possible to copy a files
 *   it may be synchrously or asynchronously.
 *   @sync_copyFile
 *     in the Async reading there is a function in fs modules called
 *     fs.copyFileSync which can take three arguments.
 *       1) the path to the file (sourcs)
 *       2) the disnation of the file where we can paste the contents
 *   @param { fs.copyFileSync("source path", "distination path") }
 * 
 *   @async_copying
 *     in the Async reading there is a function in fs modules called
 *     @copyFile which can take three arguments.
 *       1) the path to the file (sourcs)
 *       2) the disnation of the file where we can paste the contents
 *       3) the callback function which will show its result and also have two
 *         arguments (err, result).  
 *   @param { fs.copyFileSync('./filePath',"utf8",(err,res)=>{ }) }
 * 
 * 
 * @deleteFile
 *   we can delete the file by using the fs module,this may be synchronously
 *   and Asynchronously.
 *   we used a specail method called @unlink which is used for deleting purposes.
 *   @delete_sync
 *     in the Async reading there is a function in fs modules called
 *     @unlickSync which can take one arguments.
 *       1) the path to the file (sourcs) which is deleted
 *   @param { fs.unlinkSync("pathname") }
 * 
 *   @delete_async
 *     in the Async reading there is a function in fs modules called
 *     @copyFile which can take two arguments.
 *       1) the path to the file (sourcs) which is deleted
 *       3) the callback function which will show its result and also have two
 *         arguments (err, result).  
 *   @param { fs.unlink("pathname",(err,res)=>{ }) }
 ************************************************************************
 */

