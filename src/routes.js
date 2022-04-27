import express from "express";
import { CustomerController } from './controllers/Customer.Controller.js'

export const routes = express.Router()

routes.get('/customers', CustomerController.getAll)