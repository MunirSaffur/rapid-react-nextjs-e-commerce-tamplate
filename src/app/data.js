import productPhone from "../asstes/images/productPhone.jpg";
import productPhone1 from "../asstes/images/productPhone1.jpg";
import productPhone2 from "../asstes/images/productPhone2.jpg";
import productPhone3 from "../asstes/images/productPhone3.jpg";
import productPhone4 from "../asstes/images/productPhone4.jpg";
import productPhone5 from "../asstes/images/productPhone5.jpg";
import catSlider1 from "../asstes/images/catSlider1.png";
import catSlider2 from "../asstes/images/catSlider2.png";
import catSlider3 from "../asstes/images/catSlider3.png";
import catSlider4 from "../asstes/images/catSlider4.png";
import catSlider5 from "../asstes/images/catSlider5.png";
import brand from "../asstes/images/brand.png";

export const categories = [
  {
    name: "Mobile Phones",
    showChild: false,
    children: [
      {
        name: "Apple",
      },
      {
        name: "Samsung",
      },
      {
        name: "Xiaomi",
      },
    ],
  },
  {
    name: "Laptops",
    showChild: false,
    children: [
      {
        name: "Apple",
      },
      {
        name: "Lenovo",
      },
      {
        name: "Deal",
      },
    ],
  },
  {
    name: "Headphones",
    showChild: false,
    children: [
      {
        name: "Apple",
      },
      {
        name: "Samsung",
      },
      {
        name: "Sony",
      },
    ],
  },
  {
    name: "Monitores",
    showChild: false,
    children: [],
  },
  {
    name: "Accessories",
    showChild: false,
    children: [],
  },
  {
    name: "Gaming",
    showChild: false,
    children: [],
  },
  {
    name: "Lighting",
    showChild: false,
    children: [],
  },
  {
    name: "Working Enviroment",
    showChild: false,
    children: [],
  },
];

export const products = [
  {
    id: 1,
    image: productPhone,
    brand: "Apple",
    title: "Iphone 14 pro max",
    description:
      "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    variant: {
      storage: ["64 GB", "128 GB", "256 GB", "512 GB"],
      color: ["black", "white", "red", "grey"],
    },
    price: 1200,
    availability: true,
    stock: 10,
    rating: 4.5,
    reviews: [
      {
        name: "Jane Doe",
        body: "Great phone!",
        rating: 5,
      },
      {
        name: "Jane Doe",
        body: "Great phone!",
        rating: 5,
      },
      {
        name: "Jane Doe",
        body: "Great phone!",
        rating: 5,
      },
    ],
    favorite: false,
  },
  {
    id: 2,
    image: productPhone1,
    brand: "Apple",
    title: "Samsung Galaxy S21",
    description:
      "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    variant: {
      storage: ["64 GB", "128 GB", "256 GB", "512 GB"],
      color: ["black", "white", "red", "grey"],
    },
    price: 1200,
    availability: true,
    stock: 15,
    rating: 4.2,
    reviews: [
      {
        name: "Jane Doe",
        body: "Great phone!",
        rating: 4,
      },
    ],
    favorite: false,
  },
  {
    id: 3,
    image: productPhone2,
    brand: "Apple",
    title: "Google Pixel 6",
    description:
      "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    variant: {
      storage: ["64 GB", "128 GB", "256 GB", "512 GB"],
      color: ["black", "white", "red", "grey"],
    },
    price: 1200,
    availability: true,
    stock: 12,
    rating: 4.8,
    reviews: [
      {
        name: "John Smith",
        body: "Excellent camera!",
        rating: 4.5,
      },
    ],
    favorite: false,
  },
  {
    id: 4,
    image: productPhone3,
    brand: "Apple",
    title: "OnePlus 9",
    description:
      "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    variant: {
      storage: ["64 GB", "128 GB", "256 GB", "512 GB"],
      color: ["black", "white", "red", "grey"],
    },
    price: 1200,
    availability: true,
    stock: 8,
    rating: 4.7,
    reviews: [
      {
        name: "Megan Brown",
        body: "Fast and smooth!",
        rating: 4.5,
      },
    ],
    favorite: true,
  },
  {
    id: 5,
    image: productPhone4,
    brand: "Apple",
    title: "Xiaomi Mi 11",
    description:
      "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    variant: {
      storage: ["64 GB", "128 GB", "256 GB", "512 GB"],
      color: ["black", "white", "red", "grey"],
    },
    price: 1200,
    availability: true,
    stock: 20,
    rating: 4.3,
    reviews: [
      {
        name: "Chris Green",
        body: "Affordable flagship!",
        rating: 4,
      },
    ],
    favorite: true,
  },
  {
    id: 6,
    image: productPhone5,
    brand: "Apple",
    title: "Huawei P50 Pro",
    description:
      "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    variant: {
      storage: ["64 GB", "128 GB", "256 GB", "512 GB"],
      color: ["black", "white", "red", "grey"],
    },
    price: 1200,
    availability: true,
    stock: 5,
    rating: 4.6,
    reviews: [
      {
        name: "Emily White",
        body: "Amazing camera quality!",
        rating: 5,
      },
    ],
    favorite: false,
  },
  {
    id: 7,
    image: productPhone,
    brand: "Apple",
    title: "Sony Xperia 5 III",
    description:
      "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    variant: {
      storage: ["64 GB", "128 GB", "256 GB", "512 GB"],
      color: ["black", "white", "red", "grey"],
    },
    price: 1200,
    availability: true,
    stock: 18,
    rating: 4.4,
    reviews: [
      {
        name: "Alex Johnson",
        body: "Great display!",
        rating: 4.5,
      },
    ],
    favorite: false,
  },
];

export const categorySlider = [
  {
    img: catSlider1,
    category: "Mobile phone",
  },
  {
    img: catSlider2,
    category: "Laptop",
  },
  {
    img: catSlider3,
    category: "headphone",
  },
  {
    img: catSlider4,
    category: "PC",
  },
  {
    img: catSlider5,
    category: "Gaming",
  },
  {
    img: catSlider1,
    category: "Mobile phone",
  },
  {
    img: catSlider2,
    category: "Laptop",
  },
  {
    img: catSlider3,
    category: "headphone",
  },
  {
    img: catSlider4,
    category: "PC",
  },
  {
    img: catSlider5,
    category: "Gaming",
  }
];

export const brnads = [
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
];

export const importantLinks = [
  "About Us",
  "Return and Shipping",
  "privacy policy",
];

export const orders = [
  {
      "id": 6,
      "image": {
          "src": "/_next/static/media/productPhone.019dbbfe.png",
          "height": 1024,
          "width": 1024,
          "blurDataURL": "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FproductPhone.019dbbfe.png&w=8&q=70",
          "blurWidth": 8,
          "blurHeight": 8
      },
      "brand": "Apple",
      "title": "Huawei P50 Pro",
      "description": "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
      "variant": {
          "storage": [
              "64 GB",
              "128 GB",
              "256 GB",
              "512 GB"
          ],
          "color": [
              "black",
              "white",
              "red",
              "grey"
          ]
      },
      "price": 1200,
      "availability": true,
      "stock": 5,
      "rating": 4.6,
      "reviews": [
          {
              "name": "Emily White",
              "body": "Amazing camera quality!",
              "rating": 5
          }
      ],
      "favorite": false,
      "count": 1
  },
  {
      "id": 7,
      "image": {
          "src": "/_next/static/media/productPhone.019dbbfe.png",
          "height": 1024,
          "width": 1024,
          "blurDataURL": "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FproductPhone.019dbbfe.png&w=8&q=70",
          "blurWidth": 8,
          "blurHeight": 8
      },
      "brand": "Apple",
      "title": "Sony Xperia 5 III",
      "description": "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
      "variant": {
          "storage": [
              "64 GB",
              "128 GB",
              "256 GB",
              "512 GB"
          ],
          "color": [
              "black",
              "white",
              "red",
              "grey"
          ]
      },
      "price": 1200,
      "availability": true,
      "stock": 18,
      "rating": 4.4,
      "reviews": [
          {
              "name": "Alex Johnson",
              "body": "Great display!",
              "rating": 4.5
          }
      ],
      "count": 1
  },
  {
      "id": 3,
      "image": {
          "src": "/_next/static/media/productPhone.019dbbfe.png",
          "height": 1024,
          "width": 1024,
          "blurDataURL": "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FproductPhone.019dbbfe.png&w=8&q=70",
          "blurWidth": 8,
          "blurHeight": 8
      },
      "brand": "Apple",
      "title": "Google Pixel 6",
      "description": "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
      "variant": {
          "storage": [
              "64 GB",
              "128 GB",
              "256 GB",
              "512 GB"
          ],
          "color": [
              "black",
              "white",
              "red",
              "grey"
          ]
      },
      "price": 1200,
      "availability": true,
      "stock": 12,
      "rating": 4.8,
      "reviews": [
          {
              "name": "John Smith",
              "body": "Excellent camera!",
              "rating": 4.5
          }
      ],
      "favorite": false,
      "count": 1
  },
  {
      "id": 1,
      "image": {
          "src": "/_next/static/media/productPhone.019dbbfe.png",
          "height": 1024,
          "width": 1024,
          "blurDataURL": "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FproductPhone.019dbbfe.png&w=8&q=70",
          "blurWidth": 8,
          "blurHeight": 8
      },
      "brand": "Apple",
      "title": "Iphone 14 pro max",
      "description": "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
      "variant": {
          "storage": [
              "64 GB",
              "128 GB",
              "256 GB",
              "512 GB"
          ],
          "color": [
              "black",
              "white",
              "red",
              "grey"
          ]
      },
      "price": 1200,
      "availability": true,
      "stock": 10,
      "rating": 4.5,
      "reviews": [
          {
              "name": "Jane Doe",
              "body": "Great phone!",
              "rating": 5
          },
          {
              "name": "Jane Doe",
              "body": "Great phone!",
              "rating": 5
          },
          {
              "name": "Jane Doe",
              "body": "Great phone!",
              "rating": 5
          }
      ],
      "favorite": false,
      "count": 1
  },
  {
      "id": 5,
      "image": {
          "src": "/_next/static/media/productPhone.019dbbfe.png",
          "height": 1024,
          "width": 1024,
          "blurDataURL": "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FproductPhone.019dbbfe.png&w=8&q=70",
          "blurWidth": 8,
          "blurHeight": 8
      },
      "brand": "Apple",
      "title": "Xiaomi Mi 11",
      "description": "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
      "variant": {
          "storage": [
              "64 GB",
              "128 GB",
              "256 GB",
              "512 GB"
          ],
          "color": [
              "black",
              "white",
              "red",
              "grey"
          ]
      },
      "price": 1200,
      "availability": true,
      "stock": 20,
      "rating": 4.3,
      "reviews": [
          {
              "name": "Chris Green",
              "body": "Affordable flagship!",
              "rating": 4
          }
      ],
      "favorite": true,
      "count": 1
  }
]