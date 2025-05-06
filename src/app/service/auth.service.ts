import {Injectable} from '@angular/core';
import {
    Auth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile
} from "@angular/fire/auth";
import {from, Observable} from "rxjs";
import {StorageModel} from "./storage";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private firebaseAuth: Auth) {
    }

    register(email: string, username: string, password: string): Observable<void> {
        const promise = createUserWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password
        ).then(response => {
            StorageModel.instance.push(response);
            updateProfile(response.user, {displayName: username})
        });
        return from(promise);
    }

    login(email: string, password: string) {
        const promise = signInWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password
        );
        return from(promise);
    }

    loginWithGoogle(): Observable<void> {
        const provider = new GoogleAuthProvider();

        const promise = signInWithPopup(this.firebaseAuth, provider)
            .then(result => {
                return updateProfile(
                    result.user,
                    {
                        displayName: result.user.displayName
                    }
                );
            })
            .catch(err => {
                console.error('Google sign-in error', err);
                throw err;
            });

        return from(promise);
    }
}
