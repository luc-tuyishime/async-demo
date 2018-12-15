
const p = Promise.resolve({ id: 1})  // { id: 1} user promise our promise hold
p.then(result => console.log(result))
