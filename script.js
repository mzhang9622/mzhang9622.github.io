// Hover over button
window.onload = function () {
    // Skill button
    document.getElementById('skillButton').addEventListener('mouseover', function() {
        this.style.backgroundColor = '#fe34b5';
    });
    document.getElementById('skillButton').addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Reset to original background color
    });

    // Project button
    document.getElementById('projectButton').addEventListener('mouseover', function() {
        this.style.backgroundColor = '#fe34b5';
    });
    document.getElementById('projectButton').addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Reset to original background color
    });

    // Experience Button
    document.getElementById('experienceButton').addEventListener('mouseover', function() {
        this.style.backgroundColor = '#fe34b5';
    });
    document.getElementById('experienceButton').addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Reset to original background color
    });

    // Contact Button
    document.getElementById('contactButton').addEventListener('mouseover', function() {
        this.style.backgroundColor = '#fe34b5';
    });
    document.getElementById('contactButton').addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Reset to original background color
    });

    document.getElementById('submitButton').addEventListener('mouseover', function() {
        this.style.backgroundColor = '#0190cd';
    });

    document.getElementById('submitButton').addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });

    // EXTENSION: THEME-TOGGLE BUTTON
    let darkModeEnabled = false;

    const darkModeButton = document.getElementById('darkModeButton');

    // Toggles between light and dark mode with conditionals.
    // Button click will change darkModeEnabled to true or false
    darkModeButton.addEventListener('click', () => {
        darkModeEnabled = !darkModeEnabled;

        if (darkModeEnabled) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
    }

    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode');
    }

}

