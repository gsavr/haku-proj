import { useState, useEffect } from "react";
import hakuapp from "../api/hakuapp";

const useSongs = (id) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs(id);
  }, []);

  const getSongs = async (id) => {
    const response = await hakuapp.get(`/songs.json?album_id=${id}`);

    //console.log(response.data);
    setSongs(response.data);
  };

  return [songs];
};

export default useSongs;
