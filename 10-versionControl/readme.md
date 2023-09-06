# version Control
 *   Every code have its own version system. and the version is updated time to time.

 ## how to check version
 -   open your pakage.json file and look your dependicies version.
 -   like 13.1.0 is version
 -   it have 3 parts seperate by dot (.)
        -  1st part --> 13
        -  2nd part --> 1
        - 3rd part --> 0
 
    The 3rd part is also called Minor Version(optional) because in here we can fix some small bugs

    The 2nd part is recomended bug fix (critical security fix), we can fix a large number of bugs.

    The 1st part is Major Version, if the major version is updated and we have written code in old version, then the entire application is destroyed.

### how to install specific version
 we can write the dependencies name and then add @ and then specific version 3.4.6
```
npm i express@3.5.9
```
### how to install latest version
 write the dependencies name and then add @latest
```
npm i express@latest
```
### Carret symbol ^
 It means that not change the major version,only change the minor and recominded as according to your need.

    4.0.0
      |
     upto    
      |    
    4.9.9
    
    not change the first part.