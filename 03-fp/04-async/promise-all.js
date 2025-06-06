rejectList = [];

function promiseN(n) {
    return new Promise((resolve, reject) => {
        console.log(`--- promise(${n}) start ---`);
        setTimeout(() => {
            if (rejectList.includes(n)) {
                reject(new Error(`*** promise(${n}) rejected ***`));
            } else {
                resolve(n);
                console.log(`=== promise(${n}) resolved ===`);
             }
         }, 1000 * n);
    });
 }
 const promises = [promiseN(3), promiseN(2), promiseN(1)];
let results = [];

try {
    results = await Promise.allSettled(promises);
} catch (error) {
        console.error("Error: " + error.message);
 }
 console.log(results);