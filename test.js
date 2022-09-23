
const axios = require('axios')

  

axios.get('http://localhost:port/numbers?url=http://something.com/primes&url=http://anything.com/fibo')
  .then(response => {
    console.log(response.data);
    
  })
  .catch(error => {
    console.log(error);
  });