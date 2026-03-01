// UI Component Functions

// Show/hide views
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0);
}

// Render destination cards with real images
function renderDestinationCards(destList = destinations) {
    const grid = document.getElementById('destinations-grid');
    grid.innerHTML = destList.map(dest => {
        const imageUrl = dest.media.photos && dest.media.photos.length > 0 
            ? dest.media.photos[0] 
            : 'https://via.placeholder.com/400x200?text=TravelVibe';
        return `
            <div class="destination-card" onclick="showDestinationDetail('${dest.id}')">
                <div class="card-image" style="background: url('${imageUrl}') center/cover no-repeat;">
                </div>
                <div class="card-content">
                    <span class="card-category">${getCategoryLabel(dest.category)}</span>
                    <h3 class="card-title">${dest.name}</h3>
                    <p class="card-location">📍 ${dest.location}</p>
                    <p class="card-description">${dest.description.substring(0, 100)}...</p>
                    <div class="card-rating">⭐ ${dest.rating}/5</div>
                </div>
            </div>
        `;
    }).join('');
}

// Show destination detail
function showDestinationDetail(destId) {
    const dest = getDestinationById(destId);
    if (!dest) return;

    const detailContent = document.getElementById('detail-content');
    
    const photosHtml = dest.media.photos && dest.media.photos.length > 0 
        ? `<div class="detail-gallery">
             ${dest.media.photos.map(p => `<img src="${p}" alt="Destination image" class="gallery-item">`).join('')}
           </div>`
        : '';
    
    const videoHtml = dest.media.video 
        ? `<video class="detail-video" controls><source src="${dest.media.video}"></video>`
        : '';

    const tipsHtml = dest.tips && dest.tips.length > 0 
        ? `<div class="detail-section">
             <h3>💡 Tipps</h3>
             <ul class="tips-list">
               ${dest.tips.map(tip => `<li>${tip}</li>`).join('')}
             </ul>
           </div>`
        : '';

    const mainImage = dest.media.photos && dest.media.photos.length > 0 
        ? `<img src="${dest.media.photos[0]}" alt="${dest.name}" style="width: 100%; height: auto; border-radius: var(--border-radius); margin-bottom: 2rem;">`
        : '';

    detailContent.innerHTML = `
        <div class="detail-header">
            <h2>${dest.name}</h2>
            <div class="detail-meta">
                <span>📍 ${dest.location}</span>
                <span>⭐ ${dest.rating}/5.0</span>
                <span>${getCategoryLabel(dest.category)}</span>
            </div>
        </div>

        ${mainImage}

        <div class="detail-section">
            <h3>Über diesen Ort</h3>
            <p>${dest.description}</p>
        </div>

        <div class="detail-section">
            <h3>✨ Das Gefühl</h3>
            <p>${dest.experience}</p>
        </div>

        ${videoHtml}
        ${photosHtml}

        ${tipsHtml}

        <div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid #eee;">
            <p style="color: #999; font-size: 0.9rem;">
                🌍 Entdeckt auf TravelVibe — Erlebnisse, nicht nur Orte
            </p>
        </div>
    `;

    showView('view-detail');
}

// Surprise me - show random destination
function surpriseMe() {
    const randomDest = getRandomDestination();
    showDestinationDetail(randomDest.id);
}

// Get category emoji
function getCategoryEmoji(category) {
    const emojis = {
        'nature': '🌲',
        'museum': '🏛️',
        'urban': '🏙️',
        'culinary': '🍽️',
        'hidden-gem': '💎'
    };
    return emojis[category] || '🌍';
}

// Get category label
function getCategoryLabel(category) {
    const labels = {
        'nature': '🌲 Natur',
        'museum': '🏛️ Museum',
        'urban': '🏙️ Urban',
        'culinary': '🍽️ Kulinarisch',
        'hidden-gem': '💎 Hidden Gem'
    };
    return labels[category] || 'Ziel';
}

// Update navigation active state
function updateNavigation(activeBtn) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// Update destination count in hero stats
function updateDestinationCount() {
    const countElement = document.getElementById('stat-destinations');
    if (countElement) {
        countElement.textContent = destinations.length + '+';
    }
}

// Initialize World Map with Leaflet
let worldMap = null;

function initializeWorldMap() {
    const mapElement = document.getElementById('world-map');
    if (!mapElement || worldMap) return;

    // Center of the world (centered on equator and prime meridian)
    worldMap = L.map('world-map').setView([20, 10], 2);

    // OpenStreetMap tile layer (free, no API key needed)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        minZoom: 2
    }).addTo(worldMap);

    // Add markers for each destination
    destinations.forEach(dest => {
        if (dest.coordinates) {
            const marker = L.marker(dest.coordinates).addTo(worldMap);
            
            // Popup with destination info
            const popup = `
                <div style="text-align: center; min-width: 200px;">
                    <h4>${dest.name}</h4>
                    <p style="margin: 5px 0; color: #666;">${dest.location}</p>
                    <button onclick="showDestinationDetail('${dest.id}')" 
                            style="padding: 5px 15px; background: #FF6B6B; color: white; border: none; border-radius: 5px; cursor: pointer;">
                        Details anzeigen
                    </button>
                </div>
            `;
            
            marker.bindPopup(popup);
            
            // Add custom icon with category emoji
            const icon = L.divIcon({
                className: 'custom-marker',
                html: `<div style="font-size: 24px; text-shadow: 1px 1px 2px white;">${getCategoryEmoji(dest.category)}</div>`,
                iconSize: [30, 30],
                popupAnchor: [0, -15]
            });
            
            marker.setIcon(icon);
        }
    });

    // Invalidate map size when shown
    setTimeout(() => worldMap.invalidateSize(), 100);
}
