import { CustomerModel } from '../models/customer.model.js'

export const CustomerController = {
  getAll: async (req, res, next) => {
    try {
      const customers = await CustomerModel.find()
      res.send(customers)
    } catch (error) {
      next(error)
    }
  }
}