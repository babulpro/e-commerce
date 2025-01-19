import getData from "@/components/allFunction/getData";
import PlainLayout from "@/components/Master/PlainLayout";
import Product from "@/components/utilits/Product";

 
 

 

export default async function Page() {
  let data = await getData("http://localhost:3000/api/dashBoard/category");
  let data2 = await getData("http://localhost:3000/api/dashBoard/product");
   
  return (
    
        <PlainLayout data = {data}>

           <div className="">
              <Product data = {data2} />
           </div>
        </PlainLayout>
     
  );
}
