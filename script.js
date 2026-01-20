// Splash Enter Button
document.getElementById('enterBtn').addEventListener('click', () => {
  document.getElementById('splash').style.display='none';
  document.getElementById('mainContent').classList.remove('hidden');
});

// Series Data (customizable)
const seriesData = {
  series1: {
    name: "You Are Desire",
    trailer: "youaredesire.mp4", // optional local video
    episodes: ["Episode 1","Episode 2","Episode 3","Episode 4","Episode 5","Episode 6","Episode 7","Episode 8","Episode 9",
               "Episode 10","Episode 11","Episode 12","Episode 13","Episode 14","Episode 15","Episode 16","Episode 17",
               "Episode 18","Episode 19","Episode 20","Episode 21","Episode 22","Episode 23","Episode 24","Episode 25","Episode 26"
    ,"Episode 27","Episode 28","Episode 29","Episode 30"]
  },
  series2: {
    name: "Reply 1988",
    trailer: "reply1988.mp4",
  
  },
  series3: {
    name: "The Secret of Us",
    trailer: "thesecretofus.mp4",
   
  }
};

// Open Series Modal
function openSeries(seriesKey){
  const modal = document.getElementById('seriesModal');
  const content = document.getElementById('seriesContent');
  const series = seriesData[seriesKey];

  let html = `<h2>${series.name}</h2>`;

  // Add trailer video background
  if(series.trailer){
    html += `<video class="series-modal-bg" src="${series.trailer}" autoplay loop muted></video>`;
  }

  html += `<div class="episode-grid">`;
  series.episodes.forEach(ep => {
    html += `<div class="episode-card">${ep}</div>`;
  });
  html += `</div>`;

  content.innerHTML = html;
  modal.style.display='flex';
}

// Close Series Modal
function closeSeries(){
  document.getElementById('seriesModal').style.display='none';
}
