class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  createRootElement(tag, cssCalsses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssCalsses) {
      rootElement.className = cssCalsses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cardItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId, false);
    this.orderProducts = () => {
      console.log("Ordering....");
      console.log(this.items);
    };
    this.render();
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cardItems = updatedItems;
  }

  render() {
    const carEl = this.createRootElement("Section", "cart");
    carEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now!</button>
    `;
    const orderButton = carEl.querySelector("button");
    // orderButton.addEventListener("click", () => this.orderProducts());
    orderButton.addEventListener("click", () => this.orderProducts());
    this.totalOutput = carEl.querySelector("h2");
    return carEl;
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement("li", "product-item");
    prodEl.innerHTML = `
    <div>
    <img src="${this.product.imageUrl}" alt="${this.product.title}">
    <div class="product-item__content">
    <h2>${this.product.title}</h2>
    <h3>${this.product.price}</h3>
    <p>${this.product.description}</p>
    <button>Add to Cart</button>
    </div>
    </div>
    `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
  }
}

class ProductList extends Component {
  #products = [];

  constructor(renderHookId) {
    super(renderHookId, false);
    this.render();
    this.fetchProducts();
  }

  fetchProducts() {
    this.#products = [
      new Product(
        "A Pillow",
        "https://unitedpillow.com/images/companies/2/pillow-thumb.jpg?1564370699038",
        "Asoft pillow!",
        19.99
      ),
      new Product(
        "A Carpet",
        "https://www.westinstore.com/images/products/lrg/westin-hotel-feather-down-pillow-HB-108_lrg.jpg",
        "A carpet which you might like - or not.",
        19.99
      ),
    ];
    this.renderProducts();
  }

  renderProducts() {
    // productList.id = "prod-list";
    for (const prod of this.#products) {
      // const prodEl = document.createElement("li");
      // prodEl.className = "product-item";
      // prodEl.innerHTML = `
      // <div>
      // <img src="${prod.imageUrl}" alt="${prod.title}">
      // <div class="product-item__content">
      // <h2>${prod.title}</h2>
      // <h3>${prod.price}</h3>
      // <p>${prod.description}</p>
      // <button>Add to Cart</button>
      // </div>
      // </div>
      // `;
      new ProductItem(prod, "prod-list");
    }
  }

  render() {
    this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);

    if (this.#products && this.#products.length > 0) {
      this.renderProducts();
    }
  }
}

class Shop {
  constructor() {
    this.render();
  }
  render() {
    this.cart = new ShoppingCart("app");
    new ProductList("app");
    // const productList = new ProductList("app");
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.card = shop.cart;
  }
  static addProductToCart(product) {
    this.card.addProduct(product);
  }
}
App.init();

// const shop = new Shop();
// shop.render();

// const productList = new ProductList();
// productList.render();

// console.log(new Product());

// const productList = {
//   products: [
//     new Product(
//       "A Pillow",
//       "https://unitedpillow.com/images/companies/2/pillow-thumb.jpg?1564370699038",
//       "Asoft pillow!",
//       19.99
//     ),
//     new Product(
//       "A Carpet",
//       "https://www.westinstore.com/images/products/lrg/westin-hotel-feather-down-pillow-HB-108_lrg.jpg",
//       "A carpet which you might like - or not.",
//       19.99
//     ),
//     // {
//     //   title: "A Pillow",
//     //   imageUrl:
//     //     "https://unitedpillow.com/images/companies/2/pillow-thumb.jpg?1564370699038",
//     //   price: 19.99,
//     //   description: "Asoft pillow!",
//     // },
//     // {
//     //   title: "A Carpet",
//     //   imageUrl:
//     //     "https://www.westinstore.com/images/products/lrg/westin-hotel-feather-down-pillow-HB-108_lrg.jpg",
//     //   price: 89.99,
//     //   description: "A carpet which you might like - or not.",
//     // },
//   ],
//   render() {
//     const renderHook = document.getElementById("app");
//     const prodList = document.createElement("ul");
//     prodList.className = "product-list";
//     for (const prod of this.products) {
//       const prodEl = document.createElement("li");
//       prodEl.className = "product-item";
//       prodEl.innerHTML = `
//       <div>
//       <img src="${prod.imageUrl}" alt="${prod.title}">
//       <div class="product-item__content">
//       <h2>${prod.title}</h2>
//       <h3>${prod.price}</h3>
//       <p>${prod.description}</p>
//       <button>Add to Cart</button>
//       </div>
//       </div>
//       `;
//       prodList.append(prodEl);
//     }
//     renderHook.append(prodList);
//   },
// };

// productList.render();
