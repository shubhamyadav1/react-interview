import { useState, useEffect } from "react";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    setPhotos(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Photo Gallery</h2>
      {photos.splice(0, 10).map((photo) => {
        return (
          <div key={photo.id}>
            <table>
              <ul>
                <li>
                  <p>{photo.title}</p>
                  <img src={photo.thumbnailUrl} />
                </li>
              </ul>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoGallery;
