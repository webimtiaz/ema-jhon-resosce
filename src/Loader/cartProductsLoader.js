import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async ()=>{
    const loderProduct = await fetch('products.json');
    const products =await loderProduct.json();
   
    const storeCart = getShoppingCart();

    const saveCart=[];
    for(const id in storeCart){
        const addedProduts = products.find( pd => pd.id ===id);
        if(addedProduts){
            const quantity =storeCart[id];
            addedProduts.quantity = quantity;
            saveCart.push(addedProduts)
        }
    }

    return saveCart;
}

export default cartProductsLoader;