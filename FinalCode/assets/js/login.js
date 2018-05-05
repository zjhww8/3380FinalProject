function checkLogin() {
    var xhr = new XMLHttpRequest()
    xhr.open("POST", "php/check_session.php", true)
    xhr.send()

    xhr.onreadystatechange = function() {
        var DONE = 4;
        var STATUS = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === STATUS) {
                $(document).ready(function() {
                    $('#loginPageFormBox').hide();
                    $('#loginStatusBox').show();
                })
            }
        }
    }
}

function logoutUser() {
    var xhr = new XMLHttpRequest()
    xhr.open("POST", "php/logout_user.php", true)
    xhr.send()

    xhr.onreadystatechange = function() {
        var DONE = 4;
        var STATUS = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === STATUS) {
                // document.location.href = 'http://18.233.165.90'
                document.location.href = 'http://localhost:8000'
            }
        }
    }
}