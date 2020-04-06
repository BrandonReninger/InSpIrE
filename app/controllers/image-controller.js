import ImageService from "../services/image-service.js";
import imageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _drawImage() {
    document.body.style.backgroundImage = `url('${store.State.picture.img}')`
}


export default class ImageController {
    constructor() {
        store.subscribe('picture', _drawImage)
        imageService.getPictures()
    }
}