// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr       : false,
    apiUrl    : 'http://localhost:4200',
    firebase : {
        apiKey: "AIzaSyDNgQ8o5HP1RqPi98DmG_Xvo1OMS71fEj4",
    authDomain: "hello-foodie-a347b.firebaseapp.com",
    databaseURL: "https://hello-foodie-a347b.firebaseio.com",
    projectId: "hello-foodie-a347b",
    storageBucket: "hello-foodie-a347b.appspot.com",
    messagingSenderId: "502735438411",
    appId: "1:502735438411:web:315c536c8fc6fbb80083ce",
    measurementId: "G-SRNBGB32BE"
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
