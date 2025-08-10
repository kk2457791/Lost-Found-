/*import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  type: { type: String, enum: ['lost', 'found'], required: true },
  description: String,
  imageUrl: String,
  location: { lat: Number, lng: Number },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Item', ItemSchema);
  */
