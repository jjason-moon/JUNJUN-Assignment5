import Head from "next/head";
import Assignment from "./assignment5_JunjunSun"; 
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Junjun's Assignment 5</title>
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          
          {/* 2. 这里是关键！把原来的那一堆 Logo 和链接删掉，换成你的作业 */}
          <h1 style={{ marginBottom: '20px' }}>My Data Visualization</h1>
          
          <div className="assignment-container">
            <Assignment /> 
          </div>

        </main>
      </div>
    </>
  );
}