const axios = require('axios').default;

const username = 'edcruz29';

axios.get(`https://api.github.com/users/${username}`)
  .then(response =>  console.log(response.data))
  .catch(error => console.log(error.response.data));


async function fetchGithubUser(username) {
  try {
    const user = await axios.get(`https://api.github.com/users/${username}`);
    console.log(user.data);
  } catch (error) {
    console.log(error.response.data)
  }
}

fetchGithubUser('edcruz29');