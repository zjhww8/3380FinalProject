function checkLogin(){
	var xhr = new XMLHttpRequest()
    xhr.open("POST", "check_session.php", true)
    xhr.send()

    xhr.onreadystatechange = function() {
        var DONE = 4;
        var STATUS = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === STATUS) {
                $(document).ready(function(){
                	$('#loginPageFormBox').hide();
                	$('#loginStatusBox').show();
                })
            }
        }
    }
}

function logoutUser(){
	var xhr = new XMLHttpRequest()
    xhr.open("POST", "logout_user.php", true)
    xhr.send()

    xhr.onreadystatechange = function() {
        var DONE = 4;
        var STATUS = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === STATUS) {
                document.location.href = 'http://18.233.165.90/index.html'
            }
        }
    }
}