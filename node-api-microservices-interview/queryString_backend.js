// In Node.js we have different ways we can get data from the client.

// For GET request, we only have a url and a request header and we don't have a body like in POST request.

//So we can use the url to pass data to the server in 2 ways:

// 1- Route Parameter 
// url: optum.com/users/4, method: GET
// So 4 is the route parameter that represent a user with id = 4 in Data Base
// we can handle that request as below:
app.get('/users/:id', function(req,res){
    const userId = req.params.id  // we get userId from req.params object: 4
})

// 2- Query parameters also called Query String 
// url: optum.com/users?age=50&city=Skokie, method: GET
// So anything after ? is the Query parameters: age=50&city=Skokie, we use this date for filtering users based on age && city 
// we can handle that request as below:
app.get('/users', function(req,res){
    const {age, city} = req.query  // we get age and city from req.query object
})