export default function getAFulfilledPromise(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise fulfilled!");
    }, 3000);
  });
}

export function getARejectedPromise(): Promise<string> {
  return new Promise((reject) => {
    setTimeout(() => {
      reject("Promise rejected!");
    }, 3000);
  });
}
