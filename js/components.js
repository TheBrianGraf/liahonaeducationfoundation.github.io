function loadComponent(elementId, componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// Load components when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header', '/components/header.html');
    loadComponent('footer', '/components/footer.html');
}); 