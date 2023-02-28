const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiKey = "ZNM9HU-69UEHS-8F976T-4ZIR";

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
  const satid = document.getElementById("satid").value;
  const lat = document.getElementById("lat").value;
  const lon = document.getElementById("lon").value;

  const apiUrl = `https://api.n2yo.com/rest/v1/satellite/positions/${satid}/${lat}/${lon}/0/1/&apiKey=${apiKey}`;

  fetch(proxyUrl + apiUrl)
    .then(response => response.json())
    .then(data => {
      const positions = data.positions;
      let outputHtml = "<ul>";
      positions.forEach(position => {
        const date = new Date(position.timestamp * 1000);
        outputHtml += `<li>At ${date}, the satellite was at latitude ${position.satlatitude} and longitude ${position.satlongitude}.</li>`;
      });
      outputHtml += "</ul>";
      document.getElementById("output").innerHTML = outputHtml;
    })
    .catch(error => {
      console.error(error);
      document.getElementById("output").innerHTML = "Error fetching data.";
    });
});
