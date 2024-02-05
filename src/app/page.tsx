import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import Navbar from "./navbar";
import React from "react";
import CarouselImage from './carousel';
export default async function Home() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const products = await supabase
    .from("products")
    .select("*, productImages(*), models(name)");

//console.log("Product", JSON.stringify(products))
  return (
    <>

      <div>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="y-2">
        <div>
      <CarouselImage />
    </div>
        
      </div>
      <ul className="flex gap-4 relative top-[-40px]">
  {products.data?.map((product) => (
    <li key={product.id} className="flex items-center">
      <div className="rounded-lg overflow-hidden bg-red-200 w-[250px] h-[250px] flex flex-col items-center justify-center">
        <h1 className="text-center">{product.models.name}</h1>
        <img
          className="w-full h-full object-cover"
          alt={`Shoe image for product id ${product.id}`}
          src={product.productImages[0]?.url}
        />
      </div>
    </li>
  ))}
</ul>
        </main>
      </div>
    </>
  );
}
