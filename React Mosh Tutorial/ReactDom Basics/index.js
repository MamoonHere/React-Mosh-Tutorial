import React from 'react';  // We don't call this directly, but every time we write some jsx, a call is made to React.CreateElement on compilation. 
import ReactDOM  from 'react-dom';  //React virtual DOM

const element = <h1>Hello World</h1>   // this jsx is a React element
console.log(element);                  // Will show an object which is a react element which will later map to the DOM on render. 

ReactDOM.render(element, document.getElementById("root")); // ReactDOM will map to actual DOM. root is the div conatiner for entire app located in index.html

// In real world applications, instead of passing a simple element as above, we will pass App.js which is a root component for all our 
// other components. Hence the overall tree of components will get rendered by the ReactDOM.