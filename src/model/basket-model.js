import { action, actionOn, computed, thunk } from 'easy-peasy'
import * as basketService from '../services/basket-service'


const basketModel = {

    productIds: [],

    total: 0,

    onAddToBasket: actionOn(
        (actions, storeActions) =>  storeActions.basket.addedProduct,
        (state, target) => {
            state.total = state.total + parseFloat(target.payload.price)
        }
    ),

    onRemoveFromBasket: actionOn(
        (actions, storeActions) =>  storeActions.basket.removeedProduct,
        (state, target) => {
            state.total = state.total - parseFloat(target.payload.item.price)
        }
    ),

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
        state.productIds.push(payload.id)
    }),

    removeProduct: thunk( async (actions, payload) => {
        await basketService.removeProductToBasket(payload.idx)
        actions.removeedProduct(payload)
    }),

    removeedProduct: action((state, payload) => {
        state.productIds.splice(payload.idx, 1)
    }),
};
  
export default basketModel;