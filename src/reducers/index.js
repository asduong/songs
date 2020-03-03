import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I want it that way", duration: "2:35" },
    { title: "Poker Face", duration: "3:32" },
    { title: "Symphony No. 8", duration: "4:31" },
    { title: "Choral Fantasy", duration: "4:45" },
    { title: "Fidelio", duration: "3:10" },
    { title: "Für Elise", duration: "3:23" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
