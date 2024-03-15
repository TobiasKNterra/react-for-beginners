import getAFulfilledPromise, { getARejectedPromise } from "./promise/promise";

const rejected: Promise<string> = getARejectedPromise();
const fulfilled: Promise<string> = getAFulfilledPromise();
const printValue = (value: string) => {
  console.log(value);
};

rejected.then(printValue).catch((reason: string) => {
  console.log("Error:", reason);
});

fulfilled
  .then((value: string) => {
    return getAFulfilledPromise();
  })
  .then(printValue)
  .catch((reason: string) => {
    console.log("Error:", reason);
  });

const testFunction = async () => {
  const value: string = await getAFulfilledPromise();
};
