import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { useState } from 'react';
import type { NextPage } from 'next';
import Upload from '../components/uploadImage';
// import {findDominantColor} from '../components/findDominantColor';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [dominantColor, setDominantColor] = useState([0, 0, 0]);

  const handleImageUpload = (imageData: ImageData) => {
      console.log(imageData);
    // const color = findDominantColor(imageData);
    // setDominantColor(color);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />
        <div className="w-2/3">
            <Upload />
        </div>

      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};

export default Home;
