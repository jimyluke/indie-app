import { FETCH_VIDEOS } from "../actions/types";

const INITIAL_STATE = {
  videos: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_VIDEOS:
      let vds = action.videos.filter((item) => item.media_type === "video");
      return { ...state, videos: vds };
    default:
      return state;
  }
}
