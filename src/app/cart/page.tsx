import { PageLayout } from "@/components/PageLayout";
import { CartList } from "@/components/CartList";

export default async function CartPage() {
  return (
    <PageLayout
      title="Your Cart"
      description="Review your selected items before proceeding to checkout.">
      <CartList />
    </PageLayout>
  );
}
