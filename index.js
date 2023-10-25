// Constructor function for Scooter
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}

// Constructor function for Driver
function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

// Constructor function for PickupLocation
function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}

// Create instances of Scooter, Driver, and PickupLocation
const myScooter = new Scooter(2023, 'Red', 'Vespa');
const myDriver = new Driver('John Doe', 30, '5 years');
const myPickupLocation = new PickupLocation('123 Main St', 'Example City');

// Display objects in the HTML document
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = `
    <div class="card">
        <h2>Scooter</h2>
        <p>Year: ${myScooter.year}</p>
        <p>Color: ${myScooter.color}</p>
        <p>Model: ${myScooter.model}</p>
    </div>

    <div class="card">
        <h2>Driver</h2>
        <p>Name: ${myDriver.name}</p>
        <p>Age: ${myDriver.age}</p>
        <p>Experience: ${myDriver.experience}</p>
    </div>

    <div class="card">
        <h2>Pickup Location</h2>
        <p>Address: ${myPickupLocation.address}</p>
        <p>City: ${myPickupLocation.city}</p>
    </div>
`;
