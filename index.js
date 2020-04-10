class Coffee {
    constructor(obj = {}){
        this.bean = obj.bean,
        this.method = obj.method
    }
}
// const newCoffee = new Coffee ({
//     bean: 'Gayo red honey',
//     method: 'Manual Brewing'
// })
//class extend
class Cafe extends Coffee {
    constructor(obj = {}) {
        super(obj)
        this.name = obj.name
    }
}
const detailCafee = new Cafe ({
    bean: ['Gayo red honey', 'sidikalang', {robusta: 'kapal tengker', sachet:'kapal api'}],
    method: 'Manual Brewing',
    name:'Sevendays'
})
class Location extends Cafe {
    constructor(obj = {}) {
        super(obj)
        this.long = obj.long,
        this.lat = obj.lat
    }
}
const detailLocation = new Location ({
    bean: ['Gayo red honey', 'sidikalang', {robusta: 'kapal tengker', sachet:'kapal api'}],
    method: 'Manual Brewing',
    name:'Sevendays',
    long: '-132213123',
    lat:'123123123'
})

console.log(detailLocation);
