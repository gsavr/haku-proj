import { useState, useEffect } from "react";
import hakuapp from "../api/hakuapp";

const useAlbums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    const response = await hakuapp.get("/albums.json");

    //console.log(response.data);
    setAlbums(response.data);
  };

  return [albums];
};

export default useAlbums;
