console.log('before')
getUser(1, getRepository)
console.log('after')

function getRepository(user){
    getRepository(user.gitHUbUsername, getCommits)
}

function getCommits(repos){
    getCommits(repo, displayCommits)
}

function displayCommits(commits){
  console.log(commits)
}

function getUser(id, callback){
  setTimeout(() => {
    console.log('Reading a user from a database....')
    callback({ id, gitHUbUsername: 'luc'})
  }, 2000)
}


function getRepository(username, callback){ // async func that take a callback and return the result
  setTimeout(()=> {
    console.log('Reading Github API...')
    callback(['repo1', 'repo2', 'repo3'])
  }, 2000)
}
