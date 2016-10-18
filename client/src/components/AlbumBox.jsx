var React = require('react');
var AlbumSelector = require('./AlbumSelector');
var AlbumDetail = require('./AlbumDetail');

var AlbumBox = React.createClass({
  getInitialState:function(){
    return { albums: [], focusAlbum: null }
  },

  setFocusEntry: function(index){
    var newEntry = this.state.albums[index];
    this.setState({focusAlbum: newEntry});
  },

  componentDidMount: function(){
    var url = "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF/albums";
    console.log(url);
    var request = new XMLHttpRequest();
    request.open("GET",url);
    request.onload = function(){
      console.log("Request has loaded");
     var jsonString = request.responseText;
     var data = JSON.parse(jsonString);
     var search = data.items;
     this.setState({
      albums: search
     })
    }.bind(this);
    request.send();
  },

  render:function(){
    return(
      <div>
        <h2>Albums Box</h2>
        <AlbumSelector albums={this.state.albums} selectAlbum={this.setFocusEntry}></AlbumSelector>
        <AlbumDetail album={this.state.focusAlbum}></AlbumDetail>
      </div>
    )
  }
  })


module.exports = AlbumBox;