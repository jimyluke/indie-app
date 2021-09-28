import { API_URL, createNotification, errorMessage, Client } from "./index";
import { message } from "antd";

export function uploadVideo(fileList, data) {
  if (fileList.length === 0) return;

  const client = Client(true);
  return async (dispatch) => {
    try {
      const formdata = new FormData();
      formdata.append("file", fileList[0]);
      formdata.append("title", data.title);
      formdata.append("description", data.description);
      formdata.append("author", data.author);
      formdata.append("permalink", data.permalink);
      formdata.append("category", data.category);

      let res = await client.post(`${API_URL}/jwplayer/upload`, formdata);
      message.success("Video has been uploaded successfully");
      console.log(res.data);
    } catch (err) {
      createNotification("Upload Video", errorMessage(err));
    }
  };
}
