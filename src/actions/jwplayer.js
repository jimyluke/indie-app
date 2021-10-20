import { API_URL, createNotification, errorMessage, Client } from "./index";
import { message } from "antd";
import {
  FETCH_VIDEOS,
  FETCH_ALL_VIDEOS,
  FETCH_SEARCH_VIDEOS,
  FETCH_VIDEO_BYID,
} from "./types";

export function uploadVideo(data) {
  if (!data.video) return;

  const client = Client(true);
  return async (dispatch) => {
    try {
      const formdata = new FormData();
      formdata.append("file", data.video);
      formdata.append("award", data.award);
      formdata.append("title", data.title);
      formdata.append("description", data.description);
      formdata.append("genres", data.genres);
      formdata.append("release_date", data.release_date);
      formdata.append("cast", data.cast);
      formdata.append("director", data.director);
      formdata.append("duration", data.duration);

      await client.post(`${API_URL}/jwplayer/upload`, formdata);
      message.success("Video has been uploaded successfully");
    } catch (err) {
      createNotification("Upload Video", errorMessage(err));
    }
  };
}

export function uploadVideoFromURL(data) {
  const client = Client(true);
  return async (dispatch) => {
    try {
      let res = await client.post(`${API_URL}/jwplayer/upload_url`, data);
      message.success("Video has been uploaded successfully");
      console.log(res.data);
    } catch (err) {
      createNotification("Upload Video", errorMessage(err));
    }
  };
}

export function fetchJWVideos() {
  const client = Client(true);
  return async (dispatch) => {
    try {
      let res = await client.get(`${API_URL}/jwplayer/list`);
      if (res.data.result) {
        dispatch({
          type: FETCH_ALL_VIDEOS,
          videos: res.data.result.media,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export function queryJWVideos(query = "") {
  const client = Client(true);
  return async (dispatch) => {
    try {
      let res = await client.get(`${API_URL}/jwplayer/list?query=${query}`);
      if (res.data.result) {
        dispatch({
          type: FETCH_VIDEOS,
          videos: res.data.result.media,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchMyVideos() {
  const client = Client(true);
  return async (dispatch) => {
    try {
      let res = await client.get(`${API_URL}/jwplayer/my-list`);
      if (res.data.result) {
        dispatch({
          type: FETCH_VIDEOS,
          videos: res.data.result.media,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export function searchJWVideos(query = "") {
  const client = Client(true);
  return async (dispatch) => {
    try {
      let res = await client.get(`${API_URL}/jwplayer/search?query=${query}`);
      if (res.data.result) {
        dispatch({
          type: FETCH_SEARCH_VIDEOS,
          videos: res.data.result.videos,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export function updateVideo(data) {
  if (!data.id) return;
  const client = Client(true);
  return async (dispatch) => {
    try {
      await client.put(`${API_URL}/jwplayer/update`, data);
      message.success("Video has been updated successfully");
    } catch (err) {
      createNotification("Update Video", errorMessage(err));
    }
  };
}

export function fetchVideoById(mediaId) {
  const client = Client(true);
  return async (dispatch) => {
    try {
      let res = await client.get(`${API_URL}/jwplayer/media/${mediaId}`);
      if (res.data.result) {
        dispatch({
          type: FETCH_VIDEO_BYID,
          video: res.data.result,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export function filterVideoByGenre(genre) {
  return (dispatch, getState) => {
    const videos = getState().jwplayer.all_videos;
    return videos.filter((video) => video.metadata.tags.includes(genre));
  };
}
