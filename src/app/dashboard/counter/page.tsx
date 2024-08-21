

import { ShoppingCount } from "@/app/shopping-cart";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Shopping Page',
    description: 'Un simple contador',
};

export default function CounterPage() {




    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Producto en el carrito</span>
            <ShoppingCount value={20} />

        </div>
    );
}