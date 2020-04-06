export default class Picture {
    constructor(data) {
        this.img = data.url || data.large_url
    }

    get Template() {
        return /*html*/ `
        <img src="${this.img}" class="img-fluid m-0 h-100 w-100">
        `
    }

}