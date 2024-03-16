const firebase = require("firebase");
require("dotenv").config();
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("users");
const Workspace = db.collection("workspaces");
const Dashboard = db.collection("dashboards");
const DashboardContainer = db.collection("DashboardContainer");
const Task = db.collection("tasks");
module.exports = { User, Workspace, Dashboard, DashboardContainer, Task };
