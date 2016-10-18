var React = require('react');

var AlbumDetail = function(props) {
  if(!props.album) {
    return <h3>No album selected...</h3>
  } 
    return(
      <div>
        <h3>Name: {props.album.name}</h3>
      </div>
    )
}

module.exports = AlbumDetail;
