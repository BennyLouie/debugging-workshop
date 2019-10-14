document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  let jokeList = document.getElementById('joke-list')
  let username = document.getElementById('name-input').value
  let joke;
  
  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(jokeData => {
      let newJokeLi = document.createElement('li')
      joke = jokeData.joke

      newJokeLi.innerHTML = `
      <span class="username">${username} says:</span> ${joke}
      `
      jokeList.appendChild(newJokeLi)

    })
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    username = event.target["name-input"].value

    if(username === ""){
      return 
    }
    fetchJoke()
  })
})
