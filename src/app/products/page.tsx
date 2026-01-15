import { ProductList } from "@/components/ProductList/ProductList";
import { ProjectListSkeleton } from "@/components/ProductList/ProjectListSkeleton";
import { SearchField } from "@/components/ui/SearchField/SearchField";
import { PageLayout } from "@/components/PageLayout";

export default async function ProductPage() {
  return (
    <PageLayout
      fallback={<ProjectListSkeleton />}
      title={"Products"}
      description="Discover our exclusive range of products tailored just for you."
      searchComponent={<SearchField />}>
      <ProductList />
    </PageLayout>
  );
}
