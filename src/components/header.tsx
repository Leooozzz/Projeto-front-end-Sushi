import { CartSideBar } from "./cart/sidebar"
import { Logo } from "./logo"

export const HeaderProducts=()=>{
    return(
       <header className="flex justify-between items-center my-5 mx-3">
       <div>
        <Logo/>
       </div>
       <div>
        <CartSideBar/>
       </div>
       </header>
    )
}