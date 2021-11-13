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
      formdata.append("cover", data.cover);
      formdata.append("trivia", data.trivia);

      await client.post(`${API_URL}/jwplayer/media/upload`, formdata);
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
      let res = await client.post(`${API_URL}/jwplayer/media/upload_url`, data);
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
      let res = await client.get(`${API_URL}/jwplayer/media/list`);
      dispatch({
        type: FETCH_ALL_VIDEOS,
        videos: res.data || [],
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function queryJWVideos(query = "") {
  const client = Client(true);
  return async (dispatch) => {
    try {
      let res = await client.get(
        `${API_URL}/jwplayer/media/list?query=${query}`
      );
      dispatch({
        type: FETCH_VIDEOS,
        videos: res.data || [],
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchMyVideos() {
  const client = Client(true);
  return async (dispatch) => {
    try {
      let res = await client.get(`${API_URL}/jwplayer/media/my-list`);
      dispatch({
        type: FETCH_VIDEOS,
        videos: res.data || [],
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function searchJWVideos(query = "") {
  const client = Client(true);
  return async (dispatch) => {
    try {
      let res = await client.get(
        `${API_URL}/jwplayer/media/search?query=${query}`
      );
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
      await client.put(`${API_URL}/jwplayer/media/update`, data);
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

export function setFeaturedVideo(mediaId) {
  if (!mediaId) return;
  const client = Client(true);
  return async (dispatch) => {
    try {
      await client.post(`${API_URL}/jwplayer/media/featured`, { mediaId });
      message.success("Video has been updated successfully");
    } catch (err) {
      createNotification("Update Video", errorMessage(err));
    }
  };
}

export function deleteVideo(mediaId) {
  if (!mediaId) return;
  const client = Client(true);
  return async (dispatch) => {
    try {
      await client.delete(`${API_URL}/jwplayer/media/${mediaId}`);
      message.success("Video has been deleted successfully");
    } catch (err) {
      createNotification("Delete Video", errorMessage(err));
    }
  };
}

export function reportVideo(values) {
  const client = Client();
  return async (dispatch) => {
    try {
      await client.post(`${API_URL}/jwplayer/media/report`, values);
      message.success("Report has been sent successfully");
    } catch (err) {
      createNotification("Report Video", errorMessage(err));
    }
  };
}

export function filterVideoByGenre(genre) {
  return (dispatch, getState) => {
    const videos = getState().jwplayer.all_videos;
    return videos.filter((video) => video.metadata.tags.includes(genre));
  };
}

export function processAdminVideos() {
  return (dispatch, getState) => {
    const videos = getState().jwplayer.all_videos;
    if (!videos || videos.length === 0) return [];
    let result = [],
      k = 0;
    for (let pt of videos) {
      result.push({
        id: k,
        _id: pt.id,
        duration: pt.duration,
        author: pt.metadata.author,
        description: pt.metadata.description,
        title: pt.metadata.title,
        genres: pt.metadata.tags.join(", "),
        director: pt.metadata.custom_params.director,
        release_date: pt.metadata.custom_params.release_date,
        award: pt.metadata.custom_params.award,
        cast: pt.metadata.custom_params.cast,
        featured: pt.featured,
      });
      k++;
    }
    return result;
  };
}
