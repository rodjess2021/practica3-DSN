
import ProductModel from '../models/ProductModel.js'
import cloudinary from "../helpers/cloudinary.js";

export const getProductos = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getProducto = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await ProductModel.findById(id);
        res.status(200).json(producto)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const crearProducto = async (req, res) => {
    const { nombre, precio, descripcion, stock, categoria } = req.body;
    try {
        
        const result = await cloudinary.uploader.upload(req.file.path);
        const newProducto = new ProductModel({
            nombre,
            precio: Number(precio),
            descripcion,
            stock: Number(stock),
            categoria,
            image_url: result.secure_url,
            cloudinary_id: result.public_id
        });
        await newProducto.save();
        res.status(201).json(newProducto);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateProducto = async (req, res) => {
    const id = req.params.id;
    const { nombre, precio, descripcion, stock, categoria } = req.body;
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const producto = await ProductModel.findById(id);
        await cloudinary.uploader.destroy(producto.cloudinary_id);
        const updatedProducto = await ProductModel.updateOne({ _id: id }, {
            nombre,
            precio,
            descripcion,
            stock,
            categoria,
            image_url: result.secure_url,
            cloudinary_id: result.public_id
        });
        res.status(200).json(updatedProducto);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteProducto = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await ProductModel.findById(id);
        await cloudinary.uploader.destroy(producto.cloudinary_id);
        await ProductModel.deleteOne({ _id: id });
        res.status(200).json({ message: "Producto eliminado correctamente" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}