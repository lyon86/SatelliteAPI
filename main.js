function getSatellite() {
    let satid = document.getElementById("satid").value;
    let apiKey = "ZNM9HU-69UEHS-8F976T-4ZIR";
    let url = "https://api.n2yo.com/rest/v1/satellite/positions/" + satid + "/41.702/-76.014/0/1/&apiKey=" + apiKey;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "<p>Satellite Name: " + data.info.satname + "</p>"
                + "<p>Latitude: " + data.positions[0].satlatitude + "</p>"
                + "<p>Longitude: " + data.positions[0].satlongitude + "</p>"
                + "<p>Altitude: " + data.positions[0].sataltitude + "</p>"
                + "<p>Timestamp: " + data.positions[0].timestamp + "</p>";
        })
        .catch(error => {
            console.error(error);
            let resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "<p>Error fetching satellite data</p>";
        });
}
