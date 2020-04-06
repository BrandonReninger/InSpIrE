export default class Quote {
    constructor(data) {
        this.quote = data.quote.body
        this.author = data.quote.author
    }

    get Template() {
        return /*html*/ `
        <div class="col-5 border border-rounded m-0">
        <p>${this.quote}</p>
        <p>- ${this.author}</p>
        </div>
        `
    }

}