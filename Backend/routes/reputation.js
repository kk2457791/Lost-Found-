import express from 'express';
import User from '../models/User.js';
const router = express.Router();

// Endpoint to add points and badges for user (e.g., after verified returns)
router.post('/update', async (req, res) => {
  const { userId, points, badges } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (points) user.points += points;
    if (badges && badges.length > 0) {
      badges.forEach(badge => {
        if (!user.badges.includes(badge)) user.badges.push(badge);
      });
    }
    // Example: Simple reputation as sum of points
    user.reputationScore = user.points;
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
      
