// import Image from "next/image";
import classes from "./page.module.css";

export default async function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.abstractShape}></div>
      <h1 className={classes.title}>Next.js E-Commerce Showcase</h1>
      <h2 className={classes.description}>
        A demonstration of modern Next.js best practices and architectural
        patterns.
      </h2>
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
          Scalable state management with the <strong>Context API</strong>
        </li>
        <li>
          Reusable <strong>generic components</strong> and custom{" "}
          <strong>React hooks</strong>
        </li>
        <li>
          Robust data fetching with <strong>Axios</strong>
        </li>
        <li>
          Enhanced UX through components loaded with <strong>Suspense</strong>{" "}
          and shown in the UI with <strong>skeleton loading states</strong> and{" "}
          <strong>lazy loading</strong>
        </li>
        <li>
          <strong>Local storage</strong> persistence via custom hooks
        </li>
        <li>
          Subtle <strong>UI animations</strong> for improved user experience
        </li>
      </ul>
    </div>
  );
}
