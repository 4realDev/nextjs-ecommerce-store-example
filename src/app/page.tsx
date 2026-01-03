import Image from "next/image";
import classes from "./page.module.css";

export default async function Home() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Welcome to the E-Commerce Shop</h1>
      <p className={classes.description}>
        Explore our wide range of products and enjoy a seamless shopping
        experience.
      </p>
      <div className={classes.imageContainer}>
        <Image
          src="https://picsum.photos/200/300"
          alt="E-Commerce Shop Banner"
          fill
          className={classes.bannerImage}
          priority
        />
      </div>
    </div>
  );
}
