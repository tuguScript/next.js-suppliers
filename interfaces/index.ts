export type Supplier = {
  name: string;
  logo: string;
  address: Address;
};

export type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

export type ResponseError = {
  message: string;
};
