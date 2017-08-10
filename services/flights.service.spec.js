const { expect } = require('chai');

const flightsService = require('./flights.service');
const mocks = {
    request: require('../mocks/request.json'),
    response: require('../mocks/response.json')
};

describe('Flights Service', () => {

    describe('isCodeShare', () => {
        it('should return true when the flight IS a code share', () => {
            expect(flightsService.isCodeShare(mocks.request.flights[3])).to.be.true;
        });

        it('should return false when the flight is NOT a code share', () => {
            expect(flightsService.isCodeShare(mocks.request.flights[0])).to.be.false;
        });
    });

    describe('parse', () => {
        describe('Given a set of flights', () => {
            const flightData = mocks.request;

            describe('When the data is filtered', () => {
                let parsedFlights;

                before(() => {
                    parsedFlights = flightsService.parse(flightData);
                });

                it('should return all flights that are not a codeshare flight, and arrive or depart in SYD', () => {
                    expect(parsedFlights).to.deep.equal(mocks.response);
                });
            });
        });
    });
});
