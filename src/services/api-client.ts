import axios from "axios";


export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d163ff185e9b4c8dac77d6c1a2141bb4"
  }
})