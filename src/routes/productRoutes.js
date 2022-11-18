import Express from 'express';
import { crearProducto, deleteProducto, getProducto, getProductos, updateProducto } from '../controllers/ProductController.js';
const upload = require('../helpers/multer.js');

const router = Express.Router();


router.get('/', getProductos)

router.get('/:id', getProducto)

router.post('/', upload.single('image'), crearProducto)

router.put('/:id', upload.single('image'), updateProducto)

router.delete('/:id', deleteProducto)

export default router;