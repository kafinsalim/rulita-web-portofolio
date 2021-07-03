import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Email from "../component/Email";
import Section from "../component/Section";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rulita Sani</title>
        <meta
          name="description"
          content="Rulita Sani. Graphic, Motion and Product design"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <nav className={styles.nav}>
        <div>
          <Email className={styles.email} />
          hitmeup.rulita@gmail.com
        </div>
        <div>
          <button>Work</button>
          <button className={styles.resume}>Resume</button>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.hero}>
            <Image src="/hero.png" alt="Rulita icon" width={88} height={88} />
          </div>
          <h1 className={styles.title}>Hi, I’m Rulita 👋</h1>
          <p className={styles.description}>
            I do graphic, motion and also love to create a good experience
            design.
          </p>
          <small className={styles.subdescription}>
            Over 4 years experience in a fast pace company as a visual designer.
            <br />
            Currently working at <a href="https://pintu.co.id">Pintu.</a>
          </small>
          <button>
            <Image
              src="/arrow-down.png"
              alt="arrow-down"
              width={46}
              height={23}
              className={styles.arrow}
            />
          </button>
        </div>
        {/* <Section tag="tag" title="Product Design" href="#">
          content
        </Section>
        <Section tag="tag" title="Motion Design" href="#">
          content
        </Section>
        <Section tag="tag" title="Graphic Design" href="#">
          content
        </Section> */}
      </main>

      <footer className={styles.footer}>
        <div className={styles.sendmail}>
          <h4>Hit me up!</h4>
          <p>
            I open to any project collaborations or any job opportunities you
            may have. Or maybe you want to just say hello? I’d love to hear from
            you 🌈
          </p>
          <button>Send Email</button>
        </div>
        <div className={styles.connect}>
          <p>Connect</p>
          <hr />
          <div className={styles.account}>
            <a href="#">Linkedin</a>
            <a href="#">Medium</a>
            <a href="#">Instagram</a>
            <a href="#">Dribble</a>
            <a href="#">Behance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
