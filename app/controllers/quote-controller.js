import QuoteService from "../services/quote-service.js";
import store from "../store.js"
import quoteService from "../services/quote-service.js";


function _drawQuote() {
    document.getElementById("quote").innerHTML = store.State.quote.Template
}


//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
    constructor() {
        quoteService.getQuote()
        store.subscribe("quote", _drawQuote)
    }
}