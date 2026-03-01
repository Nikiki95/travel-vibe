// TravelVibe Destinations Database
// Sources: Unsplash (free photos), Wikidata (coordinates), Wikipedia (descriptions)
// Focus: Remote regions, hidden gems, authentic experiences

const destinations = [
    // ===== ZENTRALASIEN =====
    {
        id: 'pamir-highway',
        name: 'Pamir Highway',
        location: 'Tadschikistan',
        category: 'nature',
        description: 'One of the world\'s highest mountain highways, crossing the Pamir Mountains at altitudes over 4,600m. Dramatic passes, remote villages, and breath-taking vistas.',
        experience: 'Raw, untamed, utterly remote. You feel like you\'re driving at the edge of the world. The silence is profound.',
        coordinates: [37.0, 72.0],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Only passable June-September', 'Bring spare fuel and food', 'High altitude sickness common', 'Camp under stars'],
        rating: 4.9,
        vibe: 'adventurous'
    },
    {
        id: 'song-kul-lake',
        name: 'Song-Kul Alpine Lake',
        location: 'Kyrgyzstan',
        category: 'nature',
        description: 'A pristine alpine lake at 3,016m surrounded by nomadic pastures. Yurts dot the shores. Nomadic herders still live seasonally here.',
        experience: 'Serene, almost timeless. Like stepping into another era. The vastness humbles you.',
        coordinates: [42.4539, 77.1700],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Stay in yurts with locals', 'Best July-August', 'Horses for exploring', 'Bring warm clothes'],
        rating: 4.8,
        vibe: 'peaceful'
    },
    {
        id: 'alay-valley',
        name: 'Alay Valley',
        location: 'Tajikistan',
        category: 'nature',
        description: 'Hidden valley with dramatic peaks, traditional apricot orchards, and virtually no tourists. Ancient Silk Road routes pass through here.',
        experience: 'Isolated, authentic, deeply cultural. You\'re walking where traders walked 1000 years ago.',
        coordinates: [36.8167, 71.5000],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Hire local guides', 'Visit during harvest (August)', 'Learn basic Tajik greetings', 'Support local artisans'],
        rating: 4.7,
        vibe: 'cultural'
    },

    // ===== PAZIFIK & OZEANIEN =====
    {
        id: 'vanuatu-volcano',
        name: 'Yasur Volcano',
        location: 'Vanuatu',
        category: 'nature',
        description: 'An active volcano you can hike to at sunset and watch the lava lake bubbling. One of the most accessible active volcanoes on Earth.',
        experience: 'Primal, elemental, alive. Standing on the crater rim, you feel the Earth\'s power directly.',
        coordinates: [-19.5238, 169.4417],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Visit after sunset for best lava glow', 'Wear sturdy boots', 'Bring a headlamp', 'Local guides essential'],
        rating: 4.9,
        vibe: 'adventurous'
    },
    {
        id: 'solomon-islands-pristine',
        name: 'Iron Bottom Sound',
        location: 'Solomon Islands',
        category: 'hidden-gem',
        description: 'Remote jungle-clad islands with WWII wrecks underwater and in the jungle. Zero tourist infrastructure, pure adventure.',
        experience: 'Haunting, wild, disconnected. History is literally around you. Nature\'s slow reclamation is stunning.',
        coordinates: [-9.0765, 160.2180],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Malaria pills essential', 'Bring your own supplies', 'Hire local guides', 'Respect customs'],
        rating: 4.6,
        vibe: 'adventurous'
    },

    // ===== SÜDAMERIKA =====
    {
        id: 'mustang-nepal',
        name: 'Mustang Region',
        location: 'Nepal',
        category: 'hidden-gem',
        description: 'Upper Mustang: a Himalayan kingdom largely unchanged for centuries. Forbidden to tourists until 1992, still requires permits.',
        experience: 'Otherworldly, spiritual. Ancient monasteries, red cliffs, and silence. You\'re in a lost world.',
        coordinates: [29.1333, 84.4000],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Permit required ($500+ USD)', 'Only June-September accessible', 'High altitude trek', 'Local guide mandatory'],
        rating: 4.8,
        vibe: 'spiritual'
    },
    {
        id: 'torres-del-paine',
        name: 'Torres del Paine',
        location: 'Chile',
        category: 'nature',
        description: 'Patagonian peaks so dramatic they seem unreal. Granite towers, turquoise lakes, and wild weather. One of Earth\'s most stunning landscapes.',
        experience: 'Majestic, raw, humbling. The landscape dominates. You\'re just a small witness to geological grandeur.',
        coordinates: [-51.0000, -72.8667],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['December-February best season', 'W Trek is classic route', 'Prepare for sudden weather changes', 'Camp or stay in refugios'],
        rating: 4.9,
        vibe: 'scenic'
    },
    {
        id: 'el-chalten',
        name: 'El Chaltén',
        location: 'Argentina',
        category: 'nature',
        description: 'Trekking capital of Patagonia. Granite peaks, turquoise rivers, and unmarked trails. Smaller and wilder than its neighbor.',
        experience: 'Energetic, beautiful, accessible adventure. Mountains wrap around you everywhere.',
        coordinates: [-49.3334, -72.8834],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Summer (Dec-Feb) for best weather', 'Hike to Laguna de los Tres Picos', 'Climbers come for technical routes', 'Basic hostel accommodation'],
        rating: 4.7,
        vibe: 'adventurous'
    },

    // ===== SAHARA & SAHEL =====
    {
        id: 'tadrart-acacus',
        name: 'Tadrart Acacus',
        location: 'Libya',
        category: 'nature',
        description: 'A painted desert landscape with multi-colored rock formations, ancient cave art, and pre-Saharan history. Virtually unvisited.',
        experience: 'Ancient, mystical, isolated. Rock formations glow at sunset. Petroglyphs whisper of past civilizations.',
        coordinates: [26.8, 10.5],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Currently restricted due to security', 'Requires permits and guides', 'Pre-Islamic petroglyphs to see', 'Extreme desert conditions'],
        rating: 4.9,
        vibe: 'spiritual'
    },
    {
        id: 'djenne-mali',
        name: 'Djenné',
        location: 'Mali',
        category: 'cultural',
        description: 'Ancient trading city on an island, frozen in time. The Great Mosque is the world\'s largest mud-brick building. No tourists, just authenticity.',
        experience: 'Timeless, deeply African, spiritually resonant. You\'re stepping into medieval Africa that still exists.',
        coordinates: [13.9064, -4.0328],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Visit Monday for the market', 'Respect prayer times', 'Learn basic French/Bambara', 'Security concerns - check before'],
        rating: 4.8,
        vibe: 'cultural'
    },

    // ===== SIBIRIEN =====
    {
        id: 'kamchatka-peninsula',
        name: 'Kamchatka Peninsula',
        location: 'Russia',
        category: 'nature',
        description: 'Remote volcanic peninsula with brown bears, geysers, salmon rivers, and vast wilderness. One of Earth\'s last true wild places.',
        experience: 'Pristine, powerful, primal. You\'re in a place where nature dominates completely.',
        coordinates: [56.0, 158.0],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['July-September only accessible', 'Helicopter tours common', 'Watch bears safely from platforms', 'Expensive but once-in-lifetime'],
        rating: 4.9,
        vibe: 'adventurous'
    },
    {
        id: 'lake-baikal',
        name: 'Lake Baikal',
        location: 'Russia',
        category: 'nature',
        description: 'World\'s deepest and oldest freshwater lake. Vast, crystalline waters. Trans-Siberian Railway passes nearby for epic journey.',
        experience: 'Meditative, expansive, cold in the best way. The silence is almost tangible.',
        coordinates: [53.0, 104.0],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Winter: ice hike the frozen lake', 'Summer: kayaking and fishing', 'Stay in Listvyanka village', 'Train journey is the experience'],
        rating: 4.8,
        vibe: 'peaceful'
    },

    // ===== AUSTRALIEN =====
    {
        id: 'kimberley-region',
        name: 'Kimberley Region',
        location: 'Australia',
        category: 'nature',
        description: 'Remote red-rock wilderness with Aboriginal heritage sites, hidden waterfalls, and pristine beaches. True Outback adventure.',
        experience: 'Ancient, vast, Indigenous-spirited. You\'re walking on country that\'s been cared for for 65,000 years.',
        coordinates: [-17.3, 127.0],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['April-September (dry season)', 'High-clearance 4WD recommended', 'Respect Aboriginal sacred sites', 'Bring plenty of water'],
        rating: 4.8,
        vibe: 'adventurous'
    },
    {
        id: 'uluru-kata-tjuta',
        name: 'Uluru & Kata Tjuta',
        location: 'Australia',
        category: 'spiritual',
        description: 'Sacred Aboriginal site. Massive red monolith Uluru and the 36 domes of Kata Tjuta. Desert landscapes that shift color with light.',
        experience: 'Spiritual, grounding, ancient. You feel the land\'s presence. Sunrises and sunsets are transcendent.',
        coordinates: [-25.3409, 131.0369],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Don\'t climb Uluru (sacred)', 'Walk around it instead (10km)', 'Kata Tjuta Valley Walk recommended', 'Visit at sunset for colors'],
        rating: 4.7,
        vibe: 'spiritual'
    },

    // ===== HIMALAYA =====
    {
        id: 'ladakh-region',
        name: 'Ladakh Region',
        location: 'India',
        category: 'nature',
        description: 'High desert plateau at 3,500m+. Ancient Buddhist monasteries, high passes, moonscapes, and Ladakh\'s unique culture.',
        experience: 'Stark, spiritual, breathtaking. The landscape is geometric perfection. Thin air, clear thoughts.',
        coordinates: [34.0, 77.0],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['June-September accessible', 'Acclimatize in Leh first', 'Motorbike tours popular', 'Homestays with locals'],
        rating: 4.8,
        vibe: 'spiritual'
    },
    {
        id: 'bhutan-kingdom',
        name: 'Bhutan',
        location: 'Bhutan',
        category: 'cultural',
        description: 'The last Himalayan kingdom. Only tourists with guides allowed. Pristine valleys, tiger monasteries, and "Gross National Happiness" philosophy.',
        experience: 'Magical, preserved, intentionally slow. You\'re in a place that chose NOT to modernize. Spiritual and profound.',
        coordinates: [27.5142, 90.4336],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Book through licensed tour operator', 'March-May and September-November best', 'Paro Taktsang (Tiger\'s Nest) is hike highlight', 'Photography permits needed'],
        rating: 4.9,
        vibe: 'spiritual'
    },

    // ===== AFRIKKAS NEUE DESTINATIONEN =====
    {
        id: 'gorilla-forest',
        name: 'Volcanoes National Park',
        location: 'Rwanda',
        category: 'nature',
        description: 'Track mountain gorillas in their native habitat. Rainforests, volcanic peaks, and one of Africa\'s most moving experiences.',
        experience: 'Humbling, emotional, connected. Looking into a gorilla\'s eyes changes you.',
        coordinates: [-1.9536, 29.5853],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Permits $1500 (expensive but worth it)', 'Only 8 visitors per gorilla group daily', 'Physical hike in steep terrain', 'Rainy season makes it misty and magical'],
        rating: 4.9,
        vibe: 'spiritual'
    },
    {
        id: 'sossusvlei-namibia',
        name: 'Sossusvlei',
        location: 'Namibia',
        category: 'nature',
        description: 'The highest sand dunes on Earth (up to 300m). Salt pan surrounded by crimson dunes. Stark, otherworldly landscape.',
        experience: 'Desert sublime. Walking on alien terrain. Dunes sing in the wind. Sunrises are surreal.',
        coordinates: [-24.7625, 15.7639],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Arrive at sunrise (4:30am)', 'Climb Dune 45 for iconic view', 'Dead Vlei is otherworldly', 'Bring tons of water'],
        rating: 4.8,
        vibe: 'scenic'
    },

    // ===== ISLAND COMMUNITIES =====
    {
        id: 'palau-islands',
        name: 'Palau',
        location: 'Palau',
        category: 'nature',
        description: 'Micronesian island nation with jellyfish lakes, pristine reefs, and rock islands. One of the world\'s biodiversity hotspots.',
        experience: 'Paradise preserved. Snorkeling with millions of jellyfish (non-stinging). Island-hopping adventure.',
        coordinates: [7.3150, 134.4807],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Jellyfish Lake visit is surreal', 'Rock Islands boat tour essential', 'Pristine diving and snorkeling', 'Small island, can be touristy'],
        rating: 4.7,
        vibe: 'adventurous'
    },
    {
        id: 'faroe-islands',
        name: 'Faroe Islands',
        location: 'Faroe Islands',
        category: 'nature',
        description: 'Nordic islands with dramatic cliffs, villages perched on mountainsides, and moody weather. Like stepping into a fairy tale.',
        experience: 'Moody, majestic, utterly beautiful. Cliffs soar from dark waters. Light is golden and fleeting.',
        coordinates: [62.0079, -6.7669],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Summer for best weather', 'Hiking between villages', 'Photography Paradise', 'Expensive, but worth it'],
        rating: 4.8,
        vibe: 'scenic'
    },

    // ===== ASIATISCHE VERBORGENHEITEN =====
    {
        id: 'bagan-myanmar',
        name: 'Bagan',
        location: 'Myanmar',
        category: 'cultural',
        description: '2,000+ Buddhist temples rising from plains. Hot air balloon rides at sunrise. A spiritual landscape unlike anywhere else.',
        experience: 'Mystical, vast, devotional. Hot air balloons float above pagodas at dawn. Time seems to bend here.',
        coordinates: [21.1717, 94.8585],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['November-February best season', 'Hot air balloon at sunrise is must', 'Rent e-bike to explore temples', 'Local guides share stories'],
        rating: 4.8,
        vibe: 'spiritual'
    },
    {
        id: 'ha-long-bay',
        name: 'Halong Bay',
        location: 'Vietnam',
        category: 'nature',
        description: 'UNESCO site with limestone karsts rising from emerald waters. Stay on junks, explore hidden lagoons and caves.',
        experience: 'Dreamlike, ethereal, magical. Mist clings to rocks. You\'re in a landscape from Chinese paintings.',
        coordinates: [20.8552, 107.1889],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Book small junk (not tourist cruises)', 'Kayak to hidden lagoons', 'Overnight on water is magical', 'Avoid Chinese national holidays'],
        rating: 4.7,
        vibe: 'peaceful'
    },

    // ===== ISLAND OF THE SOUTHERN OCEAN =====
    {
        id: 'south-georgia',
        name: 'South Georgia',
        location: 'South Georgia & South Sandwich Islands',
        category: 'nature',
        description: 'Sub-Antarctic island with glaciers, millions of penguin/seal colonies, and mountains rising from the sea. Accessible only by ship.',
        experience: 'Pristine, primal, polar. Wildlife abundance is staggering. You\'re truly at the edge of civilization.',
        coordinates: [-54.2008, -36.5092],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['December-February only accessible', 'Multi-week cruise only way', 'Bring heavy expedition gear', 'One of Earth\'s last true wildernesses'],
        rating: 4.9,
        vibe: 'adventurous'
    },

    // ===== EUROPE HIDDEN GEMS =====
    {
        id: 'plitvice-lakes',
        name: 'Plitvice Lakes',
        location: 'Croatia',
        category: 'nature',
        description: 'Cascading lakes and waterfalls in a national park. 16 interconnected lakes at different elevations. Boardwalk through paradise.',
        experience: 'Refreshing, verdant, peaceful. Water, light, and forest in perfect harmony.',
        coordinates: [44.8654, 15.5820],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Spring for best water flow', 'Hike upper and lower lakes', 'Avoid peak summer crowds', 'Thermal cameras for night hikes'],
        rating