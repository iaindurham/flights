const { expect } = require('chai');

const flightsService = require('./flights.service');
const mocks = {
    request: require('../mocks/request.json'),
    response: require('../mocks/response.json')
};

describe('Flights Service', () => {
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
