import {CityType} from "../02/02_02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_02";

test("should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];


    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test("should take courses cheaper 160 ", () => {
    const courses = [
        {title: 'css', price: 110},
        {title: 'js', price: 200},
        {title: 'React', price: 150}]


    const cheapCourses = courses.filter(courses => courses.price < 160);

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('css')
    expect(cheapCourses[1].title).toBe('React')
})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const comletedTasks = tasks.filter(tasks => tasks.isDone);

    expect(comletedTasks.length).toBe(2);
    expect(comletedTasks[0].id).toBe(2)
    expect(comletedTasks[1].id).toBe(4)


})


test('only number < 0', () => {
    const allNumber = [1, -3, 5, 6, -7, 8, 9, -11];

    const newNamber = allNumber.filter(allNumber => allNumber < 0)
    expect(newNamber.length).toBe(3);
    expect(newNamber[1]).toBe(-7);
    expect(newNamber[2]).toBe(-11)
})

test('only even numbers', () => {
    const number = [1, -3, 5, 6, -7, 8, 9, -11];
    const evenNumber = number.filter(number => number % 2 === 0)
    expect(evenNumber.length).toBe(2)
    expect(evenNumber[1]).toBe(8)
})

test('long string', () => {
    const allString = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
    const longString = allString.filter(allString => allString.length > 5)
    expect(longString.length).toBe(1)
    expect(longString[0]).toBe('aaaqqq')
})

let city: CityType;
beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address:
                    {
                        street: {
                            title: "Central Str"
                        }
                    }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address:
                    {
                        street: {
                            title: "South Str"
                        }
                    }
            },

        ],
        citizensNumber: 1000000
    }
})

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})