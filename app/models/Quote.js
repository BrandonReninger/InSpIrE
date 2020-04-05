export default class Quote {
    constructor(data) {
        this.quote = data.body
        this.author = data.author
    }

    get Template() {
        return /*html*/ `
        <h5>${this.quote}</h5>
        <p>- ${this.author}</p>
        `
    }

}