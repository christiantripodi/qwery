import { Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import Main from "./Main";
import Player from "./Player";
import { useEffect } from "react";

const Home = () => {
  const albumCard = function (singleSong) {
    return `
        <div class="col text-center">
            <img class="img-fluid" src=${
              singleSong.album.cover_medium
            } alt="track" />
          <p>
              Track: "${`${singleSong.title}`}"<br>
              Artist: ${singleSong.artist.name}
          </p>
        </div>`;
  };

  const fillMusicSection = async (artistName, querySelector) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        let { data } = await response.json();
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
  useEffect(() => {
    fillMusicSection("bonobo", "#bonobo");
    fillMusicSection("nirvana", "#nirvana");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fillMusicSection("blues", "#blues");
  });

  return (
    <Container fluid>
      <Row>
        <SideBar />
        <Main />
      </Row>
      <Player />
    </Container>
  );
};
export default Home;
