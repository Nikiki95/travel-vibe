// MEGA DESTINATIONS DATABASE - Part 4
// 40+ More destinations to reach 100+

const megaDestinations = [
    // ===== PAZIFIK & OZEANIEN =====
    {
        id: 'new-zealand-milford-sound',
        name: 'Milford Sound',
        location: 'New Zealand',
        category: 'nature',
        description: 'Fiordland. Dramatic cliffs rise 1,200m from dark waters. Waterfalls cascade into the sound. One of Earth\'s great wonders.',
        experience: 'Majestic, primordial, jaw-dropping. Nature\'s architecture at its most dramatic.',
        coordinates: [-44.6720, 167.9256],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Cruise into the fjord', 'Rain often, brings waterfalls', 'Book early (popular)', 'December-February summer'],
        rating: 4.9,
        vibe: 'scenic'
    },
    {
        id: 'fiji-islands',
        name: 'Fiji Islands',
        location: 'Fiji',
        category: 'nature',
        description: 'Tropical paradise. 333 islands, turquoise waters, pristine reefs, island time. Fijian hospitality.',
        experience: 'Tropical bliss, relaxed, paradise. You\'re in postcard perfection.',
        coordinates: [-17.7134, 178.0650],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Island-hop between islands', 'Dive world-class reefs', 'Kava ceremonies evening', 'May-October dry season'],
        rating: 4.8,
        vibe: 'peaceful'
    },
    {
        id: 'fjordland-nz-hiking',
        name: 'Fiordland National Park',
        location: 'New Zealand',
        category: 'nature',
        description: 'Milford Track trek considered world\'s best hike. 4 days through mountains, forests, alongside fiords.',
        experience: 'Epic, immersive, transformative. You\'re walking through nature at its grandest.',
        coordinates: [-44.8, 168.7],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Book Milford Track 1 year ahead', 'November-April access', 'Roaring Burn waterfall', 'Pristine wilderness'],
        rating: 4.9,
        vibe: 'adventurous'
    },
    {
        id: 'borobudur-temple',
        name: 'Borobudur Temple',
        location: 'Indonesia',
        category: 'spiritual',
        description: 'Largest Buddhist temple complex. 8th century. 504 Buddha statues. Sunrise pilgrimage site.',
        experience: 'Spiritual, monumental, peaceful. Stone and silence teach you.',
        coordinates: [-7.6075, 110.2055],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Sunrise visit (arrive 4:30am)', 'Remove shoes on terraces', 'Guide brings stories to life', 'Visit Prambanan nearby'],
        rating: 4.9,
        vibe: 'spiritual'
    },
    {
        id: 'raja-ampat-diving',
        name: 'Raja Ampat Islands',
        location: 'Indonesia',
        category: 'nature',
        description: 'World\'s premier diving destination. 4 large islands, 1,309 fish species, pristine reefs, manta rays.',
        experience: 'Underwater paradise, abundant, pristine. You\'re in Earth\'s richest reef system.',
        coordinates: [-0.7, 130.6],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Liveaboard diving', 'Manta rays seasonal', 'Kayak between islands', 'Remote but worth it'],
        rating: 4.9,
        vibe: 'adventurous'
    },
    {
        id: 'semporna-borneo',
        name: 'Semporna - Borneo',
        location: 'Malaysia',
        category: 'nature',
        description: 'Sea gypsy culture, island diving, Sipadan world-class dive site. Coastal beauty.',
        experience: 'Marine adventure, cultural immersion, tropical.',
        coordinates: [4.4926, 118.6109],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Sipadan diving (permit required)', 'Sea turtle encounters', 'Island camping', 'Respect indigenous communities'],
        rating: 4.8,
        vibe: 'adventurous'
    },

    // ===== NORD-AMERIKA =====
    {
        id: 'grand-canyon-usa',
        name: 'Grand Canyon',
        location: 'USA',
        category: 'nature',
        description: '1.2 miles deep, 277 miles long. Carved by Colorado River. Geological timeline visible in rocks. Sunset is transcendent.',
        experience: 'Vast, humbling, geological masterpiece. You\'re reading Earth\'s history in stone.',
        coordinates: [36.1069, -112.1129],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Hike rim trails', 'Sunrise & sunset views', 'Raft the Colorado River', 'Avoid peak crowds'],
        rating: 4.9,
        vibe: 'scenic'
    },
    {
        id: 'yellowstone-usa',
        name: 'Yellowstone National Park',
        location: 'USA',
        category: 'nature',
        description: 'World\'s first national park. Geysers, hot springs, bison herds, canyons, waterfalls. Supervolcano beneath.',
        experience: 'Geothermal wonder, wild, primordial. Nature unleashed.',
        coordinates: [44.7282, -110.5885],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Old Faithful geyser', 'Grand Prismatic Spring', 'Wildlife viewing early morning', 'May-September access'],
        rating: 4.8,
        vibe: 'scenic'
    },
    {
        id: 'zion-national-park',
        name: 'Zion National Park',
        location: 'USA',
        category: 'nature',
        description: 'Red rock canyons, hanging gardens, Narrows hike through river canyon. Angels Landing scramble. Utah beauty.',
        experience: 'Dramatic, colorful, exhilarating. Red cliffs tower monumentally.',
        coordinates: [37.2982, -112.9789],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Angels Landing hike (chains)', 'The Narrows wade through river', 'Emerald Pools trail', 'Spring/fall best'],
        rating: 4.8,
        vibe: 'adventurous'
    },
    {
        id: 'yosemite-usa',
        name: 'Yosemite National Park',
        location: 'USA',
        category: 'nature',
        description: 'Giant granite monoliths, waterfalls, alpine meadows, giant sequoias. El Capitan towering 3,000 feet.',
        experience: 'Majestic, granite-carved, inspiring. Valley is cathedral to nature.',
        coordinates: [37.7749, -119.7674],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Valley views', 'Mist Trail waterfall hike', 'High country trails', 'May-September peak season'],
        rating: 4.9,
        vibe: 'scenic'
    },
    {
        id: 'banff-national-park',
        name: 'Banff National Park',
        location: 'Canada',
        category: 'nature',
        description: 'Canadian Rockies. Lake Louise turquoise, Moraine Lake iconic, Valley of the Ten Peaks. Alpine paradise.',
        experience: 'Breathtaking, majestic, perfect. Mountains define the landscape.',
        coordinates: [51.4545, -115.9721],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Lake Louise iconic hike', 'Moraine Lake sunrise', 'Plain of Six Glaciers', 'June-September access'],
        rating: 4.9,
        vibe: 'scenic'
    },
    {
        id: 'jasper-national-park',
        name: 'Jasper National Park',
        location: 'Canada',
        category: 'nature',
        description: 'Less crowded Banff neighbor. Icefields Parkway drives through glaciers. Columbia Icefield. Pure wilderness.',
        experience: 'Wild, glacial, vast. You\'re among permanent ice.',
        coordinates: [52.8760, -118.0882],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Icefields Parkway drive', 'Columbia Icefield glacier', 'Athabasca Falls', 'Wildlife spotting (bears)'],
        rating: 4.8,
        vibe: 'scenic'
    },

    // ===== ARKTIS & SPEZIELLE ORTE =====
    {
        id: 'iceland-glacier-lagoon',
        name: 'Jökulsárlón Glacier Lagoon',
        location: 'Iceland',
        category: 'nature',
        description: 'Glacial meltwater lagoon filled with icebergs. Seal colonies. Black sand beaches. Otherworldly.',
        experience: 'Icy, pristine, alien-like. Blue icebergs float in dark water.',
        coordinates: [64.0399, -16.2406],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Amphibious boat tour into lagoon', 'Diamond Beach nearby', 'Year-round access', 'Winter northern lights'],
        rating: 4.9,
        vibe: 'scenic'
    },
    {
        id: 'svalbard-arctic',
        name: 'Svalbard - Arctic Wilderness',
        location: 'Svalbard',
        category: 'nature',
        description: 'Arctic archipelago between Norway and North Pole. Polar bears, Arctic foxes, glaciers, midnight sun, northern lights.',
        experience: 'Polar, remote, extreme. You\'re at Earth\'s frontier.',
        coordinates: [78.2232, 15.6267],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['October-March for northern lights', 'May-August midnight sun', 'Polar bear safaris', 'Extreme cold'],
        rating: 4.8,
        vibe: 'adventurous'
    },
    {
        id: 'atacama-stargazing',
        name: 'San Pedro de Atacama',
        location: 'Chile',
        category: 'nature',
        description: 'Driest non-polar desert. Astronomical observatories. Clearest skies on Earth. Stargazing transcendent.',
        experience: 'Cosmic, clear, infinite. Universe spreads above you.',
        coordinates: [-22.9, -68.2],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Stargazing tour with telescope', 'Valley of the Moon hike', 'High altitude (2,400m)', 'Crispy air quality'],
        rating: 4.9,
        vibe: 'spiritual'
    },
    {
        id: 'patagonia-ice-trekking',
        name: 'Perito Moreno Glacier',
        location: 'Argentina',
        category: 'nature',
        description: 'Advancing glacier (rare). Ice trekking on glacier surface. Blue ice formations. Calving icebergs.',
        experience: 'Glacial, timeless, powerful. Walking on ancient ice.',
        coordinates: [-50.4915, -73.1899],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Ice trekking (full day)', 'View from Perito Moreno walkway', 'Boat tour to see calving', 'December-February summer'],
        rating: 4.9,
        vibe: 'adventurous'
    },
    {
        id: 'mount-everest-base',
        name: 'Everest Base Camp Trek',
        location: 'Nepal',
        category: 'adventurous',
        description: 'Trek to 5,364m at foot of world\'s highest mountain. Sherpa culture, Buddhist monasteries, high-altitude beauty.',
        experience: 'High-altitude, spiritual, challenging. You\'re standing near the world\'s peak.',
        coordinates: [28.0061, 86.8575],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['12-14 day trek', 'Acclimatize carefully', 'Teahouse lodges along route', 'March-May, Sept-Nov best'],
        rating: 4.8,
        vibe: 'adventurous'
    },
    {
        id: 'lake-uyuni-wet-season',
        name: 'Salar de Uyuni - Mirror Effect',
        location: 'Bolivia',
        category: 'nature',
        description: 'During wet season: world\'s largest mirror. Sky reflects perfectly on flat salt water. Surreal.',
        experience: 'Surreal, limitless, dreamlike. Sky and earth merge.',
        coordinates: [-19.3, -67.0],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['December-February for mirror', 'Jeep tours across salt', 'Flamingo lakes nearby', 'High altitude (3,650m)'],
        rating: 4.9,
        vibe: 'spiritual'
    },
    {
        id: 'death-valley-usa',
        name: 'Death Valley',
        location: 'USA',
        category: 'nature',
        description: 'Lowest point in North America (-86m). Hottest temperature ever recorded (56°C). Salt flats, colorful badlands.',
        experience: 'Extreme, hostile, beautiful. Survival feel in beautiful way.',
        coordinates: [36.5023, -116.8625],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['November-March (too hot otherwise)', 'Badwater Basin lowest point', 'Zabriskie Point sunrise', 'Bring tons of water'],
        rating: 4.7,
        vibe: 'scenic'
    },
    {
        id: 'monument-valley-usa',
        name: 'Monument Valley',
        location: 'USA',
        category: 'nature',
        description: 'Navajo Nation land. Iconic red rock buttes. Western movie backdrop. Desert landscape iconic to America.',
        experience: 'Cinematic, red, iconic. You\'re in the American West mythology.',
        coordinates: [37.0041, -110.1623],
        media: {
            video: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            ],
            clip: null
        },
        tips: ['Valley Drive scenic loop', 'Sunrise/sunset viewing', 'Respect Navajo sacred sites', 'Spring/fall best'],
        rating: 4.8,
        vibe: 'scenic'
    }
];

// Export all mega destinations
