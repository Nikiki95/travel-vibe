// Extended destinations - remote regions and hidden gems
// Part 2 of the global database
const extendedDestinations = [
    {
        id: 'atacama-desert',
        name: 'Atacama Desert',
        location: 'Chile',
        category: 'nature',
        description: 'World\'s driest non-polar desert. Valley of the Moon, salt flats, geysers at 4,300m. So dry that some areas have never had rain.',
        experience: 'Lunar, surreal, otherworldly. The landscape defies Earth-logic. Stargazing is unparalleled.',
        coordinates: [-23.0, -68.0],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['El Tatio geysers at sunrise', 'Valley of the Moon hike', 'Stargazing tour is mandatory', 'High altitude - acclimatize'],
        rating: 4.8,
        vibe: 'scenic'
    },
    {
        id: 'iceland-highlands',
        name: 'Iceland Highlands',
        location: 'Iceland',
        category: 'nature',
        description: 'Central Iceland\'s vast, empty plateau. Glaciers, geysers, hot springs, and no roads. Otherworldly Icelandic interior.',
        experience: 'Raw, primal, isolating in the best way. You feel small in the vastness. Weather changes every 15 minutes.',
        coordinates: [65.0, -19.0],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['July-September accessible', 'High-clearance 4WD required', 'Camping or basic huts', 'Bring layered clothing'],
        rating: 4.8,
        vibe: 'adventurous'
    },
    {
        id: 'white-mountains-greece',
        name: 'White Mountains',
        location: 'Crete, Greece',
        category: 'nature',
        description: 'Samaria Gorge trek through 16km of canyon. Dramatic cliffs, ancient villages, Mediterranean sea at the end.',
        experience: 'Exhilarating, ancient, Mediterranean. Each turn reveals new beauty. The gorge echoes with history.',
        coordinates: [35.3167, 24.1167],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['May-June or September best', 'Early start to beat crowds', 'Sturdy hiking boots essential', 'End at Agia Roumeli beach'],
        rating: 4.7,
        vibe: 'adventurous'
    },
    {
        id: 'lençóis-maranhenses',
        name: 'Lençóis Maranhenses',
        location: 'Brazil',
        category: 'nature',
        description: 'National park of white sand dunes and crystal-clear lagoons. Looks like a different planet. Completely unique landscape.',
        experience: 'Surreal, dreamlike, refreshing. Turquoise lagoons contrast with white sand. Like paradise from a painting.',
        coordinates: [-2.4333, -42.8167],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['July-September best time', 'Jeep tours and hiking available', 'Lagoon water is refreshing', 'Remote but increasingly accessible'],
        rating: 4.8,
        vibe: 'peaceful'
    },
    {
        id: 'moraine-lake',
        name: 'Moraine Lake',
        location: 'Canada',
        category: 'nature',
        description: 'Iconic turquoise glacier-fed lake surrounded by peaks. One of Canada\'s most photographed natural sites.',
        experience: 'Breathtaking, serene, crystalline. Water color defies belief. Mountains mirror in perfect stillness.',
        coordinates: [51.3263, -116.1888],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Early morning for turquoise color', 'Hike to Valley of the Ten Peaks', 'Summer season only', 'Canoeing on the lake'],
        rating: 4.8,
        vibe: 'peaceful'
    },
    {
        id: 'zhangye-danxia',
        name: 'Zhangye Danxia',
        location: 'China',
        category: 'nature',
        description: 'Rainbow mountains with layers of red, orange, yellow, and green geological formations. Like no other landscape on Earth.',
        experience: 'Otherworldly, geological marvel, painted by time. Colors shift with light. Earth-as-artist.',
        coordinates: [39.8329, 100.0306],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Sunrise and sunset viewpoints', 'Wear comfortable hiking shoes', 'Respect marked trails', 'Hire local photographer guide'],
        rating: 4.9,
        vibe: 'scenic'
    },
    {
        id: 'salar-de-uyuni',
        name: 'Salar de Uyuni',
        location: 'Bolivia',
        category: 'nature',
        description: 'World\'s largest salt flat. During dry season: white expanse to horizon. During wet season: mirror effect of sky.',
        experience: 'Limitless, surreal, humbling. Horizon dissolves. You feel insignificant and infinite simultaneously.',
        coordinates: [-19.2867, -66.8243],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['December-February for mirror effect', 'June-October for white expanse', '3-4 day jeep tours common', 'Flamingo lakes nearby'],
        rating: 4.9,
        vibe: 'spiritual'
    },
    {
        id: 'aletsch-glacier',
        name: 'Aletsch Glacier',
        location: 'Switzerland',
        category: 'nature',
        description: 'Europe\'s longest glacier. Trekking across ice, alpine huts, and dramatic peaks. Jungfrau region majesty.',
        experience: 'Majestic, timeless, ancient ice under your feet. Peaks soar above. You\'re walking on geology.',
        coordinates: [46.4118, 8.2075],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['August-September best season', 'Glacier trek with guide', 'Stay in mountain huts', 'Bring crampons for ice'],
        rating: 4.8,
        vibe: 'scenic'
    },
    {
        id: 'socotra-island',
        name: 'Socotra Island',
        location: 'Yemen',
        category: 'hidden-gem',
        description: 'Remote island called "the Galapagos of the Indian Ocean." Endemic plants found nowhere else. Alien landscape.',
        experience: 'Isolated, prehistoric, unique. Dragon\'s blood trees dominate. You\'re on another planet.',
        coordinates: [12.5597, 54.0029],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['October-May accessible', 'Ferry from Aden', 'Homestays with Bedouins', 'Security situation variable'],
        rating: 4.8,
        vibe: 'adventurous'
    },
    {
        id: 'cappadocia',
        name: 'Cappadocia',
        location: 'Turkey',
        category: 'cultural',
        description: 'Fairy chimneys (rock formations), underground cities, and ancient cave dwellings. Otherworldly lunar landscape.',
        experience: 'Magical, timeless, carved-from-dreams. Hot air balloons drift over stone towers at dawn.',
        coordinates: [38.7469, 34.5531],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Hot air balloon at sunrise', 'Underground city exploration', 'Hike Love Valley', 'Stay in cave hotel'],
        rating: 4.8,
        vibe: 'spiritual'
    },
    {
        id: 'tongariro-alpine',
        name: 'Tongariro Alpine Crossing',
        location: 'New Zealand',
        category: 'nature',
        description: 'One-day trek across volcanic terrain in New Zealand\'s North Island. Emerald lakes, hot springs, and Lord of the Rings landscape.',
        experience: 'Epic, dramatic, volcanic. You\'re walking over geothermal wonders. Cloud formations are spectacular.',
        coordinates: [-38.7695, 175.2700],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['December-April for access', 'Start early for full day', 'Emerald Lakes are stunning', 'South Crater scramble'],
        rating: 4.8,
        vibe: 'adventurous'
    }
];

// Merge extended destinations with main destinations
const allDestinations = [...destinations, ...extendedDestinations];
