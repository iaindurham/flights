class flightsService {

    static isCodeShare(flightData) {
        return flightData.airline !== 'QF';
    }

    static doesPassThroughSydney(flightData) {
        const airportCode = 'SYD';
        return flightData.arrival.airport === airportCode || flightData.departure.airport === airportCode;
    }

    static filterFlightDetails(flightData) {
        return {
            flight: `${flightData.airline}${flightData.flightNumber}`,
            origin: flightData.departure.airport,
            destination: flightData.arrival.airport,
            departureTime: flightData.departure.scheduled
        }
    }

    static parse(data) {
        let flights = [];

        for (const flight of data.flights) {
            if (!this.isCodeShare(flight) && this.doesPassThroughSydney(flight)) {
                const filteredDetails = this.filterFlightDetails(flight);
                flights.push(filteredDetails);
            }
        }

        return {
            flights
        };
    }
}

module.exports = flightsService;
