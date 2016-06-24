const React = require('react');
const ReactDOM = require('react-dom');

import Component from './component.js'
console.log(Component);
// Create application container
var app = document.createElement('div');
app.className = 'App';
document.body.appendChild(app);

ReactDOM.render(
  <Component name="Prop"/>, app
);
