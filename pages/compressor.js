import Head from 'next/head';
import styles from '../styles/Compressor.module.css';

export default function Compressor() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Compressor Co-pilot</title>
        <meta name="description" content="A Tecnod8.ai Product" />
      </Head>
      
      <div className={styles.header}>
        <img src="/imageLogo.svg" alt="Technod8 Logo" className={styles.logo} />
      </div>

      <div className={styles.content}>
        <p className={styles.loadingText}>
          Please wait! <span className={styles.highlight}>Technod8.ai</span> is opening
        </p>
        <h1 className={styles.title}>Compressor Co-pilot</h1>
        
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar}></div>
        </div>
      </div>
      
      <div className={styles.refreshButton}>
        
        <img src="/reloadbtn.svg" alt="Refresh" />
      </div>
    </div>
  );
}
