// Splash Enter Button
document.getElementById('enterBtn').addEventListener('click', () => {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('mainContent').classList.remove('hidden');
});

// Series Data (customizable)
const seriesData = {
  series1: {
    name: "Crimson Saga",
    episodes: ["Episode 1", "Episode 2", "Episode 3", "Episode 4"]
  },
  series2: {
    name: "Red Eclipse",
    episodes: ["Episode 1", "Episode 2"]
  },
  series3: {
    name: "Velvet Shadows",
    episodes: ["Episode 1", "Episode 2", "Episode 3"]
  }
}

// Open Series Modal
function openSeries(seriesKey) {
  const modal = document.getElementById('seriesModal');
  const content = document.getElementById('seriesContent');
  const series = seriesData[seriesKey];

  let html = `<h2>${series.name}</h2><div class="episode-grid">`;
  series.episodes.forEach(ep => {
    html += `<div class="episode-card">${ep}</div>`;
  });
  html += `</div>`;

  content.innerHTML = html;
  modal.style.display = 'flex';
}

// Close Series Modal
function closeSeries() {
  const modal = document.getElementById('seriesModal');
  modal.style.display = 'none';
}
