
const itunesUrl = 'https://itunes.apple.com/search';


const artists = ['Ed Sheeran', 'Taylor Swift', 'Drake'];


const fetchTracks = async (artist) => {
    try {
        
        const response = await fetch(`${itunesUrl}?term=${artist}&limit=5&entity=song`);
        const data = await response.json();
        return data.results;
    } 
    
    
    catch (error) {
        console.error('Error fetching tracks:', error);
    }
};

const displayTracks = async () => {
    const tracksContainer = document.getElementById('tracks-container');

    
    for (let artist of artists) {
        const tracks = await fetchTracks(artist);
        tracks.forEach(track => {
           
            const trackElement = document.createElement('div');
            trackElement.className = 'track';
            trackElement.innerHTML = `
                <img src="${track.artworkUrl100}" alt="${track.trackName}">
                <h3>${track.trackName}</h3>
                <p>${track.artistName}</p>
                <button onclick="playTrack('${track.previewUrl}')">Play</button>
                <button onclick="addToPlaylist('${track.previewUrl}', '${track.trackName}', '${track.artworkUrl100}', '${track.artistName}')">Add to My Playlist</button>
            `;
            tracksContainer.appendChild(trackElement);
        });
    }
};

const addToPlaylist = (url, name, artwork, artist) => {
    const playlist = document.getElementById('playlist');

    const item = document.createElement('div');
    item.className = 'playlist-item';
    item.innerHTML = `
        <img src="${artwork}" alt="${name}">
        <h3>${name}</h3>
        <p>${artist}</p>
        <button onclick="playTrack('${url}')">Play</button>
    `;
    playlist.appendChild(item);
};


const playTrack = (url) => {
    const audio = document.getElementById('audio');
    audio.src = url;
    audio.play();
};


document.addEventListener('DOMContentLoaded', displayTracks);
