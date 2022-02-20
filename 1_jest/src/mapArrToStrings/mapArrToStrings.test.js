const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('Корректное значение', () => {
        expect(mapArrToStrings([1, 2 ,3])).toEqual(['1', '2', '3']);
    })
    test('Мешанина', () => {
        expect(mapArrToStrings([1, 2 ,3, null, undefined, 'asfasf'])).toEqual(['1', '2', '3']);
    })
    test('Пустой массив', () => {
        expect(mapArrToStrings([])).toEqual([]);
    })
    test('Отрицание', () => {
        expect(mapArrToStrings([1,2,3])).not.toEqual([1,2,3,4]);
    })
})
