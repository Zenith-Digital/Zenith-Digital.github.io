document.getElementById('emailLink').addEventListener('click', function(e) {
    e.preventDefault();
    var user = 'hello';
    var domain = 'zenith-digital.co.uk';
    window.location.href = 'mailto:' + user + '@' + domain;
});
