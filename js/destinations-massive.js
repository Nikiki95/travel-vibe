// MASSIVE DESTINATIONS DATABASE - Part 3
// 60+ Additional destinations - FIXED VERSION

const massiveDestinations = [
    {
        id: 'atacama-desert',
        name: 'Atacama Desert',
        location: 'Chile',
        category: 'nature',
        description: 'Worlds driest non-polar desert. Valley of the Moon, salt flats, geysers at 4,300m.',
        experience: 'Lunar, surreal, otherworldly.',
        coordinates: [-23.0, -68.0],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'],
            clip: null
        },
        tips: ['El Tatio geysers at sunrise', 'Valley of the Moon hike', 'Stargazing tour'],
        rating: 4.8,
        vibe: 'scenic'
    },
    {
        id: 'iceland-highlands',
        name: 'Iceland Highlands',
        location: 'Iceland',
        category: 'nature',
        description: 'Central Iceland vast empty plateau. Glaciers, geysers, hot springs.',
        experience: 'Raw, primal, isolating in the best way.',
        coordinates: [65.0, -19.0],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'],
            clip: null
        },
        tips: ['July-September accessible', 'High-clearance 4WD required', 'Camping'],
        rating: 4.8,
        vibe: 'adventurous'
    },
    {
        id: 'white-mountains',
        name: 'White Mountains',
        location: 'Crete, Greece',
        category: 'nature',
        description: 'Samaria Gorge trek through 16km of canyon.',
        experience: 'Exhilarating, ancient, Mediterranean.',
        coordinates: [35.3167, 24.1167],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'],
            clip: null
        },
        tips: ['May-June or September best', 'Early start', 'Sturdy hiking boots'],
        rating: 4.7,
        vibe: 'adventurous'
    },
    {
        id: 'lencois-maranhenses',
        name: 'Lencois Maranhenses',
        location: 'Brazil',
        category: 'nature',
        description: 'National park of white sand dunes and crystal-clear lagoons.',
        experience: 'Surreal, dreamlike, refreshing.',
        coordinates: [-2.4333, -42.8167],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'],
            clip: null
        },
        tips: ['July-September best time', 'Jeep tours', 'Lagoon water is refreshing'],
        rating: 4.8,
        vibe: 'peaceful'
    },
    {
        id: 'moraine-lake',
        name: 'Moraine Lake',
        location: 'Canada',
        category: 'nature',
        description: 'Iconic turquoise glacier-fed lake surrounded by peaks.',
        experience: 'Breathtaking, serene, crystalline.',
        coordinates: [51.3263, -116.1888],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'],
            clip: null
        },
        tips: ['Early morning for turquoise color', 'Hike Valley of the Ten Peaks', 'Summer only'],
        rating: 4.8,
        vibe: 'peaceful'
    },
    {
        id: 'zhangye-danxia',
        name: 'Zhangye Danxia',
        location: 'China',
        category: 'nature',
        description: 'Rainbow mountains with layers of geological formations.',
        experience: 'Otherworldly, geological marvel.',
        coordinates: [39.8329, 100.0306],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'],
            clip: null
        },
        tips: ['Sunrise and sunset viewpoints', 'Wear comfortable shoes', 'Respect trails'],
        rating: 4.9,
        vibe: 'scenic'
    },
    {
        id: 'salar-de-uyuni',
        name: 'Salar de Uyuni',
        location: 'Bolivia',
        category: 'nature',
        description: 'Worlds largest salt flat. During wet season mirror effect.',
        experience: 'Limitless, surreal, humbling.',
        coordinates: [-19.2867, -66.8243],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'],
            clip: null
        },
        tips: ['December-February for mirror', 'Jeep tours', 'Flamingo lakes'],
        rating: 4.9,
        vibe: 'spiritual'
    },
    {
        id: 'aletsch-glacier',
        name: 'Aletsch Glacier',
        location: 'Switzerland',
        category: 'nature',
        description: 'Europes longest glacier. Trekking across ice.',
        experience: 'Majestic, timeless, ancient ice.',
        coordinates: [46.4118, 8.2075],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'],
            clip: null
        },
        tips: ['August-September best season', 'Glacier trek with guide', 'Stay in huts'],
        rating: 4.8,
        vibe: 'scenic'
    },
    {
        id: 'socotra-island',
        name: 'Socotra Island',
        location: 'Yemen',
        category: 'hidden-gem',
        description: 'Remote island called the Galapagos of Indian Ocean.',
        experience: 'Isolated, prehistoric, unique.',
        coordinates: [12.5597, 54.0029],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'],
            clip: null
        },
        tips: ['October-May accessible', 'Ferry from Aden', 'Homestays with Bedouins'],
        rating: 4.8,
        vibe: 'adventurous'
    },
    {
        id: 'cappadocia',
        name: 'Cappadocia',
        location: 'Turkey',
        category: 'cultural',
        description: 'Fairy chimneys, underground cities, ancient cave dwellings.',
        experience: 'Magical, timeless, carved-from-dreams.',
        coordinates: [38.7469, 34.5531],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'],
            clip: null
        },
        tips: ['Hot air balloon at sunrise', 'Underground city exploration', 'Stay in cave hotel'],
        rating: 4.8,
        vibe: 'spiritual'
    },
    {
        id: 'tongariro-alpine',
        name: 'Tongariro Alpine Crossing',
        location: 'New Zealand',
        category: 'nature',
        description: 'One-day trek across volcanic terrain. Emerald lakes, hot springs.',
        experience: 'Epic, dramatic, volcanic.',
        coordinates: [-38.7695, 175.2700],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'],
            clip: null
        },
        tips: ['December-April for access', 'Start early', 'Emerald Lakes stunning'],
        rating: 4.8,
        vibe: 'adventurous'
    },
    {
        id: 'costa-rica-rainforest',
        name: 'Costa Rica Osa Peninsula',
        location: 'Costa Rica',
        category: 'nature',
        description: 'Primary rainforest, macaws, jaguars. Corcovado National Park.',
        experience: 'Wild, verdant, alive. Jungle symphony 24/7.',
        coordinates: [8.3333, -83.6667],
        media: {
            video: null,
            photos: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'],
            clip: null
        },
        tips: ['Book guided jungle tours', 'Bring binoculars', 'Respect wildlife'],
        rating: 4.8,
        vibe: 'adventurous'
    }
];
