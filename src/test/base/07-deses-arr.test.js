import { retornaArreglo } from '../../base/07-deses-arr';
import '@testing-library/jest-dom'

describe('prueba de 07 bases ', () => {

    test('should ', () => {

        const [letras, numeros] = retornaArreglo();

        console.log(numeros)

        expect(letras).toEqual('ABC');
        expect(numeros).toEqual(123);
    })





})