const _ = require('lodash');
const { expect } = require('chai');

const flightsService = require('./flights.service');
const mocks = {
    request: require('../mocks/request.json'),
    response: require('../mocks/response.json')
};

describe('Flights Service', () => {

    describe('isCodeShare', () => {
        let mockFlight;

        beforeEach(() => {
            mockFlight = _.cloneDeep(mocks.request.flights[0]);
        });
        it('should return true when the flight IS a code share', () => {
            mockFlight.airline = 'EK';
            expect(flightsService.isCodeShare(mockFlight)).to.be.true;
        });

        it('should return false when the flight is NOT a code share', () => {
            mockFlight.airline = 'QF';
            expect(flightsService.isCodeShare(mockFlight)).to.be.false;
        });
    });

    describe('doesPassThroughSydney', () => {
        let mockFlight;

        beforeEach(() => {
            mockFlight = _.cloneDeep(mocks.request.flights[0]);
        });

        it('should return true when the flight departs from Sydney', () => {
            mockFlight.departure.airport = 'SYD';
            expect(flightsService.doesPassThroughSydney(mockFlight)).to.be.true;
        });

        it('should return true when the flight arrives in Sydney', () => {
            mockFlight.arrival.airport = 'SYD';
            expect(flightsService.doesPassThroughSydney(mockFlight)).to.be.true;
        });

        it('should return false when the flight does NOT arrive OR depart from Sydney', () => {
            mockFlight.departure.airport = 'PER';
            mockFlight.arrival.airport = 'DRW';

            expect(flightsService.doesPassThroughSydney(mockFlight)).to.be.false;
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
