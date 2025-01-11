import mongoose, { model } from 'mongoose';
 

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    type:{type:String,required:true},
    color:{type:String},
    size:{type:String},
    origin:{type:String,required:true},
    model:{type:String,required:true},
    image1: { type: String },
    image2: { type: String },
    image3: { type: String },
    image4: { type: String },
    stock: { type: String, default: "0" },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
 
  export default mongoose.models.Product || mongoose.model('Product', ProductSchema);