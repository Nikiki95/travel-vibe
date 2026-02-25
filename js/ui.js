// UI Component Functions

// Show/hide views
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0);
}

// Render destination cards
function renderDestinationCards(destList = destinations) {
    const grid = document.getElementById('destinations-grid');
    grid.innerHTML = destList.map(dest => `
        <div class="destination-card" onclick="showDestinationDetail('${dest.id}')">
            <div class="card-image">
                ${getCategoryEmoji(dest.category)}
            </div>
            <div class="card-content">
                <span class="card-category">${getCategoryLabel(dest.category)}</span>
                <h3 class="card-title">${dest.name}</h3>
                <p class="card-location">📍 ${dest.location}</p>
                <p class="card-description">${dest.description.substring(0, 100)}...</p>
                <div class="card-rating">⭐ ${dest.rating}/5</div>
            </div>
        </div>
    `).join('');
}

// Show destination detail
function showDestinationDetail(destId) {
    const dest = getDestinationById(destId);
    if (!dest) return;

    const detailContent = document.getElementById('detail-content');
    
    const photosHtml = dest.media.photos && dest.media.photos.length > 0 
        ? `<div class="detail-gallery">${dest.media.photos.map(p => `<div class="gallery-item">${p}</div>`).join('')}</div>`
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

    detailContent.innerHTML = `
        <div class="detail-header">
            <h2>${dest.name}</h2>
            <div class="detail-meta">
                <span>📍 ${dest.location}</span>
                <span>⭐ ${dest.rating}/5.0</span>
                <span>${getCategoryLabel(dest.category)}</span>
            </div>
        </div>

        <div class="detail-image">
            ${getCategoryEmoji(dest.category)}
        </div>

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
