<div style= "background-color:#012169; padding: 20px 20px">

# version Control

 *   Every code have its own version system. and the version is updated time to time.

## how to check version

- open your pakage.json file and look your dependicies version.
- like 13.1.0 is version
- it have 3 parts seperate by dot (.)
  - 1st part --> 13
  - 2nd part --> 1
  - 3rd part --> 0


    The 3rd part is also called Minor Version(optional) because in here we can fix some small bugs

    The 2nd part is recomended bug fix (critical security fix), we can fix a large number of bugs.

    The 1st part is Major Version, if the major version is updated and we have written code in old version, then the entire application is destroyed.

## how to install specific version

we can write the dependencies name and then add @ and then specific version 3.4.6

```
npm i express@3.5.9
```

## how to install latest version

write the dependencies name and then add @latest

```
npm i express@latest
```

## Carret symbol ^

It means that not change the major version,only change the minor and recominded as according to your need.

install all recomended and minor versions Automitically.

    4.0.0
      |
     upto
      |
    4.18.18

    not change the first part.

## squaqly line symbol ~

In this stricness is more,we can not change the recomended version also.

install only the minor versions Automitically.

    4.0.0
      |
     upto
      |
    4.18.18

    not change the first and the 2nd part.

## Give specific range

we also provide some range.

    2.4.0 - 2.9.0

## we also give greater

    > 4.5.18

## we also do conditaionally

    4.5.18  ||  4.5.18  || 4.8.8

</div>
