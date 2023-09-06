<div style= "background-color:#012169; padding: 20px 20px">

# URL_MODULES @lec6 6/9/2023 / wednesday

- If we used the res.url then it will have limited option like it does have query parameter and many more functionality
- but we installed external url pakage by using npm

```
 npm i url
```

## componentOfURL

- protocol http://
- domain www.google.com
- path /about
- query ?price=200
-

## how to use it:

```
const url = require(url)
```

## method.

- <b>Parse</b> the parse method will help to seperate all the url into differnt pieces
- like pathname,host,auth,search,query etc
- it will take two argument.
- - url
- - [parseQueryString=false] If `true`, the `query` property will always be set
-       to an object returned by the {@link querystring} module's `parse()` method. If `false`, the `query` property
-       on the returned URL object will be an unparsed, undecoded string.

```
const myUrl = url.parse(req.url,true)
```

</div>
