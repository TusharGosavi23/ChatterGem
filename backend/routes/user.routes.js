import {Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import {body} from 'express-validator';

const router =  Router();

Router.post('./register', userController.createUserController);



export default router;