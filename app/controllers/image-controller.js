import ImageService from "../services/image-service.js";
import imageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _drawImage() {
    document.getElementById("bg-image").innerHTML = store.State.picture.Template
}


export default class ImageController {
    constructor() {
        store.subscribe('picture', _drawImage)
        imageService.getPictures()
    }
}