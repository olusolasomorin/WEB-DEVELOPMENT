class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Cart{
    constructor(){
        this.items = [];
    }

    addProduct(product, quantity){
        this.items.push({product, quantity});
        return JSON.stringify(this.items);
    }

    removeProduct(productName){
        this.items = this.items.filter(item => item !==productName);
    }

    getTotal(){
        let sum = this.items.reduce((total, item) => {
            return total + (Number(item.product.price) * Number(item.quantity));
        }, 0);
        if (sum > 100){
            return "Free shipping";
        }
        return sum;
    }

}

let myCart = new Cart();
let fish = new Product("Fish", 3000)
let beans = new Product("Beans", 5000)
let yam = new Product("Yam", 2000)
console.log(myCart.addProduct(fish, 20));
console.log(myCart.addProduct(beans, 10));
console.log(myCart.addProduct(yam, 2));

console.log(myCart.getTotal());