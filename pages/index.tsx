import React from "react";
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from 'components/Card.tsx'
import {fetchSuppliers} from 'utils/services.ts'

export default function Home() {
  const [error, isError] = React.useState(false)
  const [status, setStatus] = React.useState('idle')
  
  React.useEffect(() => {
    fetchSuppliers().then((data) => {
      console.log(data)
    });
  }, [])
  
  if (error) return <p>There is an error.</p>;
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <Card />
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

