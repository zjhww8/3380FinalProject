function checkSession() {
    var xhr = new XMLHttpRequest()
    xhr.open("POST", "php/check_session.php", true)
    xhr.send()

    xhr.onreadystatechange = function() {
        var DONE = 4;
        var ERROR = 500;
        if (xhr.readyState === DONE) {
            if (xhr.status === ERROR) {
                document.location.href = 'http://18.233.165.90/index.html';
                alert("Please Login or Register an Account");
            }
        }
    }
}

function logoutUser(){
    var xhr = new XMLHttpRequest()
    xhr.open("POST", "php/logout_user.php", true)
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



function loadPage(page) {

    if (page == 'Home') {
        document.location.href = window.location.protocol +"/home.html"
    }

    if (page == 'Parts') {
        document.location.href = window.location.protocol +"/parts.html"
    }

    if (page == 'Builds') {
        document.location.href = window.location.protocol +"/builds.html"
    }

    if (page == 'History') {
        document.location.href = window.location.protocol +"/comments.php"
    }

    var buttons = document.getElementsByClassName('headerButton')
    for (var i = 0; i < 4; i++)
        if (buttons[i].innerHTML == page) {
            buttons[i].id = "selectedButton"
        }
}

$(document).ready(function() {
    $('#cpu').on("click", function() {
        $('#cpuInfo').show('slow');
        $('#cpup1').show('slow');
        $('#cpup2').show('slow');

        //hide below
        $('#cpuCoolerInfo').hide();
        $('#cpuCoolerp1').hide();
        $('#cpuCoolerp2').hide();
        $('#moboInfo').hide();
        $('#mobop1').hide();
        $('#mobop2').hide();
        $('#ramInfo').hide();
        $('#ramp1').hide();
        $('#ramp2').hide();
        $('#storageInfo').hide();
        $('#storagep1').hide();
        $('#storagep2').hide();
        $('#videoInfo').hide();
        $('#videop1').hide();
        $('#videop2').hide();
        $('#caseInfo').hide();
        $('#casep1').hide();
        $('#casep2').hide();
        $('#powerInfo').hide();
        $('#powerp1').hide();
        $('#powerp2').hide();
    });
});

$(document).ready(function() {
    $('#cpuCooler').on("click", function() {
        $('#cpuCoolerInfo').show('slow');
        $('#cpuCoolerp1').show('slow');
        $('#cpuCoolerp2').show('slow');

        //hide below
        $('#cpuInfo').hide();
        $('#cpup1').hide();
        $('#cpup2').hide();
        $('#moboInfo').hide();
        $('#mobop1').hide();
        $('#mobop2').hide();
        $('#ramInfo').hide();
        $('#ramp1').hide();
        $('#ramp2').hide();
        $('#storageInfo').hide();
        $('#storagep1').hide();
        $('#storagep2').hide();
        $('#videoInfo').hide();
        $('#videop1').hide();
        $('#videop2').hide();
        $('#caseInfo').hide();
        $('#casep1').hide();
        $('#casep2').hide();
        $('#powerInfo').hide();
        $('#powerp1').hide();
        $('#powerp2').hide();
    });
});


$(document).ready(function() {
    $('#mobo').on("click", function() {
        $('#moboInfo').show('slow');
        $('#mobop1').show('slow');
        $('#mobop2').show('slow');

        //hide below
        $('#cpuCoolerInfo').hide();
        $('#cpuCoolerp1').hide();
        $('#cpuCoolerp2').hide();
        $('#cpuInfo').hide();
        $('#cpup1').hide();
        $('#cpup2').hide();
        $('#ramInfo').hide();
        $('#ramp1').hide();
        $('#ramp2').hide();
        $('#storageInfo').hide();
        $('#storagep1').hide();
        $('#storagep2').hide();
        $('#videoInfo').hide();
        $('#videop1').hide();
        $('#videop2').hide();
        $('#caseInfo').hide();
        $('#casep1').hide();
        $('#casep2').hide();
        $('#powerInfo').hide();
        $('#powerp1').hide();
        $('#powerp2').hide();

    });
});

$(document).ready(function() {
    $('#ram').on("click", function() {
        $('#ramInfo').show('slow');
        $('#ramp1').show('slow');
        $('#ramp2').show('slow');

        //hide below
        $('#cpuCoolerInfo').hide();
        $('#cpuCoolerp1').hide();
        $('#cpuCoolerp2').hide();
        $('#cpuInfo').hide();
        $('#cpup1').hide();
        $('#cpup2').hide();
        $('#moboInfo').hide();
        $('#mobop1').hide();
        $('#mobop2').hide();
        $('#storageInfo').hide();
        $('#storagep1').hide();
        $('#storagep2').hide();
        $('#videoInfo').hide();
        $('#videop1').hide();
        $('#videop2').hide();
        $('#caseInfo').hide();
        $('#casep1').hide();
        $('#casep2').hide();
        $('#powerInfo').hide();
        $('#powerp1').hide();
        $('#powerp2').hide();
    });
});

$(document).ready(function() {
    $('#storage').on("click", function() {
        $('#storageInfo').show('slow');
        $('#storagep1').show('slow');
        $('#storagep2').show('slow');

        //hide below
        $('#cpuCoolerInfo').hide();
        $('#cpuCoolerp1').hide();
        $('#cpuCoolerp2').hide();
        $('#cpuInfo').hide();
        $('#cpup1').hide();
        $('#cpup2').hide();
        $('#moboInfo').hide();
        $('#mobop1').hide();
        $('#mobop2').hide();
        $('#ramInfo').hide();
        $('#ramp1').hide();
        $('#ramp2').hide();
        $('#videoInfo').hide();
        $('#videop1').hide();
        $('#videop2').hide();
        $('#caseInfo').hide();
        $('#casep1').hide();
        $('#casep2').hide();
        $('#powerInfo').hide();
        $('#powerp1').hide();
        $('#powerp2').hide();
    });
});

$(document).ready(function() {
    $('#gpu').on("click", function() {
        $('#videoInfo').show('slow');
        $('#videop1').show('slow');
        $('#videop2').show('slow');

        //hide below
        $('#cpuCoolerInfo').hide();
        $('#cpuCoolerp1').hide();
        $('#cpuCoolerp2').hide();
        $('#cpuInfo').hide();
        $('#cpup1').hide();
        $('#cpup2').hide();
        $('#moboInfo').hide();
        $('#mobop1').hide();
        $('#mobop2').hide();
        $('#ramInfo').hide();
        $('#ramp1').hide();
        $('#ramp2').hide();
        $('#storageInfo').hide();
        $('#storagep1').hide();
        $('#storagep2').hide();
        $('#caseInfo').hide();
        $('#casep1').hide();
        $('#casep2').hide();
        $('#powerInfo').hide();
        $('#powerp1').hide();
        $('#powerp2').hide();
    });
});

$(document).ready(function() {
    $('#case').on("click", function() {
        $('#caseInfo').show('slow');
        $('#casep1').show('slow');
        $('#casep2').show('slow');

        //hide below
        $('#cpuCoolerInfo').hide();
        $('#cpuCoolerp1').hide();
        $('#cpuCoolerp2').hide();
        $('#cpuInfo').hide();
        $('#cpup1').hide();
        $('#cpup2').hide();
        $('#moboInfo').hide();
        $('#mobop1').hide();
        $('#mobop2').hide();
        $('#ramInfo').hide();
        $('#ramp1').hide();
        $('#ramp2').hide();
        $('#storageInfo').hide();
        $('#storagep1').hide();
        $('#storagep2').hide();
        $('#videoInfo').hide();
        $('#videop1').hide();
        $('#videop2').hide();
        $('#powerInfo').hide();
        $('#powerp1').hide();
        $('#powerp2').hide();
    });
});

$(document).ready(function() {
    $('#psu').on("click", function() {
        $('#powerInfo').show('slow');
        $('#powerp1').show('slow');
        $('#powerp2').show('slow');

        //hide below
        $('#cpuCoolerInfo').hide();
        $('#cpuCoolerp1').hide();
        $('#cpuCoolerp2').hide();
        $('#cpuInfo').hide();
        $('#cpup1').hide();
        $('#cpup2').hide();
        $('#moboInfo').hide();
        $('#mobop1').hide();
        $('#mobop2').hide();
        $('#ramInfo').hide();
        $('#ramp1').hide();
        $('#ramp2').hide();
        $('#storageInfo').hide();
        $('#storagep1').hide();
        $('#storagep2').hide();
        $('#videoInfo').hide();
        $('#videop1').hide();
        $('#videop2').hide();
        $('#caseInfo').hide();
        $('#casep1').hide();
        $('#casep2').hide();
    });
});

// I learned how to do this AJAX request below from: https://www.w3schools.com/xml/tryit.asp?filename=tryajax_first

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("theSwitch").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "pcPartPick.txt", true);
    xhttp.send();
}