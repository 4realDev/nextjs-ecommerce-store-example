import { ProductDetail } from "@/components/ProductDetail";
import { getProductById } from "@/app/api/modules/product";
import { ProductDetailSkeleton } from "@/components/ProductDetail/ProductDetailSkeleton";
import { PageLayout } from "@/components/PageLayout";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productDetailsPromise = getProductById(id);
  return (
    <PageLayout fallback={<ProductDetailSkeleton />}>
      <ProductDetail productDetailsPromise={productDetailsPromise} />
    </PageLayout>
  );
}
