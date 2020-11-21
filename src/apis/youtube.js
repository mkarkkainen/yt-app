import axios from "axios";
const KEY = "AIzaSyBgYwmLXMfLKHnUCjEMM7V6BUEzCP_Ov_Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
