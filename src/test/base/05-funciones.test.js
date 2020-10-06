import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'



describe('prueba 05 funciones ', () => {


    test('get user debe retornar un objeto ', () => {

        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const userid = getUser();

        expect(userid).toEqual(user)

    })

    test('get usuariio activo debe rertornar objeto ', () => {

        const nombre = 'pedro';


        const usuario = {
            uid: 'ABC567',
            username: nombre
        }

        const getuser = getUsuarioActivo(nombre);
        expect(getuser).toEqual(usuario)
        console.log(getuser)
    })





})