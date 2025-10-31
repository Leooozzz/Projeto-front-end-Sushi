import { useCartStore } from "@/app/store/cart-store"
import { UseCheckutStore } from "@/app/store/checkout-stroe"

export const generateMessage=()=>{
    const{name,address}=UseCheckutStore(state=>state)
    const{cart}=useCartStore(state=>state)
    let orderProduct=[]
    for(let item of cart){
        orderProduct.push(`${item.quantity}X ${item.product.name}`)
    }
    return `**Dados do cliente**
Nome: ${name}
Endereço: ${address.street},${address.number},(${address.complement})
${address.district},${address.city}/${address.state}
=============
**Pedidos**
${orderProduct.join('\n')}
`
}