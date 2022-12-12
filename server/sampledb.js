const Product = require('./model/product')

class SampleDb {

    constructor() {
        this.products = [{
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'head1 phone XL',
                heading2: 'head2 phone XL',
                heading3: 'head3 phone XL',
                headingtext1: 'RouterModuleをエクスポートしたAppRoutingModuleをAppModuleがインポートしているので、 このRouterOutletは、このAppComponentで利用できるようになったルーターのディレクティブのひとつです。',
                headingtext2: 'head text 2',
                headingtext3: 'head text 3',

            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'head1 phone Mini',
                heading2: 'head2 phone Mini',
                heading3: 'head3 phone Mini'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: 'A basic phone',
                heading1: 'head1 phone Standard',
                heading2: 'head2 phone Standard',
                heading3: 'head3 phone Standard'
            },

            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Special',
                price: 499,
                description: 'A special phone with one of the best performance',
                heading1: 'head1 phone Special',
                heading2: 'head2 phone Special',
                heading3: 'head3 phone Special'
            }
        ]
    }

    async initDb() {
        await Product.deleteMany({})
        this.pushProductsToDb()
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
                console.log('product data pushed')
            }
        )
    }
}

module.exports = SampleDb