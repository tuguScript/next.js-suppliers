import React, { Component } from "react";
import Card from "./Card";
import useSWR from "swr";

type Props = {};

type State = {};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function SuppliersListView({ }: Props) {
  const { data, error } = useSWR("/api", fetcher);
  if (data) {
    return (
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        {data.map((supplier, i) => (
          <Card
            key={i}
            name={supplier.name}
            logo={supplier.logo}
            address={supplier.address}
          />
        ))}
      </div>
    );
  }
  if (error) {
    return <h1>Something wrong</h1>;
  }
  return <h1>loading</h1>;
}

export default SuppliersListView;
