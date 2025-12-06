    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Function to switch the theme
    function toggleTheme() {
        // 'toggle' adds the class if it's absent, removes it if it's present
        body.classList.toggle('light-theme');
        
        // 2. Save the user's preference to Local Storage
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    }

    // 3. Apply saved theme on page load (optional but recommended)
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
        }
    }

    // Load the theme immediately when the script runs
    loadTheme();

    // Attach the event listener to the button
    toggleButton.addEventListener('click', toggleTheme);
