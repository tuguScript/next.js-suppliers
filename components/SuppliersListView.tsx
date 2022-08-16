import React, { Component } from "react";
import Card from "./Card";
import useSWR from "swr";

type Props = {};

type State = {};

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log("data", data));

function SuppliersListView({}: Props) {
  const { data, error } = useSWR("/api", fetcher);
  return (
    <div className="grid grid-cols-3 gap-2">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default SuppliersListView;
