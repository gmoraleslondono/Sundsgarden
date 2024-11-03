// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("The operation was successful.");
//   } else {
//     reject("The operation was unsuccessful.");
//   }
// });

// myPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch data from API using promises
const fetchAdviceById = (id) => {
  fetch(`https://api.adviceslip.com/advice/${id}`)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then((data) => {
      console.log(data);
      const advice = data.slip.advice;
      console.log(`Advice (ID: ${id}): ${advice}`);
    })
    .catch((error) => {
      console.log("Error fetching advice:", error);
    });
};

fetchAdviceById(10);
