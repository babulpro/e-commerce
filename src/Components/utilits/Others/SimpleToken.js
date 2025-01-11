

import { jwtVerify, SignJWT } from "jose";
const secret = new TextEncoder().encode('123-xyz')

export async function generateToken(price){
    return await new SignJWT({price})
      .setProtectedHeader({ alg: 'HS256' })  
      .setExpirationTime('1h')              
      .sign(secret);                         
  };
  
  // Usage
//   const data = { id: '67533321012fff400aca14eo', price: 25 };
//   const token = await generateToken(data);
//   console.log(`Encoded URL: /dashboard/pages/Booking?token=${token}`);
  
  export async function verifyToken(token){
    try {
      const { payload } = await jwtVerify(token, secret);
      return payload; // { id: "67533321012fff400aca14eo", price: 25 }
    } catch (err) {
      console.error('Invalid or expired token:', err);
      throw new Error('Token verification failed');
    }
  };
  
  

  