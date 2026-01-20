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
    episodes: ["Episode 1","Episode 2","Episode 3","Episode 4"]
  },
  series2: {
    name: "Reply 1988",
    trailer: "reply1988.mp4",
    episodes: ["Episode 1","Episode 2","Episode 3"]
  },
  series3: {
    name: "The Secret of Us",
    trailer: "thesecretofus.mp4",
    episodes: ["Episode 1","Episode 2"]
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
