function uploadPic() {
    document.getElementById("hint").setAttribute("hidden",true);
    var file = document.getElementById("picName").files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
        document.getElementById("upPicture").setAttribute("src",reader.result);
    }
}

function submit() {
    alert("Upload successfully!");
    window.location.href = "My photo.html";
}