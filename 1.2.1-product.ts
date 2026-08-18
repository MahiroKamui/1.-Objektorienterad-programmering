class Product {
    name: string = "";
    price: number = 0;
    stockQuantity: number = 0;
    inStock: boolean = false;
}


const product1 = new Product()
product1.name = "pencil"
product1.price = 0.99
product1.stockQuantity = 28236
product1.inStock = true

const product2 = new Product()
product2.name = "fancy pencil"
product2.price = 2.99
product2.stockQuantity = 1972
product2.inStock = true

const product3 = new Product()
product3.name = "fancy pencil that is fancier than fancy pencil"
product3.price = 89.99
product3.stockQuantity = 52
product3.inStock = true


console.log(product1)
console.log(product2)
console.log(product3)