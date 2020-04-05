import store from "../store.js"
import quote from "../models/Quote.js"


// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  getQuote() {
    _quoteApi.get()
      .this(res => {
        console.log("quotes!", res.data)
      }).catch(err => console.error(err))
  }

}

const quoteService = new QuoteService();
export default quoteService;