import "../css/favorite.css";
import React, { useState, useEffect } from "react";
import _ from "lodash";

const Favorite = ({ favorites, setFavorite, id }) => {
  const [favorite, makeFavorite] = useState(false);
  const favSet = favorites.find((song) => song == id);

  useEffect(() => {
    // console.log(set);
    if (favSet) {
      makeFavorite(!favorite);
    }
  }, []);

  const markFavorite = (id) => {
    //remove if already favorite
    if (favSet) {
      setFavorite(
        _.remove(favorites, function (n) {
          return n !== id;
        })
      );
      makeFavorite(!favorite);
      localStorage.setItem("__Fav", JSON.stringify(favorites));
    } else {
      //make favorite
      setFavorite([...favorites, id]);
      makeFavorite(!favorite);
      localStorage.setItem("__Fav", JSON.stringify(favorites));
    }
  };

  return (
    <i
      onClick={() => markFavorite(id)}
      className={`material-icons favorite-${favorite} `}
    >
      <div className="tooltip">
        star
        <span className="tooltiptext">MARK FAVORITE</span>
      </div>
    </i>
  );
};
export default Favorite;
