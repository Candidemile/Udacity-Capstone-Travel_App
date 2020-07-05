// client .js files

// server .js files
import '@babel/polyfill';
import { fetchGeonamesApi } from '../src/server/geonamesAPI';
import { TestScheduler } from 'jest';

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

describe('Server side code', () => {
    test('', () => {});
});

function test() {
    console.log('test');
}

describe('test code', () => {
    it('test function', () => {
        console.log(typeof test);
        expect(typeof test).toBe('function');
    });
});
