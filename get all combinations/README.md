# GetAllCombinations.js

## Background

This one was created as just a bit of fun really. 

Challenges are often posted on the whiteboards at work. 
The challenge that inspired this code sample was:

> Which two numbers when added together total 5? 

So I decided that the challenge must be a computable task and wrote a small function that would loop through all of the numbers between zero and five, and display all of the combinations of two numbers that would equal 5 when added together.

## Features
- Returns every combination of two numbers that can be added together to equal the value of the first input parameter (integer).
- Options
  - Return an array of objects with x and y identifiers
  - Render results to Document Object Model as a string
    - Specify id of target element
    - Default is set to 'body'
  - Log results to console as a string
- Error handling
      
    ##### If incorrect parameters are passed to the function an alert dialogue box will display the following message
     >A valid integer greater than 0 and a state must be passed to the function. A valid state can be either "console" (to log the results to the console), "dom" (to render the output to the current web document), or "array" to return a javascript array from the function. When the state "dom" is used a third id parameter may be passed. If the id parameter is passed with the "dom" state the resulting combinations will be rendered to the first dom element with a matching id. If no valid id is passed with the "dom" state, the resulting combinations will be appended to the body element.
- Cross Browser Compatibility
- No external dependencies
- Pure Javascript



## Examples

```javascript
var fiveToConsole = new GetAllCombinations(5, "console");

$output = [{"x":0,"y":5},{"x":1,"y":4},{"x":2,"y":3},{"x":3,"y":2},{"x":4,"y":1},{"x":5,"y":0}]
```

```javascript
var fiveToBody = new GetAllCombinations(5, "dom");

HTML body element will have the following string appended:
[{"x":0,"y":5},{"x":1,"y":4},{"x":2,"y":3},{"x":3,"y":2},{"x":4,"y":1},{"x":5,"y":0}]
```

```javascript
var fiveToId = new GetAllCombinations(5, "dom", "banner");

The first HTML element with the class "banner" will have the following string appended (if the class is not found it will fallback to the body element):
[{"x":0,"y":5},{"x":1,"y":4},{"x":2,"y":3},{"x":3,"y":2},{"x":4,"y":1},{"x":5,"y":0}]
```
```javascript
var fiveToArray = new GetAllCombinations(5, "array");

Will store the resulting array of objects in the fiveToArray variable.
```