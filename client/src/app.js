var React = require('react');
var ReactDOM = require('react-dom');

var AlbumBox = require('./components/AlbumBox.jsx')

window.onload = function(){
  ReactDOM.render(
    <AlbumBox></AlbumBox>,
    document.getElementById('app')
  );
}
