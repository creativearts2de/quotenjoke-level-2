  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCDDLBBCiea5DFFvZ0zrb_8pXIXMHu--UA",
    authDomain: "inaclause.firebaseapp.com",
    projectId: "inaclause",
    storageBucket: "inaclause.appspot.com",
    messagingSenderId: "703375671573",
    appId: "1:703375671573:web:97b236850cc954323b291c",
    measurementId: "G-F6BYDF6N4M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app)

  // get the quotes
  let allQuotes = []
  async function getQuotes (db){
    const quoteCol = collection(db, 'quotes')
    const qoutesSnapshot = await getDocs(quoteCol)
    const quoteList = qoutesSnapshot.docs.map(doc => {
      let aquote = {
        author: doc.data().author,
        quoteBody: doc.data().quoteBody,
        quoteID: doc.id,
        cattegory: doc.data().cattegory
      }
      allQuotes.push(aquote)
    })
    return allQuotes
  }

let theData = getQuotes(db)
console.log(allQuotes)
  