# 🌍 TravelVibe — Digital Experience Travel App

A modern web application for discovering immersive travel experiences. Focus on authentic destinations, hidden gems, museums, nature, and everything in between.

## Features

✨ **Experience-Focused Discovery**
- Curated destinations with rich multimedia (videos, photos, clips)
- Museums, nature spots, urban exploration, culinary journeys
- Hidden gems and offbeat locations (not the typical tourist traps)

🎲 **Surprise Me**
- Random destination discovery
- Explore unknown places at the click of a button

📸 **Rich Media**
- Video embeds and clips
- Photo galleries
- Immersive descriptions that transport you there

🤝 **Community-Driven**
- Add your own travel experiences
- Share clips, photos, stories
- Rate and comment on destinations

🌐 **Modern Tech Stack**
- Vanilla JavaScript (no heavy frameworks)
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

Edit `data/destinations.json` to add new places:

```json
{
  "id": "unique-id",
  "name": "Destination Name",
  "location": "City, Country",
  "category": "nature|museum|urban|culinary|hidden-gem",
  "description": "What makes this place special?",
  "experience": "The feeling/mood when you're there",
  "media": {
    "video": "url-to-video",
    "photos": ["url1", "url2"],
    "clip": "short-clip-url"
  },
  "tips": ["tip1", "tip2"],
  "rating": 4.5,
  "vibe": "peaceful|adventurous|cultural|scenic"
}
```

## Contributing

Have a cool destination? Open an issue or PR with:
- Photos/videos (links or describe where to get them)
- Description of the experience
- Why it's worth visiting
- Best time to visit

## Future Ideas

- [ ] Filter by vibe/category
- [ ] Map integration
- [ ] User authentication (save favorites)
- [ ] Share trips & itineraries
- [ ] AR/VR experiences
- [ ] AI recommendations based on preferences
- [ ] Offline mode
- [ ] Multi-language support

## License

MIT — Use it, fork it, build on it. 🚀

---

**Let's build something that captures the soul of travel, not just the sights.**
