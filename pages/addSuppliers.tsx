import AddSupplierForm from "components/AddSupplierForm";
import Layout from "components/Layouts";
import Head from "next/head";
import React from "react";

type Props = {};

function addSuppliers({}: Props) {
  return (
    <div className="dark:bg-gray-800">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AddSupplierForm />
      </Layout>
    </div>
  );
}

export default addSuppliers;
