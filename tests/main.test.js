// @@ client side tests @@
// import
import { displayCovidLevel } from '../src/client/js/displayCovidLevel';
// tests
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
// import '@babel/polyfill';
// import { fetchGeonamesApi } from '../src/server/geonamesAPI';
// import { TestScheduler } from 'jest';

// ** TESTING ** //
// describe('Client side code', () => {
//     test('Test Geonames API', () => {
//         let test = fetchGeonamesApi();
//         console.log(test);
//         let testOk = test.then((res) => {
//             console.log(res);
//             return res.ok;
//         });
//         console.log(testOk);
//         expect(testOk).toBeTruthy();
//     });
// });

// describe('Server side code', () => {
//     test('', () => {});
// });

// function test() {
//     console.log('test');
// }

// describe('test code', () => {
//     it('test function', () => {
//         console.log(typeof test);
//         expect(typeof test).toBe('function');
//     });
// });
