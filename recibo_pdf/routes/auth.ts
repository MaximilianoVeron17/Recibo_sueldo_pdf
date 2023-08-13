import express from 'express';
import { generateCode, login } from '../controllers/auth';

const router = express.Router();

router.get('/login/:email', login)
router.get('/login/:email/code', generateCode)

export default router;