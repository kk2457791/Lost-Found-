import express from 'express';
const router = express.Router();

// Return predictive lost item hotspots using geo-location clustering
router.get('/', async (req, res) => {
  try {
    // For prototype, get lost items grouped by location rounded coordinates
    const lostItems = await Item.find({ type: 'lost' });
    const clusterMap = {};

    lostItems.forEach(item => {
      if (item.location?.lat && item.location?.lng) {
        const latKey = item.location.lat.toFixed(2); 
        const lngKey = item.location.lng.toFixed(2);
        const key = `${latKey},${lngKey}`;
        clusterMap[key] = (clusterMap[key] || 0) + 1;
      }
    });

    // Convert to array of hotspots
    const hotspots = Object.entries(clusterMap).map(([loc, count]) => {
      const [lat, lng] = loc.split(',');
      return {
        location: { lat: parseFloat(lat), lng: parseFloat(lng) },
        count
      };
    });

    // Sort descending by count (most hotspots first)
    hotspots.sort((a, b) => b.count - a.count);

    res.json(hotspots);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
      
