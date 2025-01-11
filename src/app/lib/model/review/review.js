import mongoose from 'mongoose';
 

const ReviewSchema = new mongoose.Schema({
            
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        rating: { type: String, min: 1, max: 5, required: true },
        comment: { type: String },
        status: {type: String,enum: ['pending', 'approved'],default: 'pending',required: true 
          },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
     
  });
  
 
  export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);

