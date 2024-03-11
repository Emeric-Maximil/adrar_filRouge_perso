// router.js

import firebase from "firebase/app";
import "firebase/auth";

const authGuard = (to, from, next) => {
    console.log('authGuard');
  const authListener = firebase.auth().onAuthStateChanged(function (user) {
    // alert('yoyoyo')
    if (!user) {
      // L'utilisateur n'est pas connecté, redirigez-le vers la page d'accueil
      alert(`AUTHGUARD
            Vous devez être connecté pour voir ceci. 
            Redirection à la page d\'accueil.`);
      next("/register");
    } else {
      // L'utilisateur est connecté, autorisez la navigation
      next();
    }
  });

  // Assurez-vous de détacher l'écouteur lorsqu'il n'est plus nécessaire
  // pour éviter les problèmes de fuite mémoire
  authListener();
};

export default authGuard;
