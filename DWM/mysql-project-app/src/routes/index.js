import express from 'express';
import userRoutes from '../routes/userRoutes';

const router = express.Router();

// Use user routes
router.use('/users', userRoutes);

export default router;