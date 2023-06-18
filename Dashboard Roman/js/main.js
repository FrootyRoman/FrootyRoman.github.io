const chart = document.querySelector('#chart').getContext('2d');

// Functie om gegevens op te halen via Fetch API
async function getData() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30'); // Vervang 'API_URL' door de daadwerkelijke URL van de API
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Er is een fout opgetreden bij het ophalen van de gegevens:', error);
  }
}

// Functie om de grafiek te maken met de ontvangen gegevens
async function createChart() {
  const data = await getData();

  // Verwerk de gegevens van de API naar het gewenste formaat voor de grafiek
  const labels = data.prices.map(price => new Date(price[0]).toLocaleDateString());
  const bitcoinData = data.prices.map(price => price[1]);

  // create a new chart instance
  new Chart(chart, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Bitcoin',
          data: bitcoinData,
          borderColor: 'green',
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}

createChart();

// show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
  sidebar.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  sidebar.style.display = 'none';
});

// change theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  themeBtn.querySelector('span:first-child').classList.toggle('active');
  themeBtn.querySelector('span:last-child').classList.toggle('active');
});
