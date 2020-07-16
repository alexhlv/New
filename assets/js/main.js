/* Завдання 1:*/

// Задача 1:
// Создайте объект city1 (let city1 = {}), укажите у него свойства name
// (название города, строка) со значением «ГородN» и population
// (населенность города, число) со значением 10 млн.

let city1 = {
    cityName: "Oдеса",
    population: "10000000"
}

console.log(city1);

/* Завдання 1:*/
/* Завдання 2:*/


// Задача 2:
// Из обьекта johnDoe https://jsfiddle.net/72qkgetv/1/
// Вытащить и вывести в консоль следующие значения:

// - город из рабочего адреса
// - имя второго друга
// - номера телефонов через запятую
// - имя друга с наименьшим возрастом
// - роль пользователя, которая true (в данном случае isUser)

const maksTwen = {
    name: 'Mark',
    surname: 'Twen',
    age: 40
}

const sarahDoe = {
    name: 'Sarah',
    surname: 'Doe',
    age: 14
}

const johnDoe = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    hobbies: ['football', 'darts', 'swimming'],
    contacts: {
        phones: ['0987654', '1234567'],
        email: ['asd@asd.com', 'asdfd@asw.com']
    },
    address: {
        work: {
            city: 'Berlin',
            postCode: '03457'
        },
        home: {
            city: 'Munich',
            postCode: '12356'
        },
    },
    sallary: {
        main: 3000,
        bonus: 500,
        rate: 25
    },
    roles: {
        isAdmin: false,
        isModer: false,
        isUser: true
    },
    friends: [
        maksTwen,
        sarahDoe,
        {
            name: 'John',
            surname: 'Snow',
            age: 5000
        }
    ]
}

console.log(johnDoe.address.work.city);
console.log(johnDoe.friends[1].name);
console.log(johnDoe.contacts.phones);
console.log(johnDoe.friends[1].name, johnDoe.friends[1].age);
console.log(johnDoe.roles.isUser);

let city = johnDoe.address.work.city;
let secondFriend = johnDoe.friends[1].name;
let firstPhoneNumber = johnDoe.contacts.phones[0];
let secondPhoneNumber = johnDoe.contacts.phones[1];


let youngerFriendName;
for (let i = 0; i <johnDoe.friends.length; i++) {
    let youngerFriend = johnDoe.friends[0].age;

     if (youngerFriend > johnDoe.friends[i].age) {
        youngerFriendName = johnDoe.friends[i].name;
     } else if (johnDoe.friends[0].age === johnDoe.friends[i].age) {
        youngerFriendName = johnDoe.friends[0].name;
     }
}
let role = johnDoe.roles.isUser;


console.log(city);
console.log(secondFriend);
console.log(`${firstPhoneNumber}, ${secondPhoneNumber}`);
console.log(youngerFriendName);
console.log(role);

/* Завдання 2:*/
/* Завдання 3:*/

// Задача 3:
// Создать 5 обьектов автомобилей и наполнить их большим количеством данных:
// Год выпуска
// Вес
// Кузов
// Двигатель
// Трансмиссия
// Тормозная система
// Рулевое управление
// и т д

// поля должны называться на английском.

// Пример:
// let bmwX5 = {
//   weight: 3400,
//   ....
// }

let volkswagenJetta = {
    general: {
        transport: 'Car',
        type: 'Sedan',
        brand: 'Volkswagen',
        model: 'Yeta',
        generation: 'Jetta9E',
        modification: 1.6,
        country: 'Germany',
        years: '1991 - 2016',
        doors: 4,
        seats: 5
    },
    engine: {
        location: 'Front, transverse',
        capacity: '1,595',
        power: 70,
        torque: '-',
        cylinders: 'Row/4',
        valvesCylinder: 2,
        powerSystem: 'Carburetor'
    },
    transmission: {
        typeTransmission: 'manual',
        driveType: 'Front'
    },
    performance: {
        speed: 160,
        acceleration: 14,
        fuelConsumption: '-/-/8.7',
        fuel: 'AI-80'
    },
    volumeAndWeight: {
        trunkVolume: '550/0',
        volumeOfFuel: 55,
        equippedWeight: 970,
        grossWeight: 1470
    },
    dimensions: {
        length: 4385,
        width: 1674,
        height: 1415,
        wheelbase: 2471,
        clearance: '-'
    },
    suspensionAndBrakes: {
        forwardSuspension: 'Shock-absorbing rack',
        backSuspension: 'Shock-absorbing rack',
        frontBrakes: 'Disc',
        rearBrakes: 'Drum'
    }
}

let mercedesGL550 = {
    general: {
        transport: 'Car',
        type: 'SUV',
        brand: 'Mercedes-Benz',
        model: 'YGL',
        generation: 'GL (X164)',
        modification: 'GL 550',
        country: 'Germany',
        years: '2007 - 2016',
        doors: 5,
        seats: 7
    },
    engine: {
        location: 'Front, longitudinally',
        capacity: '5.461',
        power: 382,
        torque: '529/2800',
        cylinders: 'V-shaped/8',
        valvesCylinder: 4,
        powerSystem: 'Injector'
    },
    transmission: {
        typeTransmission: 'automatic',
        driveType: 'Full constant'
    },
    performance: {
        speed: '-',
        acceleration: '-',
        fuelConsumption: '-/-/-',
        fuel: 'AI-95'
    },
    volumeAndWeight: {
        trunkVolume: '620/2300',
        volumeOfFuel: 100,
        equippedWeight: 2464,
        grossWeight: '-'
    },
    dimensions: {
        length: 5088,
        width: 1920,
        height: 1840,
        wheelbase: 3075,
        clearance: 276
    },
    suspensionAndBrakes: {
        forwardSuspension: 'Transverse Lever, anti-roll bar',
        backSuspension: 'Cross stabilizer',
        frontBrakes: 'Disk ventilated',
        rearBrakes: 'Disk ventilated'
    }
}

let volvoXC90 = {
    general: {
        transport: 'Car',
        type: 'SUV',
        brand: 'Volvo',
        model: 'XC90',
        generation: 'XC90',
        modification: '2.4 D5 (185hp)',
        country: 'Sweden',
        years: '2002 - 2016',
        doors: 5,
        seats: 5
    },
    engine: {
        location: 'Front, longitudinally',
        capacity: '2.4',
        power: 185,
        torque: '400/2000',
        cylinders: 'In-line/5',
        valvesCylinder: 4,
        powerSystem: 'Diesel NV'
    },
    transmission: {
        typeTransmission: 'manual', 'automatic',
        driveType: 'Full constant'
    },
    performance: {
        speed: '190',
        acceleration: '10.9',
        fuelConsumption: '10.6/6.8/9',
        fuel: 'Diesel fuel'
    },
    volumeAndWeight: {
        trunkVolume: '483/0',
        volumeOfFuel: 68,
        equippedWeight: 2058,
        grossWeight: 2560
    },
    dimensions: {
        length: 4807,
        width: 1989,
        height: 1784,
        wheelbase: 2857,
        clearance: 220
    },
    suspensionAndBrakes: {
        forwardSuspension: 'Shock absorber strut, wishbone, wishbone',
        backSuspension: 'Multi-lever, coil springs, telescopic shock absorbers, cross stabilizer',
        frontBrakes: 'Disk ventilated',
        rearBrakes: 'Disk'
    }
}

let mitsubishiOutlanderII = {
    general: {
        transport: 'Car',
        type: 'Crossover',
        brand: 'Mitsubishi',
        model: 'Outlander',
        generation: 'Outlander II',
        modification: '2.0',
        country: 'Japan',
        years: '2005 - 2016',
        doors: 5,
        seats: 5
    },
    engine: {
        location: 'Front, longitudinally',
        capacity: '1,998',
        power: 147,
        torque: '199/4200',
        cylinders: 'In-line/4',
        valvesCylinder: 4,
        powerSystem: 'Injector'
    },
    transmission: {
        typeTransmission: 'manual', 'variator',
        driveType: 'Front'
    },
    performance: {
        speed: 184,
        acceleration: '-',
        fuelConsumption: '10.5/6.6/8.1',
        fuel: 'Gasoline'
    },
    volumeAndWeight: {
        trunkVolume: '1691/0',
        volumeOfFuel: 63,
        equippedWeight: 1474,
        grossWeight: 2070
    },
    dimensions: {
        length: 4665,
        width: 1800,
        height: 1680,
        wheelbase: 2670,
        clearance: 215
    },
    suspensionAndBrakes: {
        forwardSuspension: '-',
        backSuspension: '-',
        frontBrakes: 'Disk',
        rearBrakes: 'Disk'
    }
}

let toyotaLandCruiserPradoJ150 = {
    general: {
        transport: 'Car',
        type: 'SUV',
        brand: 'Toyota',
        model: 'Land Cruiser Prado',
        generation: 'Land Cruiser Prado III (3)',
        modification: '4.0 4WD',
        country: 'Japan',
        years: '2009 - 2016',
        doors: 5,
        seats: 5
    },
    engine: {
        location: 'Front, longitudinally',
        capacity: '3,955',
        power: 282,
        torque: '387/4400',
        cylinders: 'B-shaped/6',
        valvesCylinder: 4,
        powerSystem: 'Injector'
    },
    transmission: {
        typeTransmission: 'automatic',
        driveType: 'Full permanent'
    },
    performance: {
        suspensionAndBrakes: 180,
        acceleration: '9.2',
        fuelConsumption: '14.7/8.6/10.8',
        fuel: 'AI-95'
    },
    volumeAndWeight: {
        trunkVolume: '621/1934',
        volumeOfFuel: 87,
        equippedWeight: 2125,
        grossWeight: 2900
    },
    dimensions: {
        length: 4760,
        width: 1885,
        height: 1845,
        wheelbase: 2790,
        clearance: 220
    },
    suspensionAndBrakes: {
        forwardSuspension: 'lever, spring, with hydraulic telescopic shock absorbers and anti-roll bar',
        backSuspension: 'pneumatic, with hydraulic telescopic shock absorbers and anti-roll bar',
        frontBrakes: 'Ventilated disc',
        rearBrakes: 'Ventilated disc'
    }
}

console.log(volkswagenJetta);
console.log(mercedesGL550);
console.log(volvoXC90);
console.log(mitsubishiOutlanderII);
console.log(toyotaLandCruiserPradoJ150);

/* Завдання 3:*/
/* Завдання 4:*/

// Задача 4:
// Добавить все автомобили в массив.
// И написать функции которые находит:

// - авто с ручной коробкой (трансмиссия)
// - самый тяжелый автомобиль (поле вес)
// - самый старый автомобиль (поле год выпуска)
// - авто с самым большим объемом двигателя (поле объем двигателя)
// - авто у которых откидывается крыша
// - считают средний вес всех автомобилей
// - считают средний обьем двигателя

// все эти свойства должны быть определены в объектах.

const volkswagen = {
    name: 'Volkswagen Jetta',
    year: 2016,
    weight: 3000,
    corpusType: 'seddan',
    engineCapacity: 1.4,
    brakeSystem: 'ABS',
    transmissionType: 'manual',
    roof: 'whole'

}
const mercedes = {
    name: 'Mercedes GL550',
    year: 2019,
    weight: 2065,
    corpusType: 'sedan',
    engineCapacity: 3.2,
    brakeSystem: 'ABS',
    transmissionType: 'automatic',
    roof: 'cabriolet'

}
const volvo = {
    name: 'Volvo XC90',
    year: 1976,
    weight: 2430,
    corpusType: 'sedan',
    engineCapacity: 5,
    brakeSystem: 'ABS',
    transmissionType: 'manual',
    roof: 'whole'

}
const mitsubishi = {
    name: 'Mitsubishi OutlanderII',
    year: 2016,
    weight: 3250,
    corpusType: 'coupe',
    engineCapacity: 4.5,
    brakeSystem: 'ABS',
    transmissionType: 'automatic',
    roof: 'cabriolet'

}
const toyota = {
    name: 'Toyota LandCruiserPradoJ150',
    year: 1995,
    weight: 3250,
    corpusType: 'jeep',
    engineCapacity: 4.7,
    brakeSystem: 'ABS',
    transmissionType: 'manual',  
    roof: 'whole'
}

const cars = [volkswagen, mercedes, volvo, mitsubishi, toyota];

function transmission() {
    for (let i = 0; i < cars.length; i++) {
        if(cars[i].transmissionType === 'manual') {
            console.log(cars[i].name);
        }
    }
}
transmission();

function maxWeight (cars) {
    let weightestCarname = null;
    
    let weightestCar = cars[0].weight;

    for (let i = 1; i < cars.length; i++) {
        weightestCar = Math.max(weightestCar, cars[i].weight)
    }

    for (let i = 0; i < cars.length; i++) {
        if (cars[i].weight === weightestCar) {
            weightestCarname = cars[i].name;
            break;
        }
    }

    return weightestCarname;

}

const weightestCarname = maxWeight(cars);

console.log(weightestCarname);


function minYear(cars) {
    let oldestCarName = null;
    
    let oldestCar = cars[0].year;

    for (let i = 1; i < cars.length; i++) {
        oldestCar = Math.min(oldestCar, cars[i].year)
    }

    for (let i = 0; i < cars.length; i++) {
        if (cars[i].year === oldestCar) {
            oldestCarName = cars[i].name;
            break;
        }
    }

    return oldestCarName;
}

const oldestCarName = minYear(cars);

console.log(oldestCarName);

function powerful(cars) {
    let powerfulCarName = null;
    
    let powerfulCar = cars[0].engineCapacity;


    for (let i = 1; i < cars.length; i++) {
        powerfulCar = Math.max(powerfulCar, cars[i].engineCapacity);
    }

    for (let i = 0; i < cars.length; i++) {
        if (cars[i].engineCapacity === powerfulCar) {
            powerfulCarName = cars[i].name;
            break;
        }
    }

    return powerfulCarName;
}

const powerfulCarName = powerful(cars);

console.log(powerfulCarName);

function roof() {
    for (let i = 0; i < cars.length; i++) {
        if(cars[i].roof === 'cabriolet') {
            console.log(cars[i].name);
        }
    }
}

roof();


function mediumWeight () {
    let commonWeight = null;
    for (let i = 0; i < cars.length; i++) {
        commonWeight += cars[i].weight;
    }
    let mediumWeight = commonWeight / cars.length;

    console.log(mediumWeight);
}

mediumWeight();


function mediumEngineCapacity () {
    let commonEngineCapacity = null;
    for (let i = 0; i < cars.length; i++) {
        commonEngineCapacity += cars[i].engineCapacity;
    }
    let mediumEngineCapacity = commonEngineCapacity / cars.length;

    console.log(mediumEngineCapacity);
}

mediumEngineCapacity();

/* Завдання 4:*/
/* Завдання 5:*/

// Задача 5:
// В обьекте: https://jsfiddle.net/72qkgetv/2/

// - Достать из него данные так, чтобы получился текст:  “Киевский политехнический институт, вулиця Академіка Янгеля, 5, місто Київ, Украина»
// - Вывести координаты lat, lng.

const coordinates = {    "results" : [
    {
        "address_components" : [
            {
                "long_name" : "5",
                "short_name" : "5",
                "types" : [ "street_number" ]
            },
            {
                "long_name" : "Киевский политехнический институт",
                "short_name" : "Киевский политехнический институт",
                "types" : [ "establishment" ]
            },
            {
                "long_name" : "вулиця Академіка Янгеля",
                "short_name" : "вулиця Академіка Янгеля",
                "types" : [ "route" ]
            },
            {
                "long_name" : "Солом'янський район",
                "short_name" : "Солом'янський район",
                "types" : [ "sublocality_level_1", "sublocality", "political" ]
            },
            {
                "long_name" : "Київ",
                "short_name" : "Київ",
                "types" : [ "locality", "political" ]
            },
            {
                "long_name" : "місто Київ",
                "short_name" : "місто Київ",
                "types" : [ "administrative_area_level_2", "political" ]
            },
            {
                "long_name" : "місто Київ",
                "short_name" : "місто Київ",
                "types" : [ "administrative_area_level_1", "political" ]
            },
            {
                "long_name" : "Украина",
                "short_name" : "UA",
                "types" : [ "country", "political" ]
            }
        ],
	       "geometry" : {
            "location" : {
                "lat" : 50.449819,
                "lng" : 30.453404
            },
            "location_type" : "ROOFTOP",
            "viewport" : {
                "northeast" : {
                    "lat" : 50.4511679802915,
                    "lng" : 30.4547529802915
                },
                "southwest" : {
                    "lat" : 50.4484700197085,
                    "lng" : 30.4520550197085
                }
            }
        },
        "types" : [ "street_address" ]
    }
],
    "status" : "OK"
}

let university = coordinates.results[0].address_components[1].long_name;
let street = coordinates.results[0].address_components[2].short_name;
let numberOfStreet = coordinates.results[0].address_components[0].long_name;
let cityName = coordinates.results[0].address_components[5].long_name;
let contryName = coordinates.results[0].address_components[7].long_name;

console.log(`${university}, ${street}, ${numberOfStreet}, ${cityName}, ${contryName}`);

let vertical = coordinates.results[0].geometry.location.lat;
let horysontal = coordinates.results[0].geometry.location.lng;

console.log(`Вертикаль ${vertical}, горизонталь ${horysontal}`);

/* Завдання 5:*/
/* Завдання 6:*/

// Задача 6:
// Создать объект.
// Запросить пользователя заполнить этот обьект спрашивая у наго по порядку ключ и значение через функцию prompt.
// Как только пользователь введет строку "END" - вывести получившийся объект в консоль.

function Object() {
    let key;
    let value;
    let obj = {};
    for (let i = 1; i > 0; i++) {
        key = prompt("Введите ключ");
        if (key === 'END' || key === 'end') {
            break;
        }
        value = prompt("Введите свойство")
        if (value === 'END' || value === 'end') {
            break
        }
        obj[key] = value
    }
    console.log(obj)
}

Object();

/* Завдання 6:*/