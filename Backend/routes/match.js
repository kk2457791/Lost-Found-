import express from 'express';
import natural from 'natural';
import fetch from 'node-fetch';
const router = express.Router();

// Rudimentary text similarity using natural
const tokenizer = new natural.WordTokenizer();

function textSimilarity(textA, textB) {
  if (!textA || !textB) return 0;
  const wordsA = tokenizer.tokenize(textA.toLowerCase());
  const wordsB = tokenizer.tokenize(textB.toLowerCase());
  const intersection = wordsA.filter(word => wordsB.includes(word));
  return intersection.length;
}

// Sample AI matching route using text similarity and dummy image similarity placeholder
router.post('/', async (req, res) => {
  const { foundItemId } = req.body;

  try {
    const foundItem = await Item.findById(foundItemId);
    if (!foundItem) return res.status(404).json({ error: 'Found item not found' });

    const lostItems = await Item.find({ type: 'lost' });

    // Compute similarity scores
    const scoredItems = lostItems.map(item => {
      const textScore = textSimilarity(item.description, foundItem.description);
      // For prototype, image similarity can be simulated or later replaced by real AI model
      const imageScore = 0; // Placeholder for image similarity result
      const totalScore = textScore + imageScore;
      return { item, score: totalScore };
    });

    scoredItems.sort((a, b) => b.score - a.score);

    // Return top 3 matches
    res.json(scoredItems.slice(0, 3));

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
    
