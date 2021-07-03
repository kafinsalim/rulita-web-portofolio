import styles from "../styles/Section.module.css";
import Link from "next/link";

const Section = ({ children, tag, title, href }) => (
  <section className={styles.container}>
    <div>
      <div>
        <p>{tag}</p>
        <h2>{title}</h2>
      </div>
      <Link href={href}>
        <a>See more ➡️</a>
      </Link>
    </div>
    {children}
  </section>
);

export default Section;
