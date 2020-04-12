function search() {
    alert("Your search done!");
}

function selectcity(){
    var select = document.getElementById("selectCountry");
    var value = select.value;
    var city = document.getElementById("selectCity");
    switch (value) {
        case "china":
            city.innerHTML = "<option>Shanghai</option><option>Kunming</option><option>Beijing</option><option>Yantai</option>";
            break;
        case "japan":
            city.innerHTML = "<option>Tokyo</option><option>Osaka</option><option>Kamakura</option>";
            break;
        case "italy":
            city.innerHTML = "<option>Roma</option><option>Milan</option><option>Venice</option><option>Florence</option>";
            break;
        case "america":
            city.innerHTML = "<option>New York</option><option>San Francisco</option><option>Washington</option>";
            break;
    }
}

function filter(){
    alert("Already filtered!");
}
