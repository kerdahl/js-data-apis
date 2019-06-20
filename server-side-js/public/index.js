function submitLocation() {
    if ('geolocation' in navigator) {
        console.log('Geolocation available');
        navigator.geolocation.getCurrentPosition(async position => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            document.getElementById('latitude').textContent = lat;
            document.getElementById('longitude').textContent = long;
            const mood = document.getElementById('mood').value;

            const data = { lat, long, mood };
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            const response = await fetch('/api', options);
            const responseJson = await response.json();
            console.log(responseJson);
        });
    }
    else {
        const msg = 'Geolocation unavailable';
        document.getElementById("latitude").textContent = msg;
        document.getElementById("longitude").textContent = msg;
    }
}

document.getElementById('button').addEventListener('click', submitLocation)