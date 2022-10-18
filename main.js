let tracker = document.getElementById('tracker');

document.addEventListener('mousemove', function (e) {
    tracker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});


