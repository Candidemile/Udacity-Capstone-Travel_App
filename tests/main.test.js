// @@ client side tests @@
// import
import { displayCovidLevel } from '../src/client/js/displayCovidLevel';
// *** clien-side tests
test('displayCovidLevel function tests', () => {
    expect(displayCovidLevel('')).toEqual([ 'no-data', 0 ]);
    expect(displayCovidLevel()).toEqual([ 'no-data', 0 ]);
    expect(displayCovidLevel('low')).toEqual([ 'low', 20 ]);
    expect(displayCovidLevel('moderate')).toEqual([ 'moderate', 40 ]);
    expect(displayCovidLevel('high')).toEqual([ 'high', 60 ]);
    expect(displayCovidLevel('very high')).toEqual([ 'very-high', 80 ]);
    expect(displayCovidLevel('extreme')).toEqual([ 'extreme', 100 ]);
    expect(displayCovidLevel('extreme')).not.toEqual([ 'no-data', 0 ]);
    expect(displayCovidLevel('whatever went here')).not.toEqual([ 'low', 20 ]);
});

// server .js files
const covid = require('../src/server/covidAPI');
// *** server-side tests
test('COVID-19 API function tests: ', async () => {
    const test1 = await covid.fetchCovidApi();
    const test2 = await covid.fetchCovidApi('france');
    expect(test1).toEqual('no data');
    expect(test2).toHaveProperty('Active');
    expect(test2).toHaveProperty('Recovered');
    expect(typeof covid.getCovidGrowthLevel(test1)).toEqual('string');
    expect(typeof covid.getCovidGrowthLevel(test2)).toEqual('string');
    expect(typeof covid.getCovidRiskLevel(test1)).toEqual('string');
    expect(typeof covid.getCovidRiskLevel(test2, 1000000)).toEqual('string');
});
