import { useEffect, useState } from "react";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data))

      .catch((err) => console.error(err));
    return () => {};
  }, []);

  return (
    <div>
      <h3>Photos Gallery</h3>
      <div>
        {photos.splice(0, 2).map((photo) => {
          return <img key={photo.id} src={photo.thumbnailUrl} />;
        })}
      </div>
    </div>
  );
};

export default PhotoGallery;
