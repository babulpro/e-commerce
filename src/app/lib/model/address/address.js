import mongoose from 'mongoose';
 

const AddressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    type: { type: String, enum: ['shipping', 'billing'], required: true }
  });
  
 
  export default mongoose.models.Address || mongoose.model('Address', AddressSchema);