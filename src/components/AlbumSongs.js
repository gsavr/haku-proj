import "../css/albumSongs.css";
import React, { useState, useEffect } from "react";
import useSongs from "../hooks/useSongs";
import SongsList from "./SongsList";

const AlbumSongs = ({ activeAlbum }) => {
  const [songs1] = useSongs(1);
  const songs1Sorted = songs1.sort((a, b) => a.song_order - b.song_order);
  const [songs2] = useSongs(2);
  const songs2Sorted = songs2.sort((a, b) => a.song_order - b.song_order);
  const [songs3] = useSongs(3);
  const songs3Sorted = songs3.sort((a, b) => a.song_order - b.song_order);
  const [songs4] = useSongs(4);
  const songs4Sorted = songs4.sort((a, b) => a.song_order - b.song_order);
  const [songs5] = useSongs(5);
  const songs5Sorted = songs5.sort((a, b) => a.song_order - b.song_order);

  const [currentAlbum, setCurrentAlbum] = useState("");
  //console.log(`current in songs ${currentAlbum}`);

  useEffect(() => {
    setCurrentAlbum(`songs${activeAlbum + 1}`);
  }, [activeAlbum]);

  const showSongs = (currentAlbum) => {
    let songs = [];

    if ("songs1" == currentAlbum) {
      songs = songs1Sorted;
    } else if ("songs2" == currentAlbum) {
      songs = songs2Sorted;
    } else if ("songs3" == currentAlbum) {
      songs = songs3Sorted;
    } else if ("songs4" == currentAlbum) {
      songs = songs4Sorted;
    } else if ("songs5" == currentAlbum) {
      songs = songs5Sorted;
    }
    return <SongsList songs={songs} />;
  };

  return (
    <div className="list-wrapper">
      <div className="song-list">{showSongs(currentAlbum)}</div>
    </div>
  );
};

export default AlbumSongs;
