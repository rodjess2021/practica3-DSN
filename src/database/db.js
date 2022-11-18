import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const password = process.env.PASSWORD_MONGO

mongoose.connect(`mongodb+srv://rodrigo:qjDcRvDwwDaFvj2g@cluster0.u8nypr2.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on('open', () => { console.log('Connected to MongoDB') })
db.on('error', (error) => { console.log('error al conectar a mongodb' + error) });

export default db

























