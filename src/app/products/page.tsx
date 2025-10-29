import { TabsSkeleton } from "@/components/_products/skeleton";
import { ProductsTab } from "@/components/_products/tab";
import { Footer } from "@/components/footer";
import { HeaderProducts } from "@/components/header";
import { ToggleTheme } from "@/components/toggle-theme";
import { Suspense } from "react";

const ProductsPage = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <ToggleTheme />
        <HeaderProducts/>
        <div className="mx-3">
           <Suspense fallback={<TabsSkeleton/>}>
                <ProductsTab/>
           </Suspense>
        </div>
        <Footer/>
    </div>
  );
};

export default ProductsPage;