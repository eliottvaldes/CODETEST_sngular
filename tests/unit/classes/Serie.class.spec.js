/* 
    File for testing
    test the class Series 
    instructions: 
    * `Realizar pruebas unitarias al método de la serie numérica usando los 10 números naturales como entrada 
    * (10 casos de prueba en total).`
*/
import Series from '@/classes/Serie.class.js';

describe('Series Class', () => {

    const seriesIntance = new Series()


    test('should return -0 when the method getSerie() is called using "n" equals 0', () => {
        seriesIntance.setNumber = 0
        expect(seriesIntance.getSerie()).toBe(-0)
    });

    test('should return -6 when the method getSerie() is called using "n" equals 1', () => {
        seriesIntance.setNumber = 1
        expect(seriesIntance.getSerie()).toBe(-6)
    });

    test('should return "Infinity" when the method getSerie() is called using "n" equals 2', () => {
        seriesIntance.setNumber = 2
        expect(seriesIntance.getSerie()).toBe(Infinity)
    });

    test('should return 90 when the method getSerie() is called using "n" equals 3', () => {
        seriesIntance.setNumber = 3
        expect(seriesIntance.getSerie()).toBe(90)
    });

    test('should return 210 when the method getSerie() is called using "n" equals 4', () => {
        seriesIntance.setNumber = 4
        expect(seriesIntance.getSerie()).toBe(210)
    });

    test('should return 247.5 when the method getSerie() is called using "n" equals 5', () => {
        seriesIntance.setNumber = 5
        expect(seriesIntance.getSerie()).toBe(247.5)
    });

    test('should return 273 when the method getSerie() is called using "n" equals 6', () => {
        seriesIntance.setNumber = 6
        expect(seriesIntance.getSerie()).toBe(273)
    });

    test('should return 285.6 when the method getSerie() is called using "n" equals 7', () => {
        seriesIntance.setNumber = 7
        expect(seriesIntance.getSerie()).toBe(285.6)
    });

    test('should return 256.5 when the method getSerie() is called using "n" equals 8', () => {
        seriesIntance.setNumber = 8
        expect(seriesIntance.getSerie()).toBe(256.5)
    });

    test('should return 238.846 when the method getSerie() is called using "n" equals 9 and rounded 3 digits', () => {
        seriesIntance.setNumber = 9
        let result = seriesIntance.getSerie().toFixed(3)
        expect(Number(result)).toBe(238.846)
    });

});