# 🌍 TravelVibe — Digital Experience Travel App

A modern web application for discovering immersive travel experiences. Focus on authentic destinations, hidden gems, museums, nature, and everything in between.

## Features

✨ **Experience-Focused Discovery**
- Curated destinations with rich multimedia (real Unsplash photos)
- Museums, nature spots, urban exploration, culinary journeys
- Hidden gems and offbeat locations (not the typical tourist traps)

🎲 **Surprise Me**
- Random destination discovery
- Explore unknown places at the click of a button

🗺️ **Interactive World Map**
- Leaflet.js powered map with OpenStreetMap
- Visual destination markers on the map
- Click markers to see destination details
- Zoom and pan across the globe

📸 **Rich Media**
- Real Unsplash photos (free, high-quality)
- Photo galleries with hover effects
- Immersive descriptions that transport you there

🤝 **Community-Driven**
- Add your own travel experiences
- Share photos, stories, tips
- Rate and review destinations

🌐 **Modern Tech Stack**
- Vanilla JavaScript (no heavy frameworks)
- Leaflet.js for interactive mapping
- Unsplash API for free stock photos
- Responsive design (mobile-first)
- Clean, performant UI

## Project Structure

```
travel-app/
├── index.html          # Main app
├── styles/
│   └── main.css        # Styling
├── js/
│   ├── app.js          # Core logic
│   ├── destinations.js # Data/destinations
│   └── ui.js           # UI components
├── data/
│   └── destinations.json # Destination database
└── README.md
```

## Quick Start

```bash
# Clone the repo
git clone https://github.com/yourusername/travel-app.git
cd travel-app

# Open in browser
open index.html
# or just drag it into your browser
```

## Adding Destinations

Edit `js/destinations.js` to add new places:

```javascript
{
  id: 'unique-id',
  name: 'Destination Name',
  location: 'City, Country',
  category: 'nature|museum|urban|culinary|hidden-gem',
  description: 'What makes this place special?',
  experience: 'The feeling/mood when you\'re there',
  coordinates: [latitude, longitude],  // For map markers
  media: {
    video: null,  // Optional: video URL
    photos: [
      'https://images.unsplash.com/photo-xxxxx?w=800&q=80',
      'https://images.unsplash.com/photo-yyyyy?w=800&q=80'
    ],
    clip: null
  },
  tips: ['tip1', 'tip2'],
  rating: 4.5,
  vibe: 'peaceful|adventurous|cultural|scenic'
}
```

### Finding Free Images

1. **Unsplash** (Recommended)
   - Go to https://unsplash.com
   - Search for your destination/activity
   - Right-click → Copy image link
   - URL format: `https://images.unsplash.com/photo-XXXXX?w=800&q=80`

2. **Pexels** - https://pexels.com (also free)

3. **Pixabay** - https://pixabay.com (requires registration)

## Contributing

Have a cool destination? Open an issue or PR with:
- Photos/videos (links or describe where to get them)
- Description of the experience
- Why it's worth visiting
- Best time to visit

## Future Ideas

- [ ] Advanced filters (vibe, season, budget)
- [x] Interactive world map
- [ ] User authentication (save favorites)
- [ ] Share trips & itineraries
- [ ] Comments & user ratings
- [ ] AR/VR experiences
- [ ] AI recommendations based on preferences
- [ ] Offline mode / PWA
- [ ] Multi-language support
- [ ] Video hosting integration (YouTube, Vimeo)
- [ ] Travel planning tools (itinerary builder)
- [ ] Weather & best time to visit info

## License

MIT — Use it, fork it, build on it. 🚀

---

**Let's build something that captures the soul of travel, not just the sights.**
