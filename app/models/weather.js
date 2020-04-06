export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.humidity = data.main.humidity
    this.wind = data.wind.speed
  }

  get Template() {
    return /*html*/ `
    <div class="col-4">
    <h5>${this.city}</h5>
    <small>Temp: ${this.kelvin}</small>
    <small>RH: ${this.humidity}%</small>
    <small>Wind: ${this.wind} mph</small>   
    </div>
    `
  }

}