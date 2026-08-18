class Product {
    name: string = "";
    price: number = 0;
    stockQuantity: number = 0;
    inStock: boolean = false;
    constructor(name: string, price: number, stockQuantity: number, inStock: boolean) {
        this.name = name;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.inStock = inStock;
    }
}


const product1 = new Product("Bird on their head!", 3.33000183105469, 5, true)
const product2 = new Product("Lamp", 19.99, 72, true)
const product3 = new Product("Judgement",14.99, 27, true)

console.log(product1)
console.log(product2)
console.log(product3)