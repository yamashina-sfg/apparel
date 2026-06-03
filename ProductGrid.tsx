import { products } from "@/lib/brand";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProductGrid() {
  return (
    <section id="shop" className="bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Product List"
          title="選びやすく、長く着られる定番。"
          copy="商品一覧は写真を大きく、情報は必要十分に。初回購入でも判断しやすいよう、カテゴリ、価格、ライン属性をすぐ確認できます。"
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 md:gap-y-14">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
