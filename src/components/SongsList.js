import React, { useState, useEffect } from "react";
import Favorite from "./Favorite";

const SongsList = ({ songs }) => {
  const [favorites, setFavorite] = useState([]);
  console.log(favorites);

  useEffect(() => {
    let savedFavorite = JSON.parse(localStorage.getItem("__Fav"));
    if (savedFavorite) {
      setFavorite(savedFavorite);
    }
  }, []);

  const renderSongs = () => {
    return songs.map((song) => {
      return (
        <div className="ind-song" key={song.id}>
          <span className="song-detail-left">
            {song.song_order}.{" "}
            <Favorite
              id={song.id}
              favorites={favorites}
              setFavorite={setFavorite}
            />{" "}
            {song.song_name}{" "}
            {!!song.song_label &&
              song.song_label.map((label) => {
                return (
                  <span key={label} className="label">
                    {" "}
                    {label}{" "}
                  </span>
                );
              })}
          </span>
          <span className="song-detail-right">{song.song_duration}</span>
        </div>
      );
    });
  };

  return <div>{renderSongs()}</div>;
};

export default SongsList;
