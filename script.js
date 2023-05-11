      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const apiKey = "ZNM9HU-69UEHS-8F976T-4ZIR";
      const url = `${proxyUrl}https://api.n2yo.com/rest/v1/satellite/positions`;

      function getData() {
        const satelliteId = document.getElementById("satelliteId").value;
        const noradId = document.getElementById("noradId").value;
        const latitude = document.getElementById("latitude").value;
        const longitude = document.getElementById("longitude").value;

        let urlParams = "";
        if (noradId) {
          urlParams = `/${noradId}/${latitude}/${longitude}/0/1/&apiKey=${apiKey}`;
        } else {
          urlParams = `/${satelliteId}/${latitude}/${longitude}/0/1/&apiKey=${apiKey}`;
        }

        fetch(url + urlParams)
          .then(response => response.json())
          .then(data => {
            const satPositions = data.positions[0];
            const satName = data.info.satname;
            const satAzimuth = satPositions.azimuth.toFixed(2);
            const satElevation = satPositions.elevation.toFixed(2);
            const satLat = satPositions.satlatitude;
            const satLon = satPositions.satlongitude;
            const satAlt = satPositions.sataltitude;
            const satTimestamp = new Date(satPositions.timestamp * 1000).toLocaleString();

            const output = document.getElementById("output");
            output.innerHTML = `<strong>Satellite Name:</strong> ${satName}<br>
                                <strong>Longitude-Orbital Slot:</strong> ${satLon}&deg;<br>
                                <strong>Latitude-GEO:</strong> ${satLat}&deg;<br>
                                <strong>Azimuth:</strong> ${satAzimuth}&deg;<br>
                                <strong>Elevation:</strong> ${satElevation}&deg;<br>
                                <strong>Altitude:</strong> ${satAlt} km<br>
                                <strong>Timestamp:</strong> ${satTimestamp}<br>
                                <strong>Antenna Location:</strong> ${latitude}, ${longitude}`;
          })
          .catch(error => console.error(error));
      }
