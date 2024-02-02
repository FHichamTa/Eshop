import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function Page({ params }: { params: { id: string } }) {


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


    const product = await supabase
        .from("products")
        .select("*, productImages(*), models(name)")
        .eq('id', params.id)
        .maybeSingle()

    console.log(JSON.stringify(product, null, 2))
    if (!product.data) {
        return <div>Product {params.id} does not exist</div>
    }
    return <div>{product.data?.models?.name}</div>
}

