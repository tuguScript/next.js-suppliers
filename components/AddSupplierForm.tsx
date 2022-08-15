import { Supplier } from "interfaces";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Router from "next/router";

interface IFormInput {
  name: string;
  logo: string;
  street: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

function AddSupplierForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    let supplier: Supplier = {
      name: data.name,
      logo: data.logo,
      address: {
        street: data.street,
        city: data.city,
        state: data.state,
        zip: data.zip,
      },
    };
    fetch("/api/createSupplier", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(supplier),
    }).then((res) => {
      Router.push("/");
    });
  };
  console.log("errors", errors);

  return (
    <div className="xl:w-1/3 md:w-1/2 p-4 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label
            htmlFor="suppliername-success"
            className="block mb-2 text-sm font-medium text-green-700 dark:text-white"
          >
            Supplier name
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
            placeholder="Apple"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{errors.name.type}</span>
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="suppliername-error"
            className="block mb-2 text-sm font-medium text-blue-700 dark:text-red-500"
          >
            Logo URL
          </label>
          <input
            type="text"
            defaultValue={"https://placekitten.com/100/100"}
            {...register("logo", { required: true })}
            id="suppliername-error"
            className="bg-blue-50 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-yellow-500 focus:border-blue-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            placeholder="Apple"
          />
          {errors.logo && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{errors.logo.type}</span>
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="suppliername-error"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-white"
          >
            Address
          </label>
          <input
            type="text"
            {...register("address", {
              required: true,
            })}
            id="suppliername-error"
            className="bg-blue-50 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-yellow-500 focus:border-blue-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            placeholder=""
          />
          {errors.address && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{errors.address.type}</span>
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="suppliername-error"
            className="block mb-2 text-sm font-medium text-blue-700 dark:text-red-500"
          >
            Street
          </label>
          <input
            type="text"
            {...register("street", {
              required: true,
            })}
            id="suppliername-error"
            className="bg-blue-50 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-yellow-500 focus:border-blue-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            placeholder=""
          />
          {errors.street && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{errors.street.type}</span>
            </p>
          )}
        </div>
        <label className="block mb-6">
          <span className="text-gray-700 dark:text-white">City</span>
          <input
            {...register("city", {
              required: true,
              minLength: 5,
              maxLength: 10,
              pattern: /^[a-zA-Z]+$/,
            })}
            name="city"
            type="text"
            className="bg-blue-50 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-yellow-500 focus:border-blue-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            placeholder=""
          />
          {errors.city && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{errors.city.type}</span>
            </p>
          )}
        </label>
        <label className="block mb-6">
          <span className="text-gray-700 dark:text-white">State/Province</span>
          <input
            {...register("state", {
              required: true,
            })}
            name="state"
            type="text"
            className="bg-blue-50 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-yellow-500 focus:border-blue-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            placeholder=""
          />
          {errors.state && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{errors.state.type}</span>
            </p>
          )}
        </label>
        <label className="block mb-6">
          <span className="text-gray-700 dark:text-white">Zip/Postal code</span>
          <input
            {...register("zip", {
              required: true,
            })}
            name="zip"
            type="number"
            className="bg-blue-50 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-yellow-500 focus:border-blue-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            placeholder=""
          />
          {errors.zip && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{errors.zip.type}</span>
            </p>
          )}
        </label>
        <label className="block mb-6">
          <span className="text-gray-700 dark:text-white">Country</span>
          <input
            {...register("country", {
              required: true,
            })}
            name="country"
            type="text"
            className="bg-blue-50 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-yellow-500 focus:border-blue-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            placeholder=""
          />
          {errors.country && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{errors.country.type}</span>
            </p>
          )}
        </label>
        <button
          type="submit"
          className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default AddSupplierForm;
