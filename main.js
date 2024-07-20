function toggleDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    dropdown.classList.toggle('hidden');
}

document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('languageDropdown');
    const trigger = dropdown.previousElementSibling;

    if (!trigger.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add('hidden');
    }
});

const ctx = document.getElementById('salesChart').getContext('2d');

const salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'],
        datasets: [{
            label: 'Sales Details',
            data: [30, 45, 50, 64, 55, 50, 45, 60, 55, 50, 45, 50],
            borderColor: '#4379EE',
            borderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: '#4880FF',
            pointBorderColor: '#4880FF',
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    drawBorder: false,
                    color: function (context) {
                        if (context.tick.value === 0) {
                            return 'transparent';
                        }
                        return 'rgba(0, 0, 0, 0.1)';
                    }
                },
                ticks: {
                    callback: function (value) {
                        return value + '%';
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.parsed.y + '%';
                    }
                }
            },
        },
    },
});

