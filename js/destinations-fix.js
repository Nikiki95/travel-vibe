// Utility functions

function getDestinationsByCategory(category) {
    if (category === 'all') return destinations;
    return destinations.filter(d => d.category === category);
}

function getRandomDestination() {
    return destinations[Math.floor(Math.random() * destinations.length)];
}

function getDestinationById(id) {
    return destinations.find(d => d.id === id);
}

function addDestination(newDestination) {
    newDestination.id = 'custom-' + Date.now();
    newDestination.rating = 5;
    destinations.push(newDestination);
    return newDestination;
}

console.log('TravelVibe destinations loaded:', destinations.length);
