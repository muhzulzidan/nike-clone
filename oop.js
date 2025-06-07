// let car = "Honda";
// let price = 10;

// function getTaxofCar(price) {
//     return price + price * 0, 1;
// }

// let tax = getTaxofCar(price);

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
//     getPriceWithTax(tax = 0.1) {
//         return this.price + this.price * tax;
//     }
// }

// // Procedural code
// const name1 = "Baju";
// const price1 = 100000;

// const name2 = "Celana";
// const price2 = 150000;

// const name3 = "Topi";
// const price3 = 50000;

// function getPriceWithTax(price) {
//     return price + price * 0.1;
// }

// const total = getPriceWithTax(price1) + getPriceWithTax(price2) + getPriceWithTax(price3);
// console.log("Total:", total);

class Product {
    #basePrice; // private property (encapsulation)

    constructor(name, price) {
        this.name = name;
        this.#basePrice = price;
    }

    get price() {
        return this.#basePrice;
    }

    getFinalPrice() {
        return this.#basePrice;
    }

    static fromJSON(data) {
        return new Product(data.name, data.price);
    }
}

class PromoProduct extends Product {
    constructor(name, price, discountPercent) {
        super(name, price);
        this.discountPercent = discountPercent;
    }

    getFinalPrice() {
        return this.price - this.price * this.discountPercent;
    }
}

class Customer {
    constructor(name, isMember = false) {
        this.name = name;
        this.isMember = isMember;
    }

    calculateTotal(cart) {
        let subtotal = cart.reduce((sum, product) => sum + product.getFinalPrice(), 0);
        let memberDiscount = this.isMember ? 0.05 : 0;
        return subtotal - subtotal * memberDiscount;
    }
}

const cart = [
    new Product("Mouse", 150000),
    new PromoProduct("Keyboard", 300000, 0.2), // diskon 20%
    new PromoProduct("Headset", 250000, 0.1),  // diskon 10%
];

const regularCustomer = new Customer("Andi", false);
const memberCustomer = new Customer("Budi", true);

// console.log("Total Regular:", regularCustomer.calculateTotal(cart)); // tanpa diskon member
// console.log("Total Member:", memberCustomer.calculateTotal(cart)); // + diskon member 5%

document.getElementById("regular").innerHTML = regularCustomer.calculateTotal(cart);
document.getElementById("member").innerHTML = memberCustomer.calculateTotal(cart);