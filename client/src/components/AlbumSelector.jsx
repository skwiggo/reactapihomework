var React = require('react');

var AlbumSelector = React.createClass({

  handleChange: function(event){
    var newIndex = event.target.value;
    console.log(newIndex);
    //send info back 
    this.props.selectAlbum(newIndex);
  },

  render: function(){
    var options = this.props.albums.map(function(album, index){
      return <option key={index} value={index}>{album.name}</option>
    })    

    return(
      <select id="albums" onChange={this.handleChange}>
        {options}
        <option value="Select Album">Select Album</option>
      </select>
    )
  }
})

module.exports = AlbumSelector;
