import { createUserWithEmailAndPassword , getAuth,  signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { app } from "./firebaseConfig";
const auth =getAuth(app)

export const signIn = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res.user;
    } catch (error) {
    console.log(error.message);
    }
  };
  export const signUp= async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      return res.user;
    } catch (error) {
    console.log(error.message);
    }
  };
export const Resetpassword=(email)=>{
  return sendPasswordResetEmail(auth,email)
}