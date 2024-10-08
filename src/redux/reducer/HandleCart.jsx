import { toast } from "react-toastify";

const cart = [];

const handleCart = (state=cart, action) => {
    const product = action.payload;

    switch(action.type){
        case 'ADD_TO_CART':
            // Check if Product already in cart
            const existingProduct = state.find((p) => p.id === product.id);
            if(existingProduct){
                // Increase the quantity
                toast.warning("Already in cart");
                return state.map((p) => p.id === product.id? {...product, quantity: existingProduct.quantity + 1} : p);
            }
            else{
                // If not, add product to cart
                toast.success("Product added to cart!");
                return [...state, {...product, quantity: 1}];
            }

        case 'REMOVE_FROM_CART':
            const existingProduct1 = state.find(p => p.id === product.id);

            if(existingProduct1.quantity === 1){
                /* return state.map(p => p.id === product.id? {...product, quantity: existingProduct1.quantity - 1} : p); */

                return state.filter(product => product.id!==existingProduct1.id);
            } else {
                return state.map(p => p.id === product.id? {...product, quantity: existingProduct1.quantity - 1} : p);
            }

        default:
            return state;
    }
 };

 export default handleCart;