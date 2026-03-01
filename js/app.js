// Main App Logic

// Merge all destinations from both files
let allDestinations = [];

document.addEventListener('DOMContentLoaded', () => {
    // Wait for extended destinations to load, then merge
    setTimeout(() => {
        allDestinations = [...destinations];
        if (typeof extendedDestinations !== 'undefined') {
            allDestinations = [...allDestinations, ...extendedDestinations];
        }
        // Replace global destinations with merged list
        destinations.splice(0, destinations.length, ...allDestinations);
        console.log(`✅ TravelVibe loaded with ${destinations.length} destinations worldwide`);
        initializeApp();
    }, 100);
});

function initializeApp() {
    // Initial render
    renderDestinationCards();

    // Navigation
    document.getElementById('btn-home').addEventListener('click', function() {
        showView('view-home');
        updateNavigation(this);
        updateDestinationCount();
        // Initialize map when home view is shown
        setTimeout(() => initializeWorldMap(), 200);
    });

    document.getElementById('btn-discover').addEventListener('click', function() {
        showView('view-discover');
        updateNavigation(this);
        renderDestinationCards();
    });

    document.getElementById('btn-surprise').addEventListener('click', function() {
        surpriseMe();
        updateNavigation(this);
    });

    document.getElementById('btn-add').addEventListener('click', function() {
        showView('view-add');
        updateNavigation(this);
    });

    // Home button
    document.getElementById('btn-start').addEventListener('click', function() {
        document.getElementById('btn-discover').click();
    });

    // Back button
    document.getElementById('btn-back').addEventListener('click', function() {
        document.getElementById('btn-discover').click();
    });

    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.filter;
            const filtered = getDestinationsByCategory(category);
            renderDestinationCards(filtered);
        });
    });

    // Form submission
    document.getElementById('form-add').addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const newDest = {
            name: formData.get('name'),
            location: formData.get('location'),
            category: formData.get('category'),
            description: formData.get('description'),
            experience: formData.get('experience'),
            media: {
                video: formData.get('video') || null,
                photos: formData.get('photos') ? formData.get('photos').split(',').map(p => p.trim()) : [],
                clip: null
            },
            tips: formData.get('tips') ? formData.get('tips').split('\n').map(t => t.trim()).filter(t => t) : [],
            vibe: 'adventurous'
        };

        addDestination(newDest);

        // Show success message
        alert(`✅ Danke! "${newDest.name}" wurde hinzugefügt! Jeder kann es jetzt sehen.`);

        // Reset form
        this.reset();

        // Go back to discover view
        document.getElementById('btn-discover').click();
    });
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 's' && e.ctrlKey) {
        e.preventDefault();
        document.getElementById('btn-surprise').click();
    }
});
