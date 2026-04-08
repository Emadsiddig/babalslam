const express = require('express');
const path = require('path');
const app = express();
const port =process.env.PORT || 3000;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static('public'));

// Hot products data
const hotProducts = [
  {
    name: 'سيفترياکسون 5000',
    price: '5000 جنيه',
    image: '/images/product1.jpg'
  },
  {
    name: 'باراسيتامول 500 مجم',
    price: '200 جنيه',
    image: '/images/product2.jpg'
  },
  {
    name: 'أموكسيسيلين 500 مجم',
    price: '300 جنيه',
    image: '/images/product3.jpg'
  },
  {
    name: 'فايبريد 400 مجم',
    price: '1500 جنيه',
    image: '/images/product4.jpg'
  }
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { products: hotProducts });
});

// WhatsApp number
app.locals.whatsapp = '+249902345698';

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
