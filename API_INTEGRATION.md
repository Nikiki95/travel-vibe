# 🔌 API Integration Guide for TravelVibe

## Overview
This guide shows how to expand TravelVibe with real-time data, user-generated content, and automatic curation using public APIs.

---

## 1. Image APIs (Free Tier Available)

### Unsplash API
**Endpoint:** `https://api.unsplash.com/`
**Rate Limit:** 50 requests/hour (free)

```javascript
// Get 3 random landscape photos for a destination
const query = "mountain landscape";
const response = await fetch(
  `https://api.unsplash.com/search/photos?query=${query}&count=3&client_id=YOUR_KEY`
);
const data = await response.json();
const imageUrls = data.results.map(item => item.urls.regular);
```

**Best for:** Modern, artistic landscape and travel photos

---

### Wikimedia Commons API
**Endpoint:** `https://en.wikipedia.org/w/api.php`
**Rate Limit:** Unlimited (with courtesy headers)
**License:** CC-BY-SA, Public Domain

```javascript
// Search for images of a specific location
const searchTerm = "Pamir Mountain";
const params = new URLSearchParams({
  action: 'query',
  list: 'search',
  srsearch: searchTerm,
  format: 'json',
  origin: '*'
});

const response = await fetch(
  `https://en.wikipedia.org/w/api.php?${params}`
);
const data = await response.json();
```

**Best for:** Historical, cultural, and remote location photos with metadata

---

### Pexels Video API
**Endpoint:** `https://api.pexels.com/videos/`
**Rate Limit:** 200 requests/hour (free)

```javascript
// Get travel/landscape videos
const response = await fetch(
  'https://api.pexels.com/videos/search?query=mountain landscape&per_page=3',
  {
    headers: { 'Authorization': 'YOUR_PEXELS_KEY' }
  }
);
const videos = await response.json();
```

**Best for:** High-quality videos for destinations

---

## 2. Location & Description Data

### Wikidata SPARQL API
**Endpoint:** `https://query.wikidata.org/sparql`
**Rate Limit:** Generous
**Data:** Coordinates, descriptions, images, categories

```javascript
// Query for natural features in a region
const query = `
  SELECT ?item ?itemLabel ?coords ?image WHERE {
    ?item wdt:P31 wd:Q8502;           # Is a mountain
           wdt:P625 ?coords;          # Has coordinates
           wdt:P18 ?image.            # Has image
    ?item rdfs:label ?itemLabel.
    FILTER (LANG(?itemLabel) = "en")
  }
  LIMIT 100
`;

const response = await fetch(
  'https://query.wikidata.org/sparql?query=' + 
  encodeURIComponent(query) + 
  '&format=json'
);
const results = await response.json();
```

**Best for:** Structured data about places (coordinates, descriptions, connections)

---

### Open Street Map (Nominatim)
**Endpoint:** `https://nominatim.openstreetmap.org/`
**Rate Limit:** 1 request/second
**Data:** Reverse geocoding, place names, addresses

```javascript
// Get place name from coordinates
const response = await fetch(
  `https://nominatim.openstreetmap.org/reverse?format=json&lat=37.0&lon=72.0`
);
const place = await response.json();
console.log(place.address.city, place.address.country);
```

**Best for:** Converting coordinates to human-readable names

---

### Wikipedia API
**Endpoint:** `https://en.wikipedia.org/w/api.php`
**Best for:** Descriptions, history, detailed information

```javascript
// Get summary of a location from Wikipedia
const response = await fetch(
  'https://en.wikipedia.org/api/rest_v1/page/summary/Pamir_Mountains'
);
const summary = await response.json();
console.log(summary.extract); // Get article intro
```

---

## 3. Weather & Environmental Data

### Open-Meteo (Free, No Key)
**Endpoint:** `https://api.open-meteo.com/v1/forecast`
**Best Time to Visit:** Can show seasonal patterns

```javascript
// Get climate data for a destination
const response = await fetch(
  'https://api.open-meteo.com/v1/forecast?' +
  'latitude=35.3142&longitude=24.0167&' +
  'monthly=precipitation_sum,temperature_2m_max,temperature_2m_min'
);
const weatherData = await response.json();
// Use to add "best season" info
```

---

## 4. User Reviews & Ratings

### Overpass API (OpenStreetMap)
**Endpoint:** `https://overpass-api.de/api/interpreter`
**Get:** User reviews, ratings, amenities

```
[bbox:35,74,36,75]; // Pamir region
(
  node["tourism"="attraction"];
  way["tourism"="attraction"];
  relation["tourism"="attraction"];
);
out body;
```

---

## 5. Practical Integration Steps

### Step 1: Add API Keys to Config
```javascript
// config.js (add to .gitignore!)
const API_KEYS = {
  unsplash: process.env.UNSPLASH_KEY,
  pexels: process.env.PEXELS_KEY,
  // Wikidata & Wikipedia don't need keys
};
```

### Step 2: Create Photo Fetcher
```javascript
async function fetchDestinationPhotos(query) {
  // Try Unsplash first (modern aesthetic)
  const unsplashPhotos = await fetchUnsplash(query);
  if (unsplashPhotos.length >= 3) return unsplashPhotos;
  
  // Fall back to Wikimedia (diverse, remote)
  const wikimediaPhotos = await fetchWikimedia(query);
  return [...unsplashPhotos, ...wikimediaPhotos].slice(0, 5);
}
```

### Step 3: Auto-enrich Destinations
```javascript
// When adding new destination, auto-fetch:
// 1. Coordinates from Nominatim
// 2. Photos from APIs
// 3. Description from Wikipedia
// 4. Weather data from Open-Meteo
// 5. Map from Leaflet

async function enrichDestination(name, location) {
  const coords = await getCoordinates(name, location);
  const photos = await fetchDestinationPhotos(name);
  const description = await getWikipediaDescription(name);
  const weather = await getClimateData(coords);
  
  return {
    name,
    location,
    coordinates: coords,
    media: { photos },
    description,
    seasonalInfo: weather
  };
}
```

---

## 6. Crowdsourced Data Strategy

### Enable User Contributions
```javascript
// User form submission creates:
// 1. New destination entry
// 2. Submission for moderation
// 3. Community voting
// 4. Verified once approved

function submitUserDestination(formData) {
  const destination = {
    id: `user-${Date.now()}`,
    ...formData,
    verified: false,
    upvotes: 0,
    submittedBy: currentUser.id
  };
  
  saveToDatabase(destination);
  notifyModerators(destination);
}
```

### Voting System
```javascript
function voteOnDestination(destId, vote) {
  // vote: +1 (good), -1 (remove)
  // Destinations with <-5 votes get removed
  // High-voted destinations get featured
}
```

---

## 7. Implementation Roadmap

### Phase 1 (Week 1)
- ✅ Manual curation of 40 destinations
- Add Unsplash API for better image selection
- Create destinations-extended.js for scale

### Phase 2 (Week 2-3)
- Add Wikidata SPARQL for auto-discovery
- Wikipedia summaries for descriptions
- Weather data for seasonal tips

### Phase 3 (Month 2)
- User authentication
- Community contributions
- Moderation dashboard
- Database (Firebase/Supabase)

### Phase 4 (Month 3)
- Advanced search/filters
- User favorites/collections
- Trip itinerary builder
- Mobile app

---

## 8. Security Considerations

### API Keys
```javascript
// ❌ Never commit API keys
// ✅ Use environment variables
const apiKey = process.env.UNSPLASH_API_KEY;

// .gitignore
.env
.env.local
```

### Rate Limiting
```javascript
// Implement rate limiting to avoid bans
const limiter = new RateLimiter(50, 'hour'); // 50 requests/hour

async function fetchWithLimit(url) {
  await limiter.check();
  return fetch(url);
}
```

### CORS
Many free APIs have CORS issues. Solutions:
1. Use `cors-anywhere` proxy (simple but slow)
2. Call APIs from backend (better)
3. Use APIs with CORS enabled

---

## 9. Cost Analysis

| API | Free Tier | Cost at Scale |
|-----|-----------|---------------|
| Unsplash | 50 req/hour | Free forever (no charge) |
| Wikimedia Commons | Unlimited | Free (open data) |
| Wikipedia | Unlimited | Free (open data) |
| Wikidata | Unlimited | Free (open data) |
| Pexels | 200 req/hour | Free forever |
| Open-Meteo | Unlimited | Free (open data) |
| **Total** | **All free** | **All free** |

**TravelVibe can scale to 1,000+ destinations using only FREE APIs!**

---

## 10. Example: Auto-Discover Hidden Gems

```javascript
// Use Wikidata to auto-discover lesser-known places
async function findHiddenGems(region, maxPopulation = 50000) {
  const query = `
    SELECT ?place ?placeLabel ?population ?coords ?image WHERE {
      ?place wdt:P131* wd:Q${region}; # In the region
             wdt:P625 ?coords.         # Has coordinates
      OPTIONAL { ?place wdt:P1082 ?population. }
      OPTIONAL { ?place wdt:P18 ?image. }
      FILTER(!BOUND(?population) || ?population < ${maxPopulation})
      SERVICE wikibase:label { 
        bd:serviceParam wikibase:language "en". 
      }
    }
    LIMIT 50
  `;
  
  const results = await fetch(
    'https://query.wikidata.org/sparql?query=' + 
    encodeURIComponent(query) + 
    '&format=json'
  ).then(r => r.json());
  
  return results.results.bindings.map(item => ({
    name: item.placeLabel.value,
    population: item.population?.value,
    coordinates: parseCoordinates(item.coords.value)
  }));
}
```

---

## Resources

- **Unsplash API Docs:** https://unsplash.com/developers
- **Wikidata Query Service:** https://query.wikidata.org/
- **Wikipedia API:** https://en.wikipedia.org/w/api.php
- **Pexels API:** https://www.pexels.com/api/
- **OSM Nominatim:** https://nominatim.org/
- **Open-Meteo:** https://open-meteo.com/

---

**Goal:** TravelVibe should be powered by community + open data, not proprietary APIs.
