<div style= "background-color:#012169; padding: 20px 20px">

# SignInSigup Functionality Is Added.
    Here we can set sign in and sign up pages.
    we can create a seperate collection where the user username,password and email is stored.

## Routes
    Get              localhost:3000                      front page to shortUrLs
    Get              localhost:3000/register             register page
    Get              localhost:3000/login                Login page
    Get              localhost:3000/url/id               check the short url it may work or not 
    Delete           localhost:3000/url/id               delete the urls from database
    Put              localhost:3000/url/id               update the urls in database
    Post             localhost:3000/user/login           post request to get login database
    Post             localhost:3000/user/register        post request to store data in database
    Post             localhost:3000/url                  post request to store urls in database

## Example
```
<div>
    <% url.forEach((ele,id) => { %>
        <tr>
          <td><%= id + 1 %></td>
          <td><%= ele.siteUrl %></td>
          <td><%= ele.shortId %></td>
          <td><%= ele.totalRequest.length %></td>
        </tr>
        <% }) %>
</div>
```



</div>
