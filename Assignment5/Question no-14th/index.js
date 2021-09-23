/*let promise = new Promise((res,rej) => {
    setTimeout(() => 
        res("Resolved!"),3000)
    });
    promise.then((res) => alert("Response value is: " +res));*/

async function func() {
  let promise = new Promise((res, rej) => {
    setTimeout(() => res("Resolved!"), 3000);
  });
  let result = await promise; // wait until the promise resolves
  alert(result);
}
func();
