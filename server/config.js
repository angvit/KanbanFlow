const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyCLfGORVR1wU8bz9swMTO6kNKLObMq8eqs",
  authDomain: "kanbanflow-clone.firebaseapp.com",
  projectId: "kanbanflow-clone",
  storageBucket: "kanbanflow-clone.appspot.com",
  messagingSenderId: "720847447815",
  appId: "1:720847447815:web:3875e02f7d65e0453a07a2",
  measurementId: "G-HFTGX3QFGT",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("users");
const Workspace = db.collection("workspaces");
const Dashboard = db.collection("dashboards");
module.exports = { User, Workspace, Dashboard };
