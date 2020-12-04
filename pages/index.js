import Head from "next/head";
import { useAuth } from "../lib/auth";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const auth = useAuth();
  console.log(auth);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fast Feedback</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <button onClick={() => auth.signinWithGitHub()}>Sing In</button>
        <div className={styles.fuck}>
          <div className={styles.image}>
            <Image
              src="https://avatars2.githubusercontent.com/u/50174243?v=4"
              alt="photo"
              width={30}
              height={30}
            />{" "}
          </div>
          <span>{auth?.user?.email}</span>
        </div>
        {auth?.user && <button onClick={() => auth.signout()}>SingOut</button>}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
