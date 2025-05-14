import { Injectable } from '@angular/core';
import {
    Auth,
    User,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile, signOut,
} from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IUserModel } from '@app/model/iuser.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
    userData?: User;

    constructor(
        private auth: Auth,
        private firestore: Firestore,
        private router: Router
    ) {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                localStorage.removeItem('user');
            }
        });
    }

    public register(email: string, username: string, password: string): Promise<void> {
        return createUserWithEmailAndPassword(this.auth, email, password)
            .then(({ user }) => {
                if (!user) return;
                return this.setUserData(user);
            })
            .catch(err => { throw err; });
    }

    public login(email: string, password: string) {
        return signInWithEmailAndPassword(this.auth, email, password)
            .then(({ user }) => {
                if (!user) return;
                return this.setUserData(user)
                    .then(() => this.router.navigate(['dashboard']));
            })
            .catch(err => { throw err; });
    }

    public loginWithGoogle(): Observable<void> {
        const provider = new GoogleAuthProvider();
        const p = signInWithPopup(this.auth, provider)
            .then(({ user }) =>
                updateProfile(user, { displayName: user.displayName })
            );
        return from(p);
    }

    private setUserData(user: User): Promise<void> {
        const ref = doc(this.firestore, `users/${user.uid}`);
        const data: IUserModel = {
            uid: user.uid,
            email: user.email!,
            displayName: user.displayName!,
            emailVerified: user.emailVerified,
        };
        return setDoc(ref, data, { merge: true });
    }

    get isLoggedIn(): boolean {
        return !!localStorage.getItem('user');
    }

    public signOut(): Promise<void> {
        return signOut(this.auth).then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['login']);
        });
    }
}
