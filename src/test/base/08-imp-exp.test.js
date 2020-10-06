import { heroes } from '../../base/datos/data';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import '@testing-library/jest-dom'

describe('describe la recepcion de datos desde data', () => {
    test('should ', () => {
        const id = 1

        const her = heroes.find(item => item.id == id)

        const hero = getHeroeById(id)

        expect(hero).toEqual(her);



    })

    test('validacion de getHeroesByOwner ', () => {

        const owner = 'Marvel'

        const own = heroes.filter(item => item.owner == owner)

        console.log(own)

        const donde = getHeroesByOwner(owner)

        expect(donde).toEqual(own)

    })


})