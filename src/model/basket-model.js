import { action, computed, thunk } from 'easy-peasy'
import * as basketService from '../services/basket-service'


const basketModel = {

    productIds: [],
    products: computed(
        [
            state => state.productIds,
            (state, storeState) => storeState.products.items
        ],
        (productIds, products) => productIds.map(productId =>
            products.find(product => product.id === productId)),
    ),
    addProduct: thunk(async (actions, payload) => {
        await basketService.addProductToBasket(payload)

        actions.addedProduct(payload)
    }),
    count: computed(state => state.productIds.length),
    addedProduct: action((state, payload) => {
        state.productIds.push(payload)
    }),
    removeProduct: action(((state, payload) => {
        state.productIds.splice(payload, 1)
    }))

};
  
export default basketModel;