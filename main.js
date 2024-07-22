const pageContent = {
    English: {
        dashboard: "Dashboard",
        subscriptions: "Subscriptions",
        clients: "Clients",
        domains: "Domains",
        statistics: "Statistics",
        websiteSettings: "Website Settings",
        seo: "SEO",
        knowledgeBase: "Knowledge base",
        communications: "Communications",
        settings: "Settings",
        logout: "Logout",
        totalUsers: "Total Users",
        upgraded: "Upgraded",
        totalSales: "Total Sales",
        totalPortals: "Total Portals",
        salesDetails: "Sales Details",
        recentPortals: "Recent Portals",
        client: "Client",
        accountType: "Account Type",
        plan: "Plan",
        subdomain: "Subdomain",
        actions: "Actions",
        visit: "Visit",
        January: "January",
        February: "February",
        March: "March",
        April: "April",
        May: "May",
        June: "June",
        July: "July",
        August: "August",
        September: "September",
        October: "October",
        November: "November",
        December: "December"
    },
    Swedish: {
        dashboard: "Instrumentbräda",
        subscriptions: "Prenumerationer",
        clients: "Kunder",
        domains: "Domäner",
        statistics: "Statistik",
        websiteSettings: "Webbplatsinställningar",
        seo: "SEO",
        knowledgeBase: "Kunskapsbas",
        communications: "Kommunikationer",
        settings: "Inställningar",
        logout: "Logga ut",
        totalUsers: "Totalt antal användare",
        upgraded: "Uppgraderad",
        totalSales: "Total försäljning",
        totalPortals: "Totala portaler",
        salesDetails: "Försäljningsdetaljer",
        recentPortals: "Nya portaler",
        client: "Klient",
        accountType: "Kontotyp",
        plan: "Plan",
        subdomain: "Subdomän",
        actions: "Åtgärder",
        free: "Gratis",
        basic: "Grundläggande",
        visit: "Besök",
        January: "Januari",
        February: "Februari",
        March: "Mars",
        April: "April",
        May: "Maj",
        June: "Juni",
        July: "Juli",
        August: "Augusti",
        September: "September",
        October: "Oktober",
        November: "November",
        December: "December"
    }
};


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

function changeLanguage(language, flagUrl) {
    const currentLanguage = document.getElementById('currentLanguage');
    const currentFlag = document.getElementById('currentFlag');

    currentLanguage.textContent = language;
    currentFlag.src = flagUrl;
    document.getElementById('languageDropdown').classList.add('hidden');
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((element) => {
        const key = element.getAttribute("data-i18n");
        element.textContent = pageContent[language][key];
    })
}

const ctx = document.getElementById('salesChart').getContext('2d');

const salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'],
        datasets: [{
            label: '', 
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
            legend: {
                display: false
            },
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


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(link => {
                link.classList.remove('active');
                link.querySelector('.indicator').classList.add('hidden');
            });

            this.classList.add('active');
            this.querySelector('.indicator').classList.remove('hidden');
        });
    });
});
function sidebar() {
    const linksText = document.querySelectorAll(".sidebar span");
    const links = document.querySelectorAll(".sidebar a");
    const sidebar = document.querySelector(".sidebar");
    const img = document.querySelectorAll(".sidebar a img");
    const indicator = document.querySelectorAll(".sidebar .indicator");
    const logo = document.querySelector(".sidebar .logo");

    sidebar.classList.toggle("sidebar-collapsed");
    sidebar.classList.toggle("w-[5%]");
    
    linksText.forEach((link) => {
        link.classList.toggle("hidden");
    });


    img.forEach((image) => {
        image.classList.toggle("sidebar-icon-collapsed");
    });

    indicator.forEach((div) => {
        div.classList.toggle("left-[-20%]");
    });

    logo.classList.toggle("logo-collapsed");

}

function toggleAccountDropdown() {
    document.getElementById('accountDropdown').classList.toggle('hidden');
}