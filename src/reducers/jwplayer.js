import {
  FETCH_ALL_VIDEOS,
  FETCH_VIDEOS,
  FETCH_SEARCH_VIDEOS,
  FETCH_VIDEO_BYID,
  FETCH_MY_WATCHES,
} from "../actions/types";

const INITIAL_STATE = {
  all_videos: [],
  search_videos: [],
  videos: [],
  curVideo: null,
  mywatches: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_VIDEOS:
      let vds = action.videos.filter((item) => item.media_type === "video");
      return { ...state, videos: vds };
    case FETCH_ALL_VIDEOS:
      let avds = action.videos.filter((item) => item.media_type === "video");
      return { ...state, all_videos: avds };
    case FETCH_SEARCH_VIDEOS:
      let svds = action.videos.filter((item) => item.mediatype === "video");
      return { ...state, search_videos: svds };
    case FETCH_VIDEO_BYID:
      return { ...state, curVideo: action.video };
    case FETCH_MY_WATCHES:
      return { ...state, mywatches: action.watches };
    default:
      return state;
  }
}
