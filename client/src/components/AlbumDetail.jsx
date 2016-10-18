var React = require('react');

var AlbumDetail = function(props) {
  var spotify = 'https://embed.spotify.com/?uri=spotify:album:';
  if(!props.album) {
    return(<ul>
        {props.albums.map(function(album, index) {
          
          if(album.available_markets.indexOf("ES") > -1) {
            
            return <li key={index} value={index}>{album.name}</li>
            }
          })}
        </ul>)
    } 
  return(
      <div id="response">
        <h3>Name: {props.album.name}</h3>
        <img src={props.album.images[0].url} width="200px" height="200px"></img>
        <h3><a href={props.album.external_urls.spotify}>Spotify Link</a></h3>
        <iframe src={spotify + props.album.id} width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
      </div>
    )
}

module.exports = AlbumDetail;
 