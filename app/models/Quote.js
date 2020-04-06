export default class Quote {
    constructor(data) {
        this.quote = data.quote.body
        this.author = data.quote.author
    }

    get Template() {
        return /*html*/ `
        <div class="col-5 border border-rounded m-0 bg-info">
        <p class="text-white">${this.quote}</p>
        <p class="text-white">- ${this.author}</p>
        </div>
        `
    }

}