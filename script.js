const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];


//Вы устроились разработчиком в автомобильную компанию. Вам нужно написать код, который отвечает за отображение на сайте информации о транспорте и цене. Вам нужно:
//- создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice() ;
//- создать класс Car, который наследует от Transport. Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей;
//- создать класс Bike, который наследует от Transport. Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла.



class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo() {
        return `Transport type: ${this.type}, Brand: ${this.brand}`;
        
    }

    getPrice() {
        return `Price: $${this.price}`;
    }
}

class Car extends Transport {
    constructor(type, price, brand, doorsCount) {
        super(type, price, brand);
        this.doorsCount = doorsCount;
    }

    getDoorsCount() {
        return `Doors count: ${this.doorsCount}`;
    }
}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return `Max speed: ${this.maxSpeed} km/h`;
    }
}

data.forEach((item) => {
    if (item.type === 'car') {
        const car = new Car(item.type, item.price, item.brand, item.doors);
        console.log(car.getInfo());
        console.log(car.getPrice());
        console.log(car.getDoorsCount());
    } else if (item.type === 'bike') {
        const bike = new Bike(item.type, item.price, item.brand, item.maxSpeed);
        console.log(bike.getInfo());
        console.log(bike.getPrice());
        console.log(bike.getMaxSpeed());
    }
});







