import mongoose from 'mongoose';
 

const CartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },    
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    price: { type: String, required: true },
    name:{type:String ,required:true}
     
  });
  
 
  export default mongoose.models.Cart || mongoose.model('Cart', CartSchema);