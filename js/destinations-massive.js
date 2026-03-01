// MASSIVE DESTINATIONS DATABASE - Part 3
// 60+ Additional remote & hidden gems from every continent
// Total app reaches 100+ destinations

const massiveDestinations = [
    // ===== EUROPA - Versteckte Schätze =====
    {
        id: 'lofoten-islands',
        name: 'Lofoten Islands',
        location: 'Norway',
        category: 'nature',
        description: 'Dramatic jagged peaks rising straight from the Arctic Ocean. Fishing villages, northern lights in winter, midnight sun in summer. Raw Nordic beauty.',
        experience: 'Majestic, wild, almost alien. Mountains pierce the sky. You feel the edge of the world.',
        coordinates: [68.3, 14.5],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['September-November for northern lights', 'Kayak between peaks', 'Fresh seafood in villages', 'Midnight sun June-July'],
        rating: 4.9,
        vibe: 'scenic'
    },
    {
        id: 'meteora-greece',
        name: 'Meteora',
        location: 'Greece',
        category: 'spiritual',
        description: 'Ancient monasteries perched atop natural rock pillars. Monks climbed nets to reach them centuries ago. Spiritual energy palpable.',
        experience: 'Transcendent, ancient, utterly unique. You\'re floating above the world in meditation.',
        coordinates: [39.7133, 21.6294],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Hike between monasteries', 'Stay overnight in village', 'Sunset views are cosmic', 'Respect monk schedules'],
        rating: 4.8,
        vibe: 'spiritual'
    },
    {
        id: 'transylvania-carpathians',
        name: 'Carpathian Mountains',
        location: 'Romania',
        category: 'nature',
        description: 'Medieval villages, bear-filled forests, ancient traditions. The Carpathians are Europe\'s last true wilderness. Dracula\'s castle nearby.',
        experience: 'Primal, mystical, old-world European. You\'re in a place where traditions still rule.',
        coordinates: [45.5, 24.5],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Hike with local guides (bear safety)', 'Stay in traditional villages', 'Visit Brașov medieval town', 'June-September best'],
        rating: 4.7,
        vibe: 'adventurous'
    },
    {
        id: 'plitvice-lakes-croatia',
        name: 'Plitvice Lakes National Park',
        location: 'Croatia',
        category: 'nature',
        description: '16 cascading lakes connected by 90 waterfalls. Pristine forest, boardwalks over turquoise water. Paradise.',
        experience: 'Refreshing, verdant, peaceful. Water flows through limestone creating infinite layers of blue.',
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
        tips: ['Spring for water flow', 'Walk lower + upper lakes', 'Avoid peak summer', 'Boat rides between lakes'],
        rating: 4.7,
        vibe: 'peaceful'
    },
    {
        id: 'scottish-highlands',
        name: 'Scottish Highlands',
        location: 'Scotland',
        category: 'nature',
        description: 'Moody mountains, wild glens, ancient castles. Glen Coe is dramatic, lochs are mysterious. Whisky distilleries nearby.',
        experience: 'Rugged, romantic, moody. Mist clings to peaks. You feel the ancient clan history.',
        coordinates: [56.8, -4.7],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['September for best weather', 'Climb Ben Nevis (UK\'s highest)', 'Visit Scottish distilleries', 'Loch Ness creature hunt'],
        rating: 4.8,
        vibe: 'scenic'
    },
    {
        id: 'swiss-alps-interlaken',
        name: 'Swiss Alps - Interlaken Region',
        location: 'Switzerland',
        category: 'nature',
        description: 'Alpine perfection. Eiger, Matterhorn, Jungfrau. Mountain railways, paragliding, mountain biking. Swiss precision meets nature.',
        experience: 'Epic, majestic, awe-inspiring. Peaks pierce clouds. Everything is perfect and clean.',
        coordinates: [46.68, 8.18],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['June-September hiking season', 'Jungfraujoch train to 3,500m', 'Paraglide from Schilthorn', 'Expensive but world-class'],
        rating: 4.9,
        vibe: 'scenic'
    },

    // ===== ASIEN - Abseits der Touristenpfade =====
    {
        id: 'luang-prabang-laos',
        name: 'Luang Prabang',
        location: 'Laos',
        category: 'cultural',
        description: 'Ancient Lao capital. Golden temples, slow travel capital, monks on morning alms walk. Time moves differently here.',
        experience: 'Meditative, spiritual, slow. Saffron robes, temple bells, timelessness.',
        coordinates: [19.8845, 102.1348],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Wake 5am for monk alms walk', 'Boat cruise on Mekong', 'Night market food', 'Slow travel capital'],
        rating: 4.8,
        vibe: 'peaceful'
    },
    {
        id: 'sapa-vietnam',
        name: 'Sapa',
        location: 'Vietnam',
        category: 'nature',
        description: 'Mountainous region with terraced rice fields, ethnic minorities, misty peaks. Hiking between villages. Authentic Vietnam.',
        experience: 'Authentic, misty, agricultural. You\'re walking through generations of farming wisdom.',
        coordinates: [22.3402, 103.8343],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Hike between hill tribe villages', 'Stay in homestays', 'May-September best', 'Support local artisans'],
        rating: 4.7,
        vibe: 'adventurous'
    },
    {
        id: 'bali-ubud-culture',
        name: 'Ubud - Bali\'s Heart',
        location: 'Bali, Indonesia',
        category: 'cultural',
        description: 'Sacred Hindu temples, traditional dance, rice terraces. Ubud is Bali\'s cultural soul - less touristy than beaches.',
        experience: 'Spiritual, artistic, community-centered. You feel the Hindu traditions breathing.',
        coordinates: [-8.5069, 115.2625],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Attend evening temple ceremonies', 'Take yoga/meditation classes', 'Visit traditional markets', 'Learn gamelan music'],
        rating: 4.7,
        vibe: 'spiritual'
    },
    {
        id: 'angkor-temples-cambodia',
        name: 'Angkor Archaeological Park',
        location: 'Cambodia',
        category: 'cultural',
        description: 'Massive temple complex built by Khmer Empire. Angkor Wat is world\'s largest religious monument. Jungle reclaimed it.',
        experience: 'Ancient, mystical, humbling. Stones whisper of empires. Nature reclaiming civilization.',
        coordinates: [13.3667, 103.8467],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Sunrise at Angkor Wat (iconic)', 'Multi-day pass to explore', 'Hire knowledgeable guide', 'Respect sacred spaces'],
        rating: 4.8,
        vibe: 'spiritual'
    },
    {
        id: 'komodo-islands',
        name: 'Komodo National Park',
        location: 'Indonesia',
        category: 'nature',
        description: 'Ancient Komodo dragons roam volcanic islands. Pink sand beaches, world-class diving. Prehistoric creatures still exist.',
        experience: 'Primal, prehistoric, thrilling. You\'re in a place where dinosaurs didn\'t go extinct.',
        coordinates: [-8.6500, 119.4167],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Trek with armed guide (dragon safety)', 'Pink Beach snorkeling', 'Diving is world-class', 'Prepare for heat'],
        rating: 4.8,
        vibe: 'adventurous'
    },
    {
        id: 'borneo-rainforest',
        name: 'Borneo Rainforest',
        location: 'Malaysia/Indonesia',
        category: 'nature',
        description: 'Ancient rainforest, orangutans, proboscis monkeys. Kinabalu National Park. Biodiversity hotspot. Jungle lodges.',
        experience: 'Primal, alive, overwhelming sensory. Jungle sounds 24/7. You feel small in nature.',
        coordinates: [5.0, 115.0],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['See orangutans at sanctuaries', 'Night jungle treks', 'Kinabalu summit climb', 'Humidity is intense'],
        rating: 4.8,
        vibe: 'adventurous'
    },
    {
        id: 'java-volcanoes',
        name: 'Java Volcanoes',
        location: 'Indonesia',
        category: 'nature',
        description: 'Chain of active volcanoes. Mount Merapi, Mount Bromo, Tengger Caldera. Sunrise hikes to smoking craters.',
        experience: 'Geological, powerful, primordial. You\'re standing on active Earth.',
        coordinates: [-7.5, 107.0],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Mount Bromo sunrise hike', 'Ijen Crater blue fire', 'Merapi trek (with guides)', 'Respect volcanic activity'],
        rating: 4.7,
        vibe: 'adventurous'
    },

    // ===== AFRICA - Jenseits von Safaris =====
    {
        id: 'kilimanjaro-trek',
        name: 'Mount Kilimanjaro',
        location: 'Tanzania',
        category: 'nature',
        description: 'Africa\'s highest peak at 5,895m. Snow on equator. Accessible without technical climbing. Summit feels otherworldly.',
        experience: 'Triumphant, high-altitude, sacred. Standing above the clouds on Africa\'s roof.',
        coordinates: [-3.0674, 37.3556],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['6-7 day trek recommended', 'Acclimatization crucial', 'Guides & porters essential', 'January-February best'],
        rating: 4.9,
        vibe: 'adventurous'
    },
    {
        id: 'zanzibar-stone-town',
        name: 'Zanzibar - Stone Town',
        location: 'Tanzania',
        category: 'cultural',
        description: 'Historic spice island. Ancient Stone Town with narrow streets, Arab architecture, Swahili culture. Beaches nearby.',
        experience: 'Exotic, historical, aromatic. Spice scents fill the air. You\'re in a living history book.',
        coordinates: [-6.1667, 39.1833],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Get lost in Stone Town alleys', 'Spice plantation tours', 'Beach day trips', 'Sunset dhow cruises'],
        rating: 4.7,
        vibe: 'cultural'
    },
    {
        id: 'okavango-delta',
        name: 'Okavango Delta',
        location: 'Botswana',
        category: 'nature',
        description: 'Massive inland delta creating wetlands in the desert. Wildlife abundance. Mokoro (traditional canoe) safaris.',
        experience: 'Pristine, abundant, peaceful. Floating through waterways with hippos and birds.',
        coordinates: [-19.3333, 22.8333],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Mokoro canoe safaris', 'Camp in the delta', 'May-September best', 'All wildlife visible'],
        rating: 4.8,
        vibe: 'peaceful'
    },
    {
        id: 'madagascar-lemurs',
        name: 'Madagascar',
        location: 'Madagascar',
        category: 'nature',
        description: 'Island continent with unique lemurs, baobabs, otherworldly landscape. 90% of fauna found nowhere else.',
        experience: 'Alien, unique, precious. You\'re on a different evolutionary island.',
        coordinates: [-18.7669, 46.8691],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Andasibe-Mantadia for lemurs', 'Avenue of the Baobabs', 'Locally guide essential', 'Wildlife unique'],
        rating: 4.8,
        vibe: 'adventurous'
    },
    {
        id: 'ethiopia-lalibela',
        name: 'Lalibela',
        location: 'Ethiopia',
        category: 'spiritual',
        description: 'Medieval rock-hewn churches carved from single stones. UNESCO World Heritage. Pilgrimage destination for Ethiopian Orthodox.',
        experience: 'Sacred, ancient, spiritually charged. You\'re inside stone cathedrals carved by faith.',
        coordinates: [11.6347, 39.0469],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['11 churches to explore', 'Early morning services', 'Pilgrimage festival in January', 'Respect religious significance'],
        rating: 4.9,
        vibe: 'spiritual'
    },
    {
        id: 'morocco-sahara',
        name: 'Sahara Desert - Morocco',
        location: 'Morocco',
        category: 'nature',
        description: 'Sand dunes in Merzouga, Berber culture, camel treks, desert camps. Stargazing unmatched.',
        experience: 'Ancient, vast, timeless. Sand extends forever. Stars blanket the sky.',
        coordinates: [31.9454, -4.0114],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Camel trek overnight', 'Berber camp experience', 'Stargazing is mandatory', 'October-April best'],
        rating: 4.8,
        vibe: 'scenic'
    },

    // ===== SÜD- & MITTELAMERIKA =====
    {
        id: 'machu-picchu-peru',
        name: 'Machu Picchu',
        location: 'Peru',
        category: 'cultural',
        description: 'Ancient Inca city perched 2,430m high. Lost city rediscovered. Mountain setting is sacred geometry.',
        experience: 'Mystical, elevated, timeless. You\'re touching Inca engineering and spirituality.',
        coordinates: [-13.1631, -72.5450],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Inca Trail trek 4 days', 'Pre-acclimatize in Cusco', 'Book well ahead', 'June-August best'],
        rating: 4.9,
        vibe: 'spiritual'
    },
    {
        id: 'galapagos-islands',
        name: 'Galápagos Islands',
        location: 'Ecuador',
        category: 'nature',
        description: 'Darwin\'s lab. Unique wildlife evolution. Blue-footed boobies, giant tortoises, marine iguanas. Protected paradise.',
        experience: 'Scientific, rare, privileged. You\'re witnessing evolution in action.',
        coordinates: [-0.6, -90.5],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Cruise between islands', 'Snorkel with marine life', 'Naturalist guides required', 'Expensive but unique'],
        rating: 4.9,
        vibe: 'adventurous'
    },
    {
        id: 'amazon-rainforest',
        name: 'Amazon Rainforest',
        location: 'Brazil/Peru',
        category: 'nature',
        description: 'Earth\'s lungs. 10% of world\'s species. River adventures, jungle lodges, indigenous cultures. Biodiversity infinite.',
        experience: 'Overwhelming, alive, humbling. Jungle intensity envelops you.',
        coordinates: [-3.0, -60.0],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Jungle lodges for access', 'River boat tours', 'Respect indigenous communities', 'Malaria precautions'],
        rating: 4.8,
        vibe: 'adventurous'
    },
    {
        id: 'iguazu-falls',
        name: 'Iguazu Falls',
        location: 'Argentina/Brazil',
        category: 'nature',
        description: 'Most powerful waterfall system on Earth. 275 falls. Sheer raw power. Dwarfs Niagara.',
        experience: 'Thunderous, overwhelming, majestic. Water roars with Earth\'s power.',
        coordinates: [-25.5951, -54.5775],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['View from both Argentina & Brazil sides', 'Boat ride into falls', 'Rainbow mist', 'December-March water highest'],
        rating: 4.9,
        vibe: 'scenic'
    },
    {
        id: 'cusco-sacred-valley',
        name: 'Sacred Valley',
        location: 'Peru',
        category: 'cultural',
        description: 'Inca heartland. Dozens of Inca sites, Quechua markets, traditional weaving, mountain terraces.',
        experience: 'Cultural, ancestral, connected to earth. You\'re in Inca territory.',
        coordinates: [-12.0, -72.5],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Pisac ruins & market', 'Ollantaytambo terraces', 'Maras salt ponds', 'Acclimatize before visiting'],
        rating: 4.8,
        vibe: 'cultural'
    },
    {
        id: 'costa-rica-rainforest',
        name: 'Costa Rica - Osa Peninsula',
        location: 'Costa Rica',
        category: 'nature',
        description: 'Primary rainforest, macaws, jaguars, biodiversity. Corcovado National Park. Eco-lodges. Untouched wilderness.',
        experience: 'Wild, verdant, alive. Jungle symphony 24/7.',
        coordinates: [8.3333, -83.6667],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
