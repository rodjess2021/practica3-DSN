import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './database/db.js'
import productRoutes from './routes/productRoutes.js'

const app = express()
dotenv.config()
const port = process.env.PORT || 8000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/product', productRoutes)
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API')
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})