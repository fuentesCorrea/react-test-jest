import '@testing-library/jest-dom'
import { getHeroeByIdAsync } from '../../base/09-promesas'
import { heroes } from '../../base/datos/data';



describe('descibe 09-promesas ', () => {


    test('asinc ', (done) => {

        const id = 2;

        getHeroeByIdAsync(id).then(heroe => {

            expect(heroe).toBe(heroes[1])

            done();

        })

    })

    test('retorna valores de error', (done) => {

        const id = 10;
        getHeroeByIdAsync(id).catch(error => {

            expect(error).toBe('No se pudo encontrar el héroe')
            done();
        })


    })



})