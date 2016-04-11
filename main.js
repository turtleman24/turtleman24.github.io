var selectedImage=0;
function switchpicture() {
    var images = ["url(http://ultimatewalrus.com/turtles/img2/o-TURTLE-facebook.jpg)",
                  "url('0_CATAWBA_Turtle_p.jpg')"];
    var tag=document.getElementById("switch");
    selectedImage = (selectedImage+1) % 2;
    tag.style.backgroundImage=images[selectedImage];
    var button=document.getElementById("switchtext");
    if (selectedImage==0) {
        button.innerHTML="like them";
    } else {
        alert('See, it\'s easy!.  Good job!');
        button.innerHTML="click again";
    }
}