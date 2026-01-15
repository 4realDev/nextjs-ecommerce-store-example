// import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import classes from "./page.module.css";

export default async function Home() {
  return (
    <PageLayout
      title="Next.js E-Commerce Showcase"
      description="This is a demonstration of modern Next.js best practices and architectural patterns wrapped in a realistic e-commerce showcase."
      style={{ maxWidth: "800px" }}>
      <ul className={classes.featureList}>
        <li>
          <strong>Next.js 13</strong> production setup using the{" "}
          <strong>App Router</strong>
        </li>
        <li>
          <strong>Server</strong> and <strong>Client Components</strong> for
          optimal rendering strategies
        </li>
        <li>
          <strong>State-Management</strong> with the{" "}
          <strong>Context API</strong>
        </li>
        <li>
          Custom, reusable and <strong>generic components</strong> and{" "}
          <strong>hooks</strong>
        </li>
        <li>
          <strong>API data fetching</strong> from &quot;fakestoreapi.com&quot;
          with <strong>Axios</strong>
        </li>
        <li>
          <strong>Asynchronous rendering</strong> with <strong>Suspense</strong>
          , combined with <strong>skeleton components</strong>
        </li>
        <li>
          <strong>Local storage</strong> persistence via custom
          <strong> useLocalStorage</strong> hooks
        </li>
        <li>
          <strong>UI animations</strong> for improved user experience
        </li>
      </ul>
    </PageLayout>
  );
}
