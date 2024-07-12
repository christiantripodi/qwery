import { GET_MUSIC } from "../../actions/actions";

const initialState = {
  content: null,
};
const fetchMusic = (state = initialState, action) => {
  switch (action.type) {
    case GET_MUSIC:
      return { ...state, content: action.payload };

    default:
      return state;
  }
};
export default fetchMusic;
