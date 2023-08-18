// Query String: is alo called search string and it's the parameters that come after ? in the url, these parameters are been passes off to the server
// Ex: https://www.youtube.com/watch?v=oGzVgN70wg0  // qs = v=oGzVgN70wg0
// location= window.location
location.href // everything: https://www.youtube.com/watch?v=oGzVgN70wg0
location.pathname // just folders and file: /watch
location.search // ? + everything: ?v=oGzVgN70wg0
let qs = decodeURIComponent(location.search.substring(1)) // v=oGzVgN70wg0



///////////////////////
const queryString= 'name=Dom&age=45&occupation=Software+Developer'

// URLSearchParams is a built-in constructor function 
//Note: built-in objects/functions/properties/methods which we don't need to import or declare(initialize) in JavaScript code therefore we can use them directly such as window, URLSearchParams, Number, JSON.parse, Object.assign, Object.entries, parseInt, Math

const usp = new URLSearchParams(queryString)  // URLSearchParams object
console.log(usp.toString()) // name=Dom&age=45&occupation=Software+Developer

for(cont [key, value] of usp) {
    console.log(`${key}: ${value}`)
} 
// name: Dom
// age: 45
// occupation: Software+Developer

const myName= usp.get('name')
console.log(myName) // Dom

usp.set('name', 'Jeff')
