import React from "react";

type Props = {
  name: string;
  address: string;
  logo: string;
};

export default function Card({
  name = "Supplier name",
  address = "supplier's address",
  logo = "https://loremflickr.com/100/100",
}: Props) {
  return (
    <div className="p-4 md:w-1/3 dark:text-white" style={{ width: "100%" }}>
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col dark:bg-slate-600">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <img src={logo} alt="" />
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium dark:text-slate-400">
            {name}
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">{address}</p>
        </div>
      </div>
    </div>
  );
}
