import { API_URL, errorMessage, Client } from "./index";
import { FETCH_MY_WATCHES } from "./types";

export function listWatch() {
  const client = Client(true);
  return async (dispatch) => {
    try {
      let res = await client.get(`${API_URL}/watch`);
      dispatch({
        type: FETCH_MY_WATCHES,
        watches: res.data.watches,
      });
    } catch (err) {
      console.log(errorMessage(err));
    }
  };
}

export function createWatch(mediaId) {
  const client = Client(true);
  return async (dispatch) => {
    try {
      await client.post(`${API_URL}/watch`, { media: mediaId });
    } catch (err) {
      console.log(errorMessage(err));
    }
  };
}
