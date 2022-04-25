import React, { useState } from "react";
import Carousel from "./Carousel";
import AlbumSongs from "./AlbumSongs";
import useAlbums from "../hooks/useAlbums";

const AlbumList = () => {
  const [albums] = useAlbums();

  //console.log(albums[2].name);

  const [activeAlbum, setActiveAlbum] = useState(0);
  //console.log(activeAlbum);

  const setAlbum = (index) => {
    setActiveAlbum(index);
  };

  return (
    <div>
      <Carousel albums={albums} setAlbum={setAlbum} activeAlbum={activeAlbum} />
      {<AlbumSongs albums={albums} activeAlbum={activeAlbum} />}
    </div>
  );
};

export default AlbumList;
