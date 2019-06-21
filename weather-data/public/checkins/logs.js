getData();

async function getData() {
    const response = await fetch('/api');
    const data = await response.json();

    for (item of data) {
        const root = document.createElement('p');
        const geo = document.createElement('div');
        const date = document.createElement('div');
        
        geo.textContent = `${item.lat}°, ${item.long}°`;
        
        const dateString = new Date(item.timestamp).toLocaleString();
        date.textContent = `Timestamp: ${dateString}`;

        root.append(date, geo);
        document.body.append(root);
    }
}