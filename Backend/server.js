import express from 'express';
//import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/*mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', () => console.log('✅ MongoDB connected'));
*/
import itemRoutes from './routes/items.js';
import matchRoutes from './routes/match.js';
import reputationRoutes from './routes/reputation.js';
import hotspotsRoutes from './routes/hotspots.js';
import userRoutes from './routes/users.js';

app.use('/api/items', itemRoutes);
app.use('/api/match', matchRoutes);
app.use('/api/reputation', reputationRoutes);
app.use('/api/hotspots', hotspotsRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
