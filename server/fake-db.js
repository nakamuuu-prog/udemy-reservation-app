const Product = require('./model/product');

class FakeDB {
  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'Phone XL heading1',
        heading2: 'Phone XL heading2',
        heading3: 'Phone XL heading3',
        headingText1: 'Phone XL headingText1',
        headingText2: 'Phone XL headingText2',
        headingText3: 'Phone XL headingText3',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'Phone Mini heading1',
        heading2: 'Phone Mini heading2',
        heading3: 'Phone Mini heading3',
        headingText1: 'Phone Mini headingText1',
        headingText2: 'Phone Mini headingText2',
        headingText3: 'Phone Mini headingText3',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: 'Phone Standard heading1',
        heading2: 'Phone Standard heading2',
        heading3: 'Phone Standard heading3',
        headingText1: 'Phone Standard headingText1',
        headingText2: 'Phone Standard headingText2',
        headingText3: 'Phone Standard headingText3',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Special',
        price: 900,
        description: '',
        heading1: 'Phone Special heading1',
        heading2: 'Phone Special heading2',
        heading3: 'Phone Special heading3',
        headingText1: 'Phone Special headingText1',
        headingText2: 'Phone Special headingText2',
        headingText3: 'Phone Special headingText3',
      },
    ];
  }

  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  }

  async cleanDb() {
    await Product.deleteMany();
  }

  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    });
  }
}

module.exports = FakeDB;
