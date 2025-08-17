import React from "react";

const Gallery = ({ images }) => {
    if (!images || images.length === 0){
        return <p>No Images yet</p>
    }
    return (
        <div className="gallery">
            {images.map((img, index) => (
        <img key={index} src={img} alt={`Screenshot ${index + 1}`} className='screenshot' />
                ))};
        </div>
    );
};

export default Gallery;