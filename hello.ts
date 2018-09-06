
interface Flight{
    flightId: string;
  flightName: string;
  flightCode: string;
  noOfSeats: number;
  flightType: string;
}

let flight: Flight = {
    
    flightId: 'SG203CHNBLR',
    flightName: 'SpiceJet',
    flightCode: 'SG203',
    noOfSeats: 180,
    flightType: 'Direct'
}


console.log(flight.flightId);
console.log(flight.flightName);
console.log(flight.flightCode);
console.log(flight.noOfSeats);
console.log(flight.flightType);
