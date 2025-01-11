import mongoose from 'mongoose';
 

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },    
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },     
    status: { type: String, enum: ['pending','packing','OnRoad', 'completed', 'canceled'], default: 'pending' },
    totalPrice: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
 
  export default mongoose.models.Order || mongoose.model('Order', OrderSchema);