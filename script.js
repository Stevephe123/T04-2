// Simple JavaScript for Power Smart Australia

// Function to go home when logo is clicked
function goHome() {
    window.location.href = 'index.html';
}

// Function to select table rows (for TV comparison)
function selectRow(row) {
    // Remove selection from all rows
    var allRows = document.querySelectorAll('.simple-table tr');
    for (var i = 0; i < allRows.length; i++) {
        allRows[i].classList.remove('selected');
    }

    // Add selection to clicked row
    row.classList.add('selected');

    // Get power consumption from the clicked row
    var powerCell = row.cells[2]; // Power is in 3rd column
    if (powerCell) {
        var powerText = powerCell.textContent;
        var powerNumber = powerText.replace(' watts', '');

        // Fill in the calculator if it exists
        var powerInput = document.getElementById('tv-watts');
        if (powerInput) {
            powerInput.value = powerNumber;
        }
    }
}

// Simple calculator function
function calculateCost() {
    // Get input values
    var watts = document.getElementById('tv-watts').value;
    var hours = document.getElementById('daily-hours').value;

    // Check if values are entered
    if (!watts || !hours) {
        alert('Please enter both TV watts and daily hours');
        return;
    }

    // Check if values are reasonable
    if (watts < 1 || watts > 1000) {
        alert('TV watts should be between 1 and 1000');
        return;
    }

    if (hours < 0.1 || hours > 24) {
        alert('Daily hours should be between 0.1 and 24');
        return;
    }

    // Calculate yearly cost
    // Formula: (watts / 1000) * hours per day * 365 days * $0.28 per kWh
    var dailyKWh = (watts / 1000) * hours;
    var yearlyKWh = dailyKWh * 365;
    var yearlyCost = yearlyKWh * 0.28; // 28 cents per kWh average in Australia

    // Round to 2 decimal places
    yearlyCost = Math.round(yearlyCost * 100) / 100;

    // Show the result
    document.getElementById('yearly-cost').textContent = '$' + yearlyCost;
    document.getElementById('result').style.display = 'block';

    // Scroll to result
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}

// Set up page when it loads
document.addEventListener('DOMContentLoaded', function () {
    // Set active navigation link
    setActiveNav();

    // Add hover effects to navigation
    addNavHoverEffects();

    console.log('Power Smart Australia website loaded!');
});

// Function to set active navigation based on current page
function setActiveNav() {
    // Get current page name
    var currentPage = window.location.pathname.split('/').pop();
    if (!currentPage) currentPage = 'index.html';

    // Get all navigation links
    var navLinks = document.querySelectorAll('.nav-link');

    // Remove active class from all links
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }

    // Add active class to current page
    for (var i = 0; i < navLinks.length; i++) {
        var href = navLinks[i].getAttribute('href');
        if (href === currentPage) {
            navLinks[i].classList.add('active');
        }
    }
}

// Add hover effects to navigation
function addNavHoverEffects() {
    var navLinks = document.querySelectorAll('.nav-link');

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('mouseenter', function () {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            }
        });

        navLinks[i].addEventListener('mouseleave', function () {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = '';
            }
        });
    }
}

// Simple function to show an element
function showElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'block';
    }
}

// Simple function to hide an element
function hideElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'none';
    }
}

console.log('Power Smart Australia JavaScript loaded successfully!');