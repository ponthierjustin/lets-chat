import axios from "axios";

export default {
  getText: function () {
    return axios.get("/api/text");
  },
  addText: function (text) {
    return axios.post('api/text', text);
  },
  textRate: function (text) {
    return axios.post('/api/analyzer', text);
  }
};
