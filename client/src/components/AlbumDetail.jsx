var React = require('react');

var AlbumDetail = function(props) {
  if(!props.album) {
    return(
      <ul>{props.albums.map(function(album, index) {
        return <li key={index} value={index}>{album.name}</li>
      })}</ul>
      )
  } 
  return(
      <div>
        <h3>Name: {props.album.name}</h3>
        
        <img src = {props.album.images[0].url}></img>
      </div>
    )
}

module.exports = AlbumDetail;
 