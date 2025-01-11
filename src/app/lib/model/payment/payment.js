import mongoose from 'mongoose';
 

const PaymentSchema = new mongoose.Schema({
                
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
        paymentMethod: { type: String, enum: ['credit_card', 'paypal', 'bank_transfer','bikash','nagad','rocket'], required: true },
        status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
        transactionId: { type: String },
        createdAt: { type: Date, default: Date.now },
     
  });
  
 
  export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);

