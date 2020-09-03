// Import models
import
models, {
  connectDb, seedInitialData, cleanDatabase
} from './models';

// Import express framework
const express = require('express')

// Import middleware
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')

// Import routes
const homeRouter = require('./routes/homeRoute')
const routeRouter = require('./routes/routeRoute')
const productRouter = require('./routes/productRoute')
const cityRouter = require('./routes/cityRoute')
const userRouter = require('./routes/userRoute')
const conveyorRouter = require('./routes/conveyorRoute')
const distributorRouter = require('./routes/distributorRoute')
const providerRouter = require('./routes/providerRoute')
const orderRouter = require('./routes/orderRoute')
const ordersByProductRouter = require('./routes/ordersByProductRoute')
const zoneRouter = require('./routes/zoneRoute')
const neighborhoodRouter = require('./routes/neighborhoodRoute')
const inventoryRouter = require('./routes/inventoryRoute')

// Setup default port
const PORT = process.env.PORT || 4000

// Create express app
const app = express();

// Implement middleware
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(cookieParser())
app.use(bodyParser.json())
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  app.get('*', (req, res) => {
    res.sendFile('build/index.html', {
      root: __dirname
    })
  })
}

app.use('/api', homeRouter)
app.use('/cities', cityRouter)
app.use('/providers', providerRouter)
app.use('/distributors', distributorRouter)
app.use('/conveyors', conveyorRouter)
app.use('/orders', orderRouter)
app.use('/orders-by-product', ordersByProductRouter)
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/routes', routeRouter)
app.use('/users', userRouter)
app.use('/neighborhoods', neighborhoodRouter)
app.use('/zones', zoneRouter)
app.use('/inventory', inventoryRouter)

// Implement route for errors
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Start express app and database service
connectDb().then(async () => {
  app.listen(PORT, function() {
    console.log(`Server is running on: ${PORT}`);
    /* Para limpiar las tablas */
    //cleanDatabase();

    /* Para poblar las tablas */
    //seedInitialData();
  });
});
