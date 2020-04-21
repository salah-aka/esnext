let favoriteCityId = 'rome'
console.log(favoriteCityId);

favoriteCityId = 'paris'
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
//citiesId = [];
//console.log(citiesId);  /   /Assignment to constant variable.
citiesId.push("tokyo");
console.log(citiesId);

// création d'objet

function getWeather() {
    let city = ('cityId').toUpperCase;
    let temperature = '20';
    return {city: 'PARIS',  temperature: '20'};
    }
const waether = getWeather(favoriteCityId);
console.log(waether);

//Affectation destructurée
let {
    city: nomCity,
    temperature: TempCity
    } = waether;
console.log(nomCity); 
console.log(TempCity);

// Rest operator

let [paris , nyc, ...resteDesValeurs] = citiesId;
    console.log(paris)
    console.log(nyc)  
    console.log(resteDesValeurs.length);

//Classe
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        }

    toString() {
                return 'Trip [' + this.id + ', ' + this.name + ', ' + this.imageUrl + ', ' + this._price + ']';     
            } 

    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }

    get price() {
        return this._price;
    }


    set price(newPrice) {
        this._price = newPrice;
    }
}

let parisTrip = new Trip ('paris', 'Paris',  'mg/paris.jpg')
console.log(parisTrip);
console.log(parisTrip.name);

parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

//Héritage

class FreeTrip extends Trip {

    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price = 0;

    }
    toString() {
        return 'Free' + super.toString();
    }
}
const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
console.log(freeTrip.toString());

//Promise, Set, Map, Arrow Function

class TripService {
    constructor() {
        this.trips = new Set([new Trip('paris', 'Paris', 'img/paris.jpg'), 
        new Trip('nantes', 'Nantes', 'img/nantes.jpg'), 
        new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')]);
        }
        findByName(tripName) {
            return new Promise((resolve, reject) => {
        setTimeout( () => {
            for(const trip of  this.trips){
                if(trip.name == tripName){
                    resolve(trip);
                }else {
                    reject('No trip with name' + tripName);
                     }
                }
            }, 2000)
        });
    }
}

class PriceService {
    constructor() {
        this.tripPrice = new Map([['Paris', 100], ['Rio de Janeiro', 800]]);     
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
        setTimeout( () => {
            for (const [clés, valeur] of  this.tripPrice) {

                if (clés == tripId) {
                    resolve(valeur);
                } else{
                    reject('No trip with name ' + tripId);
                    }
                }
            }, 2000)
        });
    }
}

const tripService = new TripService();
const priceService = new PriceService();


//recherche par nom de voyage avec la valeur Paris. Afficher dans la console le résultat trouvé
tripService.findByName('Paris')
    .then(trip => { console.log('Trip found :' + trip); })
    .catch(erreur => { console.log(erreur);
});

//recherche par nom de voyage avec la valeur Toulouse.
tripService.findByName('Toulouse')
    .then(trip => { console.log('Trip found :' + trip); })
    .catch(erreur => { console.log( erreur);

});







