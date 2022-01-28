onload = function() {
    navigate('pages/resume.html');
}

function navigate(path) {
    fetch(path)
    .then(data => data.text())
    .then(html => document.getElementById('contentArea').innerHTML = html);
}