import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import Header from "../components/Header";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [showKnowledge, setShowKnowledge] = useState(false);

  const router = useRouter();

  const navigateToCompressor = () => {
    router.push('/compressor');
  };

  const handleMenuClick = () => {
    setShowKnowledge(true); // Open the dialog box
  };

  const closeDialog = () => {
    setShowKnowledge(false); // Close the dialog box
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Twin</title>
        <meta name="description" content="A Tecnod8.ai Product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Digital Twin</h1>
        <p className={styles.subtitle} class = "heading-pad">A Tecnod8.ai Product</p>

        <p className={styles.selectText}>
          <span className={styles.greenText}>Select any</span> product <span className={styles.greenText}>to get started.</span>
        </p>

        <img
          src="/reloadbtn.svg"
          alt="Menu Icon"
          className={styles.menuButton}
          onClick={handleMenuClick}
        />
        <div className={styles.buttonContainer}>
          <Button label="Compressor" onClick={navigateToCompressor}/>
          <Button label="ASRS" />
          <Button label="Education" />
          <Button label="Manufacture" />
        </div>
        <div className={styles.fadingLine}></div>

        <div className={styles.addKnowledge}>
          <p>Add Knowledge from your system.</p>
          <button className={styles.addKnowledgeButton} onClick={handleMenuClick}>Knowledge</button>
        </div>


        {showKnowledge && (
          <div className={styles.dialogOverlay}>
            <div className={styles.dialogBox}>
              <button className={styles.closeButton} onClick={closeDialog}>
                ×
              </button>
              <h2 className={styles.dialogTitle}>
                <span className={styles.greenText}>Add Knowledge </span>
                 from your device
              </h2>
              <button className={styles.chooseFileButton}>Choose File</button>
              <p className={styles.noFileChosen}>No file chosen.</p>
              <div className={styles.pdfList}>
                <h3>Want to use your existing Knowledge PDFs?</h3>
                <ul>
                  <li>Pdfname.pdf</li>
                  <li>Pdfname.pdf</li>
                  <li>Pdfname.pdf</li>
                  <li>Pdfname.pdf</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <img src="/robottecnod8.svg" alt="Robot" className={styles.robotImage} />


      </main>
    </div>
  );
}
