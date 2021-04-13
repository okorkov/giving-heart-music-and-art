import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
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
];

class Gallery extends React.Component {
  render() {
    return <ImageGallery
     items={images}
     autoPlay={true}
     thumbnailPosition='top'
     
    />;
  }
}

export default Gallery;

