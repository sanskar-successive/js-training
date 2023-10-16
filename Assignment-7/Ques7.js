const asyncFunc1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("asyncFunc1 resolved");
    }, 2000);
  });
};

const asyncFunc2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("asyncFunc2 resolved");
    }, 1500);
  });
};

const asyncFunc3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("asyncFunc3 resolved");
    }, 1000);
  });
};

const resolveAllAsyncFuncs = async () => {
  const asyncRes1 = asyncFunc1();
  const asyncRes2 = asyncFunc2();
  const asyncRes3 = asyncFunc3();

  const result = await Promise.all([asyncRes1, asyncRes2, asyncRes3]);

  return result;
};

const promise = resolveAllAsyncFuncs();
console.log(promise)

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
