import firebase from 'firebase'

export const config = {
  apiKey: "AIzaSyB8pf4jWJFtiU13FzVzZyohiL6kQZDC6o0",
  authDomain: "dankookie-job.firebaseapp.com",
  databaseURL: "https://dankookie-job.firebaseio.com",
  projectId: "dankookie-job",
  storageBucket: "dankookie-job.appspot.com",
  messagingSenderId: "34681990269"
}

firebase.initializeApp(config)

var firebaseRef = firebase.database().ref()
export default firebase
export var chatRef = firebaseRef.child('chat')