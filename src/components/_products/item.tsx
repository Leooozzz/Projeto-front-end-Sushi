"use client";
import { Product } from "@/types/productsType";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useCartStore } from "@/app/store/cart-store";
type Props = {
  item: Product;
};

export const ProductItem = ({ item }: Props) => {
  const { upsertCartItem } = useCartStore((state) => state);
  const handleAddButton = () => {
    upsertCartItem(item,1)
    toast.success(`${item.name} Adicionado com sucesso`);
  };
  return (
    <div>
      <div className="rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-31 object-cover"
        />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <p>{item.name}</p>
        <p>R$ {item.price.toFixed(2)}</p>
        <Button variant={"outline"} onClick={handleAddButton}>
          Adicionar
        </Button>
      </div>
    </div>
  );
};
