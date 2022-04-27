import { CustomerModel } from "../src/models/customer.model.js";

export const customerSeed = async () => {
  const customers = [
    CustomerModel.create({
      name: 'Giovani',
      email: 'giovani@teste.com',
      defaulter: true
    }),
    CustomerModel.create({
      name: 'Junior',
      email: 'junin@teste.com',
      defaulter: false
    })
  ]

  await CustomerModel.deleteMany({})

  for (let customer of customers) {
    await customer
  }
}