const searchBtn = document.querySelector('.searchBtn');
const searchBar = document.querySelector('.bar');
const gameList = document.querySelector('#gameList');

searchBtn.addEventListener('click', () => {
  const apiKey = "73ef3851954847ba8658b292dcaea269";
  const gameName = searchBar.value;
  const url = `https://api.rawg.io/api/games?search=${gameName}&key=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const games = data.results;
      console.log(data.results)
      if (games.length > 0) {
        gameList.innerHTML = '';
        games.forEach(game => {
          displayGames(game);
        });
      } else {
        gameList.innerHTML = 'No games found.';
      }
    })
    .catch(error => console.error('Error:', error));
});

const displayGames = (games) => {
    const { name, released, rating, background_image, platforms } = games;
    const platformNames = platforms.map(platform =>  platform.platform.name).join(', ');
  
    const gameDiv = document.createElement('div');
    gameDiv.innerHTML = `<img src="${background_image}"> <br> Name: ${name} <br> Platforms: ${platformNames} <br> Released: ${released} <br> Rating: ${rating} <br>`;
  
    gameList.appendChild(gameDiv);
  };
  
  
