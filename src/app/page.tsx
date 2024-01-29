import { createServerClient, type CookieOptions } from "@supabase/ssr";
import Image from "next/image";
import { cookies } from "next/headers";

// La page ici est process côté serveur
export default async function Home() {
  const cookieStore = cookies();

  // on utilise ici le client supabase côté serveur
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="flex gap-4">
        {products.data?.map((product) => (
          <li key={product.id}>
            <div className="rounded-lg overflow-hidden bg-red-200 w-[250px] h-[250px]">
              <h1>{product.models.name}</h1>
              <img className="w-full h-full object-cover"
                alt={`Shoe image for product id ${product.id}`}
                src={product.productImages[0].url}
              />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
