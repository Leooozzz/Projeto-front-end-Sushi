"use client";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { useCartStore } from "@/app/store/cart-store";
import { CartItem } from "./item";
import { useState } from "react";
import { CheckoutDialog } from "../checkout/dialog";

export const CartSideBar = () => {
  const { cart } = useCartStore((state) => state);
  const [checkoutOpen,setCheckouOpen]=useState(false)
  let subtotal=0;
  for(let item of cart){
    subtotal += item.quantity * item.product.price
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span>Carrinho</span>
          {cart.length > 0 && (
            <div className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1"></div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="p-3">
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 my-2">{cart.map(item=>(
          <CartItem key={item.product.id} item={item}/>
        ))}</div>
        <Separator className="my-4 " />
        <div className="flex justify-between items-center text-xs">
          <div className="p-1">Subtotal: </div>
          <div className="p-1">R$ {subtotal.toFixed(2)}</div>
        </div>

        <Separator className="my-4" />

        <div className="text-center">
          <Button onClick={()=>setCheckouOpen(true)}>
            <span>Finalizar compra</span>
          </Button>
        </div>
        <CheckoutDialog
          open={checkoutOpen}
          onOpenChange={setCheckouOpen}
        />
      </SheetContent>
    </Sheet>
  );
};
