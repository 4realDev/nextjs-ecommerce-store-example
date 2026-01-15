import React, { CSSProperties, Suspense } from "react";
import classes from "../PageLayout/PageLayout.module.css";

type PageLayoutProps = {
  title?: string;
  description?: string;
  fallback?: React.ReactNode;
  searchComponent?: React.ReactNode;
  style?: CSSProperties;
};

export const PageLayout = ({
  title,
  description,
  fallback,
  searchComponent,
  style,
  children,
}: React.PropsWithChildren<PageLayoutProps>) => {
  return (
    <main
      className={classes.container}
      style={style}>
      {(title || description) && (
        <header>
          {title && <h1 className={classes.title}>{title}</h1>}
          {description && <p className={classes.description}>{description}</p>}
        </header>
      )}

      <section className={classes.productsContainer}>
        {searchComponent && (
          <div className={classes.searchFieldContainer}>{searchComponent}</div>
        )}
        {fallback ? (
          <Suspense fallback={fallback}>{children}</Suspense>
        ) : (
          children
        )}
      </section>
    </main>
  );
};
