import '@testing-library/jest-dom'

import { getSaludo } from '../../base/02-template-string';



describe('verificacion de com metodos', () => {
    test('revision de getSaludo ', () => {

        const nombre = 'juan';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola' + nombre);

    })

    test('revisa si no exixte argumento ', () => {


        const saludo = getSaludo()

        expect(saludo).toBe('Hola' + 'roxana')



    })


})