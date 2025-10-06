import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  DocumentData,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXeljBoAjq31fiW2ex7eLJmdYpF0YKqaM",
  authDomain: "construction-83b3c.firebaseapp.com",
  projectId: "construction-83b3c",
  storageBucket: "construction-83b3c.firebasestorage.app",
  messagingSenderId: "821134377017",
  appId: "1:821134377017:web:d96b1804ca38a30d6f4de8",
  measurementId: "G-8WWZWFH4EE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const firestoreService = {
  // Get all documents from a collection
  getAllDocuments: async (collectionName: string) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const documents: DocumentData[] = [];

      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });

      return { success: true, data: documents };
    } catch (error) {
      console.error(`Error fetching documents from ${collectionName}:`, error);
      return { success: false, error };
    }
  },

  // Get a single document by ID
  getDocument: async (
    collectionName: string,
    docId: string
  ): Promise<DocumentData> => {
    try {
      const docRef = doc(db, collectionName, docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          success: true,
          id: docSnap.id,
          ...docSnap.data(),
        };
      } else {
        return { success: false, error: "Document not found" };
      }
    } catch (error) {
      console.error(`Error fetching document ${docId}:`, error);
      return { success: false, error };
    }
  },
};

export { db, analytics };
export default app;
