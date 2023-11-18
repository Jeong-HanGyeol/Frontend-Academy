function delay(ms: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 10) % 2 === 0) {
        resolve("success");
      } else {
        reject("failure");
      }
    }, ms);
  });
}

delay(3000)
  .then((result: string) => {
    console.log("done promise" + result);
  })
  .catch((error: string) => {
    console.error("fail promise!" + error);
  });

async function main() {
  try {
    console.log("start job");
    const result = await delay(3000);
    console.error("done async!" + result);
  } catch (e) {
    console.error("fail async" + e);
  }
}

main();
