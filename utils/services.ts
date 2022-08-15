export function fetchSuppliers() {
  return fetch(
    '/api'
  ).then((data) => data.json()).catch((e) => {
    console.log("error", e)
  });
}
