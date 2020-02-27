window.onload = function() {
    var form = document.getElementById("popup");
    var close = document.getElementById("close");
    var btn = document.getElementById("show"); 
    btn.onclick = popup;
    close.onclick = hide; 
    function popup(){
        form.style.display = 'block';
        
    }
    function hide(){
        form.style.display = 'none';
    }

    //setTimeout(popup,3000);

}