import { Cart } from "@/types/cart"
import { CartItem } from "./item";

type Props={
   cartItem:Cart;
}
export const CartItemQuantity=({cartItem}:Props)=>{
    return(
        <div>
            {cartItem.quantity}
        </div>
    )
}