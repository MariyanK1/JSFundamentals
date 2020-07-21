/*
Write a class that holds data about an HTTP Request.

It has the following properties:
⦁	method (String)
⦁	uri (String)
⦁	version (String)
⦁	message (String)
⦁	response (String)
⦁	fulfilled (Boolean)

The first four properties (method, uri, version, message) are set trough the constructor, in the listed order.
The response property is initialized to undefined and the fulfilled property is initially set to false.

Constraints
⦁	The constructor of your class will receive valid parameters. 
⦁	Submit the class definition as is, without wrapping it in any function.

Examples
Input
let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);	

Output
Request {
  method: 'GET',
  uri: 'http://google.com',
  version: 'HTTP/1.1',
  message: '',
  response: undefined,
  fulfilled: false
}


*/


class Request {
    constructor(method, uri, version, message, response, fulfilled) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}
