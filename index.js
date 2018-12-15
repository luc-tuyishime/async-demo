console.log('before')
// getUser(1, getRepository)
console.log('after')

// function getRepository(user){
//     getRepository(user.gitHUbUsername, getCommits)
// }
//
// function getCommits(repos){
//     getCommits(repo, displayCommits)
// }
//
// function displayCommits(commits){
//   console.log(commits)
// }

getUser(1)
  .then(user => getRepository(user.gitHUbUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log('Commits', commits))
  .catch(error => console.log('Error', error.message))

function getUser(id){
  return new Promise((resolve, reject) => {
    // kick off some async work
    setTimeout(() => {
      console.log('Reading a user from a database....')
      resolve({ id, gitHUbUsername: 'luc'})
    }, 2000)
  })
}

function getRepository(username){ // async func that take a callback and return the result
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      console.log('Reading Github API...')
      resolve(['repo1', 'repo2', 'repo3'])
    }, 2000)
  })
}

function getCommits(repo){
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      console.log('Reading Github API...')
      resolve(['commit'])
    }, 2000)
  })
}
