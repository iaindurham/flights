class flightsService {

    static isCodeShare(flightData) {
        return flightData.airline !== 'QF';
    }

    static doesPassThroughSydney(flightData) {
        const airportCode = 'SYD';
        return flightData.arrival.airport === airportCode || flightData.departure.airport === airportCode;
    }

    static parse(data) {
        let flights = [];

        for (const flight of data.flights) {
            if (!this.isCodeShare(flight) && this.doesPassThroughSydney(flight)) {
                flights.push(flight);
            }
        }

        return {
            flights
        };
    }
}

module.exports = flightsService;
