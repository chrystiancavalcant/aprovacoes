const config = {
    apiKey: "AIzaSyCzh-QWklyGx9VfKlqgr8tKYnFMYC7mV_U",
    authDomain: "publish-4d89b.firebaseapp.com",
    databaseURL: "https://publish-4d89b.firebaseio.com",
    projectId: "publish-4d89b",
    storageBucket: "gs://publish-4d89b.appspot.com",
    messagingSenderId: "326941618090"
}


const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')
require('firebase/auth')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const database = app.database()
export const storage = app.storage()
export const auth = app.auth()

export default base 