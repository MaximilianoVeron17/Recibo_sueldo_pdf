import styles from "./index.module.css";
import Head from "next/head";
import Link from "next/link";
import { env } from "~/env.mjs";
import { Button } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Municipalidad de Colonia Benitez</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>{env.NEXT_PUBLIC_BACKEND_BASE_URL}</h1>
          <button>Configuración</button>
          <Button
            colorScheme="blue"
            onClick={() => {
              router.push("/carga");
            }}
          >
            Carga de Datos
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => {
              router.push("/conf");
            }}
          >
            Configuración
          </Button>
        </div>
      </main>
    </>
  );
};

export default Home;