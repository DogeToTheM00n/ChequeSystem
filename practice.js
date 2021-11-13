function timeoutPromiseResolve(interval) {
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve("successful");
      }, interval);
    });
  };
  
  function timeoutPromiseReject(interval) {
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        reject("error");
      }, interval);
    });
  };
  
  async function timeTest() {
    const timeoutPromiseResolve1 = timeoutPromiseResolve(5000);
    const timeoutPromiseReject2 = timeoutPromiseResolve(3000);
    const timeoutPromiseResolve3 = timeoutPromiseResolve(3000);
  
   const results=Promise.all([ timeoutPromiseResolve1,
    timeoutPromiseReject2,
    timeoutPromiseResolve3])
    return results
  }
  
  let startTime = Date.now();
  timeTest().then(() => {
    let finishTime = Date.now();
    let timeTaken = finishTime - startTime;
    console.log("Time taken in milliseconds: " + timeTaken);
    console.log("Hello from then")
  })
  .catch(e => {
    console.log(e);
    let finishTime = Date.now();
    let timeTaken = finishTime - startTime;
    console.log("Time taken in milliseconds: " + timeTaken);
    
  })
  