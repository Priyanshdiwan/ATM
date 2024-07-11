document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downloadBtn').addEventListener('click', function() {
        // Add download functionality here
        alert('Downloading JAVA Application...');
    });

    document.getElementById('aboutBtn').addEventListener('click', function() {
        var aboutSection = document.querySelector('.about-section');
        aboutSection.style.display = aboutSection.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('sourceBtn').addEventListener('click', function() {
        window.open('https://github.com/Priyanshdiwan/ATM_managment_system');
    });

    document.getElementById('contactBtn').addEventListener('click', function() {
        window.location.href = 'mailto:priyanshdiwan2@gmail.com';
    });
});