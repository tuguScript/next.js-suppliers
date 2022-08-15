import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AddSupplierForm from "components/AddSupplierForm";

export default function Home() {
  const [error, isError] = React.useState(false);
  const [status, setStatus] = React.useState("idle");

  if (error) return <p>There is an error.</p>;
  return (
    <div
      className="dark:bg-gray-800"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AddSupplierForm />
      </main>

      <footer></footer>
    </div>
  );
}
