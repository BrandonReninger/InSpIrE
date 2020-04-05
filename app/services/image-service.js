import store from "../store.js"
import Picture from "../models/Picture.js"

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {

  constructor() {
    this.getPictures()
  }

  getPictures() {
    imgApi.get()
      .then(res => {
        console.log("image!", res.data)
        let rawData = res.data
        let picture = new Picture(rawData)
        store.commit("picture", picture)
      }).catch(err => console.error(err))
  }
}

const imageService = new ImageService();
export default imageService;