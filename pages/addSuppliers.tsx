import AddSupplierForm from "components/AddSupplierForm";
import Layout from "components/Layouts";
import React, { Component } from "react";
import Head from "next/head";

type Props = {};

type State = {};

export default class addSuppliers extends Component<Props, State> {
  state = {};

  render() {
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
}
