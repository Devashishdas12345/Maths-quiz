function addUser() {
    if((document.getElementById("player1_name_input").value=="")&&(document.getElementById("player2_name_input").value=="")) {
        document.getElementById("player1_name_input").placeholder="Enter you name";
        document.getElementById("player2_name_input").placeholder="Enter your name";
    }
    else if((document.getElementById("player1_name_input").value=="")) {
        document.getElementById("player1_name_input").placeholder="Enter your name";
    }

    else if((document.getElementById("player2_name_input").value=="")) {
        document.getElementById("player2_name_input").placeholder="Enter your name";
    }
    else{
        var player1_name = document.getElementById("player1_name_input").value;
        var player2_name = document.getElementById("player2_name_input").value;

        localStorage.setItem("Player 1" , player1_name);
        localStorage.setItem("Player 2" , player2_name);
        
        window.location = "jindex.html";
}
        
}