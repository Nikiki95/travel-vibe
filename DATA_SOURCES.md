# 📊 Datenquellen-Analyse für TravelVibe

## 1. Bildquellen (100% Kostenlos & Legal)

### 🥇 Wikimedia Commons (Beste für entlegene Regionen)
- **URL:** commons.wikimedia.org
- **Lizenz:** CC-BY-SA, Public Domain
- **Vorteile:** 
  - Millionen von hochwertigen Bildern
  - Ausgezeichnete Dokumentation von entlegenen Regionen
  - Geokoordinaten oft vorhanden
  - Wikidata-Integration
- **API:** Ja, über MediaWiki API
- **Ideal für:** Nationalparks, historische Stätten, abgelegene Dörfer

### 🥈 Unsplash
- **URL:** unsplash.com
- **Lizenz:** Unsplash License (kostenlos für alle Zwecke)
- **Vorteile:** Sehr hochwertig, moderne Ästhetik
- **Limitierung:** Weniger entlegene Regionen, mehr touristische Hotspots
- **API:** Ja, 50 requests/hour kostenlos

### 🥉 Pexels
- **URL:** pexels.com
- **Lizenz:** Pexels License (kostenlos)
- **Vorteile:** Gute Videos verfügbar
- **API:** Ja, 200 requests/hour

### 📸 Pixabay
- **URL:** pixabay.com
- **Lizenz:** Pixabay License
- **API:** Ja, erfordert API Key

## 2. Orts- & Beschreibungsdaten

### 🗺️ Wikidata
- **URL:** wikidata.org
- **Lizenz:** CC0 (Public Domain)
- **Enthält:**
  - Millionen von Orten weltweit
  - Geokoordinaten
  - Beschreibungen in 300+ Sprachen
  - Kategorien (Natur, Kultur, etc.)
  - Bild-Referenzen zu Commons
- **API:** SPARQL Query Service

### 🌐 Wikipedia
- **URL:** wikipedia.org
- **Lizenz:** CC-BY-SA
- **API:** REST API verfügbar
- **Ideal für:** Beschreibungen, Geschichte, Kultur

## 3. Entlegene Regionen - Strategie

### Kontinente & Regionen mit hohem "Hidden Gem" Potenzial:

**🏔️ Zentralasien**
- Pamir Highway (Tadschikistan)
- Song-Kul See (Kirgisistan)
- Alay Valley

**🏝️ Ozeanien**
- Vanuatu Vulkan
- Papua-Neuguinea Highlands
- Salomon-Inseln
- Mikronesien

**🌵 Patagonien & Feuerland**
- Torres del Paine
- El Chaltén
- Karotten-Route

**🐪 Sahara & Sahel**
- Tadrart Acacus (Libyen)
- Ennedi Plateau (Tschad)
- Djenné (Mali)

**🏔️ Himalaya & Tibet**
- Mustang Region (Nepal)
- Ladakh (Indien)
- Bhutan

**🌲 Sibirien & Russischer Fernost**
- Kamtschatka
- Baikalsee
- Altai-Gebirge

**🏜️ Australisches Outback**
- Uluru-Kata Tjuta
- Kimberley Region
- Simpson Desert

## 4. Implementierungs-Strategie

### Manuelle Kuratierung (Empfohlen für Qualität)
1. Wikimedia Commons durchsuchen nach "Remote + Landscape"
2. Beste Bilder manuell auswählen
3. Wikidata für Beschreibungen & Koordinaten
4. Erlebnis-Beschreibungen mit KI/Template generieren

### Halb-Automatisch (Skalierung)
```sparql
# Wikidata Query für entlegene Orte
SELECT ?place ?placeLabel ?coord ?image WHERE {
  ?place wdt:P31 wd:Q12323;  # Naturfeature
         wdt:P625 ?coord;    # Koordinaten
         wdt:P18 ?image.     # Bild
  FILTER EXISTS { ?place wdt:P131 ?country. }
  FILTER NOT EXISTS { ?place wdt:P31 wd:Q484701. } # Keine Städte
}
LIMIT 100
```

## 5. Content-Strategie für "Experience"

Da echte Erfahrungsberichte fehlen, können wir:

1. **Template-basierte Beschreibungen** verwenden:
   ```
   "[Ort] ist [Adjektiv] — [Eigenschaft]. 
   Du spürst [Gefühl], wenn [Situation]. 
   Perfekt für [Zielgruppe]."
   ```

2. **Wikipedia-Extrakte** paraphrasieren

3. **Prompting für beschreibende Texte** (die App soll ja "Erlebnisse" vermitteln)

## 6. Empfohlene Bild-URLs (Sofort verwendbar)

### Via CDN laden (keine lokale Speicherung nötig):
- Unsplash: `https://images.unsplash.com/photo-{ID}?w=800&q=80`
- Wikimedia: `https://upload.wikimedia.org/wikipedia/commons/{path}`

### Vorteile von Wikimedia:
- Stabilere URLs
- Bessere Dokumentation
- Mehr entlegene Orte
- Echte Informationen verfügbar

### Vorteile von Unsplash:
- Häufig schönere Komposition
- Moderne Fotografie
- Bessere Performance

## 7. Qualitätskriterien

Ein gutes TravelVibe-Ziel sollte haben:
- ✓ Mindestens 3 hochwertige Bilder
- ✓ Klare Geokoordinaten
- ✓ Einzigartige Erfahrung/Erlebnis
- ✓ Praktische Tipps
- ✓ Keine overcrowded tourist spots
- ✓ "Warum sollte man hierher kommen?" klar kommuniziert

## 8. Skalierungsziel

- **Phase 1:** 50 Destinationen (Qualität)
- **Phase 2:** 200 Destinationen (Abdeckung)
- **Phase 3:** 500+ Destinationen (Weltweit)

Jede Destination braucht ca. 15-30 Minuten Kuratierung.

---

**Fazit:** Wikimedia Commons + Wikidata ist die beste Quelle für entlegene, dokumentierte Orte mit echten Informationen und freien Bildern.
