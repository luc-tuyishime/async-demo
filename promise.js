
// create a Promise
const p = new Promise((resolve, reject) => {
  // kick off some async work
  setTimeout(() => {
       resolve(1) // pending => resolved, fulfilled
       reject(new Error('Message')) // pending => rejected to the consumer of that function
  },2000)

})

 // consume it
p.then(result => console.log('result', result))
 .catch(err => console.log('Error', err.message))
