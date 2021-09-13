import axios from "axios";

const KEY = "AIzaSyC_FZSRP3sibohZBHCP597pWIgxGngG2Y8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
