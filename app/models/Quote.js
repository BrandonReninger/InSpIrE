export default class Quote {
    constructor(data) {
        this.quote = data.quote.body
        this.author = data.quote.author
    }

    get Template() {
        return /*html*/ `
        <div class="col-5 m-0">
        <p>${this.quote}</p>
        <p>- ${this.author}</p>
        </div>
        `
    }

}