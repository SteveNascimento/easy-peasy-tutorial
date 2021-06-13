import { action } from 'easy-peasy'



const basketModel = {

    productIds: [2],
    addProduct: action((state, payload) => {
        state.productIds.push(payload)
    }),
    removeProduct: action(((state, payload) => {
        state.productIds.splice(payload, 1)
    }))

};
  
export default basketModel;