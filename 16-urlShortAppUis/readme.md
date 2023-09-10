<div style= "background-color:#012169; padding: 20px 20px">

# How render A page:
    1. we can make a sperate file home.ejs inside the views folder.
    2. In the routes folder where we write the request responce logics,we can used the render method.
       res.render("filename")
    3. we can set the view engine as ejs.
       app.set("view engine", "ejs");
    4. we can set that that the ejs read the views folder
       app.set("views",path.resolve(__dirname, "views"))

## <%=   %>  
    will print the code in the browser

## <%   %>  
    will used to enable logics in the ejs file

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
