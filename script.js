    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    function toggleTheme() {
        body.classList.toggle('light-theme');
        
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    }
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
        }
    }
    loadTheme();
    toggleButton.addEventListener('click', toggleTheme);
