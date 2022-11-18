
import mongoose from 'mongoose';


const Schema = mongoose.Schema;


const productSchema = new Schema(
    {
        nombre: String,
        descripcion: String,
        precio: Number,
        stock: Number,
        categoria: String,
        image_url: String,
        cloudinary_id: String,
    },
    {
        collection: 'product',
        timestamps: true,
    }
);

export default mongoose.model('product', productSchema);