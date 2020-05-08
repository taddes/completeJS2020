class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.image = image;
    this.desc = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('Adding to cart');
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" >
        <div class="thisuproduct.ct-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to cart</button>
      </div>`;
      const addCartButton = prodEl.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this))
    return prodEl;
  }
}

const productList = {
  products: [
    { 
      title: 'Pillow',
      imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=977&q=80',
      price: 19.99,
      description: 'Soft pillow' 
    },
    { 
      title: 'Carpet',
      imageUrl: 'https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      price: 39.99,
      description: 'Nice rug' 
    }
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render()


      // const prodEl = document.createElement('li');
      // prodEl.className = 'product-item';
      // prodEl.innerHTML = `
      // <div>
      //   <img src="${prod.imageUrl}" alt="${prod.title}" >
      //   <div class="product-item__content">
      //     <h2>${prod.title}</h2>
      //     <h3>\$${prod.price}</h3>
      //     <p>${prod.description}</p>
      //     <button>Add to cart</button>
      // </div>
      // `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.render()



