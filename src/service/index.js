export const githubRepos = () => {
  const url = "https://api.github.com/users/jonl17"
  fetch(url).then((resp) => {
    return resp.json()
  }).then(data => {
    console.log(data)
  })
}