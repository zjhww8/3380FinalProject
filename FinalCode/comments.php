<!DOCTYPE html>
<html>

<head>
    <title>Computers!</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="./assets/css/comments.css">
    <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
</head>

<body>
    <header id="heading">All About Computers!</header>
    <div id="columnZero">
        <button class="headerButton" onclick="loadPage('Home')">Home</button>
    </div>
    <div id="columnOne">
        <button class="headerButton" onclick="loadPage('Parts')">Parts</button>
    </div>
    <div id="columnTwo">
        <button class="headerButton" onclick="loadPage('Builds')">Builds</button>
    </div>
    <div id="columnThree">
        <button class="headerButton" onclick="loadPage('History')">Feedback</button>
    </div>
    <div id="loadedCommentsBox">
        <center>
            <?php
                include("php/database_creds.php");
                session_start();

                $sql = "SELECT id, username, comment FROM comments";
                $result = $connect->query($sql);

                while($row = $result->fetch_assoc()) {
                    echo "<div class='commentIndex' hidden>".$row["id"]."</div><div class='userCommentBox'>Username: <a class='usernameBox'>" .$row["username"]. "</a><div class='commentTextBox'>".$row["comment"]."</div></div>";
                }
                $connect->close();
            ?>
        </center>
    </div>
    <div id="commentBox">
        <form action="php/create_comment.php" method="post">
            <textarea id="commentBoxInput" type="text" name="comments" required autocomplete="off" placeholder="Add your comments here!"></textarea>
            <center>
                <input id="submitButton1" type="submit" value="Submit">
            </center>
        </form>
    </div>
    <div id="editCommentBox" hidden>
        <form action="php/edit_comment.php" method="post">
            <textarea id="editCommentBoxInput" type="text" name="comments" required autocomplete="off" placeholder="Add your edits here!"></textarea>
            <center>
                <input id="submitButton1" type="submit" value="Edit">
            </center>
        </form>
    </div>
    <img id="clipArtComputerRight" src="assets/Photos/clipartComputer.png" alt="Clipart Computer">
    <img id="clipArtComputerLeft" src="assets/Photos/clipartComputer.png" alt="Clipart Computer">
    <script src="./assets/js/jquery-3.2.1.min.js"></script>
    <script src="./assets/js/theWorks.js"></script>
    <script>

     function readCookie(name) {
        var cookiename = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++)
        {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(cookiename) == 0) return c.substring(cookiename.length,c.length);
        }
        return null;
    }

    function deleteComment(i) {
        document.cookie = "index=" + i;

        var xhr = new XMLHttpRequest()
        xhr.open("POST", "php/delete_comment.php", true)
        xhr.send()

        xhr.onreadystatechange = function() {
            var DONE = 4;
            var ERROR = 200;
            if (xhr.readyState === DONE) {
                if (xhr.status === ERROR) {
                    document.location.reload()
                }
            }
        }
    }

    function editComment(i) {
        document.cookie = "index=" + i;

        console.log(i)

        $('#commentBox').hide()
        $('#editCommentBox').show()
        $('#editCommentBoxInput').val("Put new text here")
    }
    $(document).ready(function() {

        var comment_array = document.getElementsByClassName('usernameBox')
        var index_array = document.getElementsByClassName('commentIndex')
        var comment_text = document.getElementsByClassName('commentTextBox')


        for (var x = 0; x < comment_array.length; x++) {

            if (comment_array[x].innerHTML == "<?php echo $_SESSION["username"]?>") {
                var btn1 = document.createElement("BUTTON");
                var btn2 = document.createElement("BUTTON");

                btn1.innerHTML = "Edit"
                btn1.value = index_array[x].innerHTML
                btn1.className = "editButton"

                btn2.innerHTML = "Delete"
                btn2.value = index_array[x].innerHTML
                btn2.className = "deleteButton"

                comment_array[x].appendChild(btn1)
                comment_array[x].appendChild(btn2)
            }
        }
        $("button").click(function() {
            console.log('test')
            var fired_button = $(this).val();
            if (this.className == "editButton") {
                editComment(fired_button)
            } else if (this.className == "deleteButton") {
                deleteComment(fired_button)
            }
        })
    })
    </script>
</body>

</html>