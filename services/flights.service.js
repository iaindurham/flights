class flightsService {

    static isCodeShare(flightData) {
        return flightData.airline !== 'QF';
    }

    static parse(data) {
        let flights = [];

        for (const flight of data.flights) {
            if (!this.isCodeShare(flight)) {
                flights.push(flight);
            }
        }

        return {
            flights
        };
    }
}

module.exports = flightsService;
