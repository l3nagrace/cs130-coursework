const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
  
    document.querySelector('#tracks').innerHTML = "";

    // this code fetches tracks based on a search term and prints them to the console
    fetch('https://www.apitutor.org/spotify/simple/v1/search?type=track&limit=5&q=' + term)
        .then(response => response.json())
        .then(tracks => {
            console.log(tracks);

            //this code handles the case where no tracks are found
            if (tracks.length === 0) {
                document.querySelector('#tracks').innerHTML += `
                <p>No results matched your search.</p>
                `;
            }

            //this code outputs the first 5 tracks
            for (const track of tracks) {
                
                document.querySelector('#tracks').innerHTML += `
                        <button class="track-item preview" data-preview-track="${track.preview_url}" onclick="handleTrackClick(event)">
                            <img src="${track.album.image_url}" alt="Album cover image of ${track.album.name}">
                            <i class="fas play-track fa-play" aria-hidden="true"></i>
                            <div class="label">
                                <h2>${track.name}</h2>
                                <p>
                                    ${track.artist.name}
                                </p>
                            </div>
                        </button>
                    
               `;
            }
        })


};

const getAlbums = (term) => {
    document.querySelector('#albums').innerHTML = "";

    fetch('https://www.apitutor.org/spotify/simple/v1/search?type=album&q=' + term)
    .then(response => response.json())
        .then(albums => {
            console.log(albums);

            //when no albums are found
            if (albums.length === 0) {
                document.querySelector('#albums').innerHTML += `
                <p>No albums matched your search.</p>
                `;
            }

        
            for (const album of albums) {
                
                document.querySelector('#albums').innerHTML += `
        
                    <section class="album-card" id="${album.id}">
                        <div>
                            <img src="${album.image_url}" alt="Album cover image of ${track.album.name}">
                            <h2>${album.name}</h2>
                            <div class="footer">
                                <a href="${album.spotify_url}" target="_blank">
                                    view on spotify
                                </a>
                            </div>
                        </div>
                    </section>
                    
               `;
            }
        })

   
};

const getArtist = (term) => {
    document.querySelector("#artist").innerHTML = "";
  
    fetch("https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=" + term)
      .then((response) => response.json())
      .then((artist) => {
  
        console.log(artist);
  
        console.log(artist.image_url);
        if (artist.length === 0) {
          document.querySelector("#artist").innerHTML += `
                  <p>No artists matched your search.</p>
                  `;
        } else {
          document.querySelector("#artist").innerHTML += getArtistHTML(artist[0]);
        }
      });
  };
  

  const getArtistHTML = (data) => {
    return `<section class="artist-card" id="${data.id}">
    <div>
        <img alt="Image of ${data.name}" src="${data.image_url}" />
        <h2>${data.name}</h2>
        <div class="footer">
            <a href="${data.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
  </section>`;
  };


const handleTrackClick = (ev) => {
    const previewUrl = ev.currentTarget.getAttribute('data-preview-track');
    audioPlayer.setAudioFile(previewUrl);
    audioPlayer.play();
}

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};