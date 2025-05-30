export const environment = {
    production: false,
    firebase: {
        apiKey: import.meta.env.NG_APP_FIREBASE_API_KEY as string,
        authDomain: import.meta.env.NG_APP_FIREBASE_AUTH_DOMAIN as string,
        projectId: import.meta.env.NG_APP_FIREBASE_PROJECT_ID as string,
        storageBucket: import.meta.env.NG_APP_FIREBASE_STORAGE_BUCKET as string,
        messagingSenderId: import.meta.env.NG_APP_FIREBASE_MESSAGING_SENDER_ID as string,
        appId: import.meta.env.NG_APP_FIREBASE_APP_ID as string,
        measurementId: import.meta.env.NG_APP_FIREBASE_MEASUREMENT_ID as string,
    },

    elservier: {
        baseURL: import.meta.env.NG_APP_ELSEVIER_BASE_URL,
        apiKey: import.meta.env.NG_APP_ELSEVIER_API_KEY as string
    },
    google: import.meta.env.NG_APP_GOOGLE_API_KEY as string,
    baseUrl: import.meta.env.NG_APP_GOOGLE_BOOKS_API_BASE_URL as string
};
