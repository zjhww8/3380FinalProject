
<!DOCTYPE html>

<html>
    <head>
        <title>Computers!</title>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="comments.css">
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
            <button class="headerButton" onclick="loadPage('Builds')">Build</button>
        </div>
        
        <div id="columnThree">
            <button class="headerButton" onclick="loadPage('History')">Feedback</button>
        </div>
        
        <img id="clipArtComputerRight" src="/Photos/clipartComputer.png" alt="Clipart Computer">
        <img id="clipArtComputerLeft" src="/Photos/clipartComputer.png" alt="Clipart Computer">
        
        <div>    
        <p id="instructionStuff">Thank you for your comments on this website. I will take them into consideration when furthering the development of this application.</p>
        </div>
            <br>
        <div>
        <p id="instructionStuff">If you would like to go back to the home page click <a href="index.html">here</a>.</p>
        </div>
        
        <script src="jquery-3.2.1.min.js"></script>
        <script src="theWorks.js"></script>
    </body>
</html>