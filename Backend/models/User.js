import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['owner', 'finder', 'admin'], default: 'owner' },
  points: { type: Number, default: 0 },
  badges: [String],
  reputationScore: { type: Number, default: 0 }
});

export default mongoose.model('User', UserSchema);
           
