export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_MUSIC = "GET_MUSIC";
export const removeFromFavourite = (fav) => ({ type: REMOVE_FROM_FAVOURITE, payload: fav });
export const addToFavourite = (fav) => ({ type: ADD_TO_FAVOURITE, payload: fav });

const albumCard = function (singleSong) {
  return `
        <div class="col text-center">
            <img class="img-fluid" src=${singleSong.album.cover_medium} alt="track" />
          <p>
              Track: "${`${singleSong.title}`}"<br>
              Artist: ${singleSong.artist.name}
          </p>
        </div>`;
};
export const getMusicAction = (artistName, querySelector) => {
  return async (dispatch, getState) => {
    console.log(getState);
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=` + artistName);
      if (response.ok) {
        let { data } = await response.json();
        dispatch({ type: GET_MUSIC, payload: { data } });
        let musicSection = document.querySelector(querySelector);
        for (let i = 0; i < 4; i++) {
          musicSection.innerHTML += albumCard(data[i]);
        }
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
