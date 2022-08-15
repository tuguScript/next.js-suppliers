import React from "react";

function AddSupplierForm() {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4 mx-auto">
      <form>
        <div className="mb-6">
          <label
            htmlFor="username-success"
            className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
          >
            Supplier name
          </label>
          <input
            type="text"
            id="username-success"
            className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
            placeholder="Apple"
          />
          <p className="mt-2 text-sm text-green-600 dark:text-green-500">
            <span className="font-medium">Alright!</span> Supplier name
            available!
          </p>
        </div>
        <div>
          <label
            htmlFor="username-error"
            className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
          >
            Logo URL
          </label>
          <input
            type="text"
            id="username-error"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            placeholder="Apple"
          />
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span> Username already taken!
          </p>
        </div>
        <div>
          <label
            htmlFor="username-error"
            className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
          >
            Street
          </label>
          <input
            type="text"
            id="username-error"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            placeholder="Apple"
          />
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span> Username already taken!
          </p>
        </div>
        <div>
          <label className="block mb-6">
            <span className="text-gray-700">Address line 1</span>
            <input
              name="address1"
              type="text"
              className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
              placeholder=""
            />
          </label>
        </div>
        <label className="block mb-6">
          <span className="text-gray-700">City</span>
          <input
            name="city"
            type="text"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            placeholder=""
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-700">State/Province</span>
          <input
            name="state"
            type="text"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            placeholder=""
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-700">Zip/Postal code</span>
          <input
            name="zip"
            type="text"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            placeholder=""
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-700">Country</span>
          <input
            name="country"
            type="text"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            placeholder=""
          />
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
