// Sample Destinations Data
const destinations = [
    {
        id: 'sagano-bamboo',
        name: 'Sagano Bamboo Grove',
        location: 'Kyoto, Japan',
        category: 'nature',
        description: 'A magical forest of towering bamboo stalks that seem to whisper secrets. The light filters through in emerald streaks, and you can hear the gentle rustling above.',
        experience: 'Peaceful, almost meditative. You feel small but grounded. It\'s like the forest is breathing with you.',
        media: {
            video: 'https://example.com/bamboo.mp4',
            photos: ['🎋', '🌿', '🌱'],
            clip: 'https://example.com/bamboo-clip.mp4'
        },
        tips: ['Go early morning before crowds', 'Wear comfortable shoes for walking', 'Bring a light jacket, it\'s cool in there'],
        rating: 4.8,
        vibe: 'peaceful'
    },
    {
        id: 'louvre-hidden',
        name: 'Secret Stairs of the Louvre',
        location: 'Paris, France',
        category: 'museum',
        description: 'Not everyone knows about these hidden staircases and less-crowded galleries. You can see masterpieces without the tourist hordes.',
        experience: 'Intimate, like discovering art that was meant just for you. Time slows down.',
        media: {
            video: 'https://example.com/louvre.mp4',
            photos: ['🎨', '🖼️', '👑'],
            clip: null
        },
        tips: ['Visit on weekday mornings', 'Skip the Mona Lisa crowds', 'Get a museum map from the info desk'],
        rating: 4.6,
        vibe: 'cultural'
    },
    {
        id: 'tokyo-shibuya-night',
        name: 'Shibuya at 3 AM',
        location: 'Tokyo, Japan',
        category: 'urban',
        description: 'The famous Shibuya crossing when it\'s almost empty. Neon signs reflecting off wet pavement. The city\'s pulse at its quietest.',
        experience: 'Surreal, cyberpunk, like you\'ve stepped into a movie. Quiet power.',
        media: {
            video: 'https://example.com/shibuya.mp4',
            photos: ['🌆', '💡', '🚗'],
            clip: 'https://example.com/shibuya-clip.mp4'
        },
        tips: ['Bring a camera with good night settings', 'Wear warm clothes', 'Walk around, explore the back streets'],
        rating: 4.7,
        vibe: 'adventurous'
    },
    {
        id: 'istanbul-spice-market',
        name: 'Grand Bazaar Spice Market',
        location: 'Istanbul, Turkey',
        category: 'culinary',
        description: 'A sensory explosion. Mountains of spices in every color imaginable. Vendors calling out in Turkish. The smell hits you before you see it.',
        experience: 'Chaotic, vibrant, overwhelming in the best way. You feel alive.',
        media: {
            video: 'https://example.com/spice-market.mp4',
            photos: ['🌶️', '🧂', '🍜'],
            clip: 'https://example.com/spice-clip.mp4'
        },
        tips: ['Go early to avoid crowds', 'Bring cash for vendors', 'Sample everything, haggle playfully'],
        rating: 4.5,
        vibe: 'adventurous'
    },
    {
        id: 'mostar-bridge',
        name: 'Stari Most at Sunset',
        location: 'Mostar, Bosnia',
        category: 'hidden-gem',
        description: 'An Ottoman bridge that\'s seen centuries of history. Watch local divers jump from it at sunset. The stone glows golden.',
        experience: 'Bittersweet, beautiful. You feel connected to history and the present moment at once.',
        media: {
            video: 'https://example.com/mostar.mp4',
            photos: ['🌉', '🌅', '🏊'],
            clip: 'https://example.com/mostar-clip.mp4'
        },
        tips: ['Tip the divers if you watch them jump', 'Watch sunset from the bridge', 'Explore the old town after dark'],
        rating: 4.9,
        vibe: 'scenic'
    },
    {
        id: 'zhangjiajie-morning',
        name: 'Zhangjiajie Mountains at Dawn',
        location: 'Hunan, China',
        category: 'nature',
        description: 'Towering sandstone pillars rising through clouds. You literally stand above the clouds. Inspired Avatar\'s Pandora.',
        experience: 'Otherworldly, humbling. Like you\'ve stepped into another planet.',
        media: {
            video: 'https://example.com/zhangjiajie.mp4',
            photos: ['⛰️', '☁️', '🌄'],
            clip: 'https://example.com/zhangjiajie-clip.mp4'
        },
        tips: ['Stay overnight at mountain lodge', 'Wake up at 4 AM for best light', 'Bring layers, weather changes fast'],
        rating: 4.8,
        vibe: 'scenic'
    },
    {
        id: 'oslo-opera',
        name: 'Oslo Opera House Interior',
        location: 'Oslo, Norway',
        category: 'museum',
        description: 'White marble infinity. You can walk on the roof. The acoustics inside are mind-blowing even when there\'s no performance.',
        experience: 'Grand yet accessible. Modern Nordic elegance.',
        media: {
            video: 'https://example.com/oslo-opera.mp4',
            photos: ['🎭', '⚪', '🎼'],
            clip: null
        },
        tips: ['Free to explore exterior and some interior areas', 'Check for performances if you want music', 'Come at different times of day'],
        rating: 4.7,
        vibe: 'cultural'
    },
    {
        id: 'ubud-rice-terraces',
        name: 'Tegallalang Rice Terraces',
        location: 'Ubud, Bali',
        category: 'nature',
        description: 'Emerald green rice paddies carved into hillsides. Ancient irrigation system still in use. You can hike through them and feel like you\'re walking through paintings.',
        experience: 'Serene, green, grounding. Connected to earth and tradition.',
        media: {
            video: 'https://example.com/ubud.mp4',
            photos: ['🌾', '💚', '🏞️'],
            clip: 'https://example.com/ubud-clip.mp4'
        },
        tips: ['Hike through the terraces early morning', 'Wear good shoes', 'Support local farmers by buying from them'],
        rating: 4.6,
        vibe: 'peaceful'
    }
];

// Utility function to get destinations by category
function getDestinationsByCategory(category) {
    if (category === 'all') return destinations;
    return destinations.filter(d => d.category === category);
}

// Utility function to get random destination
function getRandomDestination() {
    return destinations[Math.floor(Math.random() * destinations.length)];
}

// Utility function to get destination by ID
function getDestinationById(id) {
    return destinations.find(d => d.id === id);
}

// Utility function to add new destination
function addDestination(newDestination) {
    newDestination.id = `custom-${Date.now()}`;
    newDestination.rating = 5; // New destinations start with 5 stars
    destinations.push(newDestination);
    return newDestination;
}
