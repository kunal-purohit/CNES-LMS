import { Router } from 'express';
import { submitContactForm } from '../controllers/contact.controller';

const router: Router = Router();

router.post('/contact', submitContactForm);

export default router;
