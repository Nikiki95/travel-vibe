// TravelVibe Destinations Database
const destinations = [
    {
        id: 'sagano-bamboo',
        name: 'Sagano Bamboo Grove',
        location: 'Kyoto, Japan',
        category: 'nature',
        description: 'A magical forest of towering bamboo stalks that seem to whisper secrets. The light filters through in emerald streaks.',
        experience: 'Peaceful, almost meditative. You feel small but grounded.',
        coordinates: [35.0116, 135.6741],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1522383150241-1bcd39f6b050?w=800&q=80'],
            clip: null
        },
        tips: ['Go early morning before crowds', 'Wear comfortable shoes', 'Bring a light jacket'],
        rating: 4.8,
        vibe: 'peaceful'
    },
    {
        id: 'louvre-hidden',
        name: 'Secret Stairs of the Louvre',
        location: 'Paris, France',
        category: 'museum',
        description: 'Hidden staircases and less-crowded galleries. You can see masterpieces without the tourist hordes.',
        experience: 'Intimate, like discovering art meant just for you.',
        coordinates: [48.8606, 2.3352],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1578500494198-246f612d782b?w=800&q=80'],
            clip: null
        },
        tips: ['Visit on weekday mornings', 'Skip the Mona Lisa crowds', 'Get a museum map'],
        rating: 4.6,
        vibe: 'cultural'
    },
    {
        id: 'tokyo-shibuya-night',
        name: 'Shibuya at 3 AM',
        location: 'Tokyo, Japan',
        category: 'urban',
        description: 'The famous Shibuya crossing when it is almost empty. Neon signs reflecting off wet pavement.',
        experience: 'Surreal, cyberpunk, like you have stepped into a movie.',
        coordinates: [35.6595, 139.7004],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1540959375944-7049f642e9a9?w=800&q=80'],
            clip: null
        },
        tips: ['Bring a camera with night settings', 'Wear warm clothes', 'Walk around back streets'],
        rating: 4.7,
        vibe: 'adventurous'
    },
    {
        id: 'istanbul-spice-market',
        name: 'Grand Bazaar Spice Market',
        location: 'Istanbul, Turkey',
        category: 'culinary',
        description: 'A sensory explosion. Mountains of spices in every color. Vendors calling out.',
        experience: 'Chaotic, vibrant, overwhelming in the best way.',
        coordinates: [41.0082, 28.9789],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1596040596457-3f8e3c2f0e4d?w=800&q=80'],
            clip: null
        },
        tips: ['Go early to avoid crowds', 'Bring cash for vendors', 'Sample everything'],
        rating: 4.5,
        vibe: 'adventurous'
    },
    {
        id: 'mostar-bridge',
        name: 'Stari Most at Sunset',
        location: 'Mostar, Bosnia',
        category: 'hidden-gem',
        description: 'An Ottoman bridge that has seen centuries of history. Watch local divers jump from it at sunset.',
        experience: 'Bittersweet, beautiful. Connected to history.',
        coordinates: [43.2019, 17.8132],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80'],
            clip: null
        },
        tips: ['Tip the divers if you watch', 'Watch sunset from the bridge', 'Explore old town'],
        rating: 4.9,
        vibe: 'scenic'
    },
    {
        id: 'zhangjiajie-morning',
        name: 'Zhangjiajie Mountains at Dawn',
        location: 'Hunan, China',
        category: 'nature',
        description: 'Towering sandstone pillars rising through clouds. Inspired Avatar.',
        experience: 'Otherworldly, humbling. Like another planet.',
        coordinates: [29.3255, 110.4329],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'],
            clip: null
        },
        tips: ['Stay overnight at mountain lodge', 'Wake up at 4 AM', 'Bring layers'],
        rating: 4.8,
        vibe: 'scenic'
    },
    {
        id: 'oslo-opera',
        name: 'Oslo Opera House Interior',
        location: 'Oslo, Norway',
        category: 'museum',
        description: 'White marble infinity. You can walk on the roof.',
        experience: 'Grand yet accessible. Modern Nordic elegance.',
        coordinates: [59.9068, 10.7654],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1495905845957-8d6c77e7b5a0?w=800&q=80'],
            clip: null
        },
        tips: ['Free to explore exterior', 'Check for performances', 'Walk on the marble roof'],
        rating: 4.7,
        vibe: 'cultural'
    },
    {
        id: 'ubud-rice-terraces',
        name: 'Tegallalang Rice Terraces',
        location: 'Ubud, Bali',
        category: 'nature',
        description: 'Emerald green rice paddies carved into hillsides. Ancient irrigation system.',
        experience: 'Serene, green, grounding. Connected to earth.',
        coordinates: [-8.4281, 115.2574],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1537225228614-b4fad34a8b7d?w=800&q=80'],
            clip: null
        },
        tips: ['Hike early morning', 'Wear good shoes', 'Support local farmers'],
        rating: 4.6,
        vibe: 'peaceful'
    }
];

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

console.log('TravelVibe ready with', destinations.length, 'destinations');
