import React from 'react';
import ImageGallery from 'react-image-gallery';
import CircularProgress from '@material-ui/core/CircularProgress';

class Gallery extends React.Component {

  state = {
    images : []
  }

  componentDidMount() {
    this.setState({
      images: [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
          sizes: "(min-width: 400px) 400px, 100vw"
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ]
    })
  }

  render() {
    return (
      (this.state.images.length === 0) ?
      <div style={{padding: '20%'}}><div style={{textAlign: 'center'}}><h4>Please Wait</h4><br /><CircularProgress /></div></div> :
      <ImageGallery
      items={this.state.images}
      autoPlay={true}
      thumbnailPosition='top'
      />
    )
  }
}

export default Gallery;

