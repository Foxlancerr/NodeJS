<div style= "background-color:#012169; padding: 20px 20px">

# FS_Modules lec3 3/9/2023

    with the help of fs_modules we can read, write, update and delete any file
    we can read and write data asynchronously and syncronously.

## import_fs_modules

```
 const fs = require('fs')
```

# Some popular methods

## 1. writeFile

we can create or update the file both asynchronously and syncronously

### sync_writing

    In the sync writing there is a function in fs modules called
    fs.writeFileSync which can take two arguments.

- 1.  the path to the file
- 2.  the text which will be included in that file
- if there have error occurs we can handle it by usingtry and catch block

```
 const writeFileResult = fs.writeFileSync('./filePath',"hello world") }
```

### async_writing

    In the Async writing there is a function in fs modules called
    fs.writeFile which can take three arguments.

- 1.  the path to the file
- 2.  the text which you will include in that file
- 3.  the callback function which will show its result and also have 1 argument (err)

it does not return anything.

```
fs.writeFile('./filePath',"PakistanZindabad",(err)=>{ })
```

# note

- if the directory exist then it will updated, else it will create new directory with the given
- path name.

## AppendFiles

    Append files is another function that can help to add the data(text) without overriding the
    original text, it will place the content next to the old content without overridding the
    original content.

- it may be synchronously or asynchronously

### sync_appending

    in the sync reading there is a function in fs modules called
    fs.appendFileSync which can take two arguments.

- 1. the path to the file
- 2. the text which will be inserted

- if there have error occurs we can handle it by using try and catch block

```
const appendFileResult = fs.appendFileSync('./filePath',"appended Text")
```

### async_reading

    In the Async appending there is a function in fs modules called
    fs.appendFile which can take three arguments.

- 1. the path to the file
- 2. the encoded format of the file like (UTF8, UTF-8 etc)
- 3. the callback function which will show its result and also have two arguments (err, result)
- it does not return anything

```
fs.readFile('./filePath',"appended Text",(err,res)=>{ }) }
```

## readFiles

    we can read the file both asynchronously and syncronously

### sync_reading

    in the sync reading there is a function in fs modules called
    fs.readFileSync which can take two arguments.

- 1. the path to the file
- 2. the encoded format of the file like (UTF8, UTF-8 etc)
     and it also return the result of that file.
- if there have error occurs we can handle it by usingtry and catch block

```
const readFileResult = fs.readFileSync('./filePath',"utf8")
```

### async_reading

    in the Async reading there is a function in fs modules called
    fs.readFile which can take three arguments.

- 1.  the path to the file
- 2.  the encoded format of the file like (UTF8, UTF-8 etc)
- 3.  the callback function which will show its result and also have two arguments (err, result).

```
const readFileResult = fs.readFile('./filePath',"utf8",(err,res)=>{ })
```

## copyFile

    with the help of this fs modules, it can be possible to copy a files
    it may be synchrously or asynchronously.

### sync_copyFile

    in the Async reading there is a function in fs modules called
    fs.copyFileSync which can take three arguments.

-       1) the path to the file (sourcs)
-       2) the disnation of the file where we can paste the contents

```
 fs.copyFileSync("source path", "distination path") }
```

### async_copying

-     in the Async reading there is a function in fs modules called
-     copyFile which can take three arguments.
- 1. the path to the file (sourcs)
- 2. the disnation of the file where we can paste the contents
- 3. the callback function which will show its result and also have two
     arguments (err, result).

```
 fs.copyFileSync('./filePath',"utf8",(err,res)=>{ }) }
```

## deleteFile

    we can delete the file by using the fs module,this may be synchronously
    and Asynchronously.
    we used a specail method called @unlink which is used for deleting purposes.

### delete_sync

    we can delete file synchronously by using a function in fs modules called
    <i>unlickSync</i> which can take one arguments.

- 1.  the path to the file (sourcs) which is deleted

```
 fs.unlinkSync("pathname")
```

## delete Async

    we can delete the file having a function in fs modules called
    unlink which can take two arguments.

- 1. the path to the file (sourcs) which is deleted
- 3. the callback function which will show its result and also have two arguments (err, result).

```
fs.unlink("pathname",(err,res)=>{ })
```

</div>
