import { writable } from "svelte/store";
import { auth } from "../firebase/firebase.client";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const authStore = writable({
    isLoading: true,
    currentUser: null,
    profile: null
})

export const authHandlers = {
    login: async(email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
    },
    signup: async(email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password)
    },
    logout: async() => {
        return await signOut(auth)
    }
}
