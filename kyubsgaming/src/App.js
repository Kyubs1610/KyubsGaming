
import React from 'react';
import './App.css';


export default  
function App() {
  
  return (
    <div className="App">
      <div className="info">    
        <div className="searchBox">
            <div className="search"> 
                <input className="bar" type="text" placeholder="Video Game" />   
                <button className="searchBtn"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path><path d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"></path></svg>  </button>
                {/* <!-- <button class="compareBtn"> Compare </button> --> */}
            </div>
        </div> 
       
            <div id="gameList"></div>

         </div>

    </div>
  );
  }

window.onload = function(){
  const searchBtn = document.querySelector('.searchBtn');
  const searchBar = document.querySelector(".bar"); 
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
})

const displayGames = (games) => {
    const { name, released, rating, background_image, platforms } = games;
    const platformNames = platforms.map(platform =>  platform.platform.name).join(', ');
  
    const gameDiv = document.createElement('div');
    gameDiv.innerHTML = `<img src="${background_image}"> <br> Name: ${name} <br> Platforms: ${platformNames} <br> Released: ${released} <br> Rating: ${rating} <br>`;
  
    gameList.appendChild(gameDiv);
   
    
  };}


