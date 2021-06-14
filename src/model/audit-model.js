import { actionOn } from "easy-peasy";

const auditModel = {
    logs: [],
    onAddToBasket: actionOn(
        (actions, storeActions) => storeActions.basket.addedProduct,
        (state, target) => {
            state.logs.push(`Added product to basket: ${target.payload}`)
        }
    )
};

export default auditModel;