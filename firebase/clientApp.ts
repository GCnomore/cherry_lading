import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

export const initFirebase = () => {
  try {
    const app = initializeApp(firebaseConfig);
    return app;
  } catch (error) {
    console.log("initFirebase", error);
  }
};

export const initFbAnalytics = () => {
  if (typeof window !== "undefined") {
    try {
      const analytics = getAnalytics(initFirebase());
    } catch (error) {
      console.log("init analytics", error);
    }
  }
};
