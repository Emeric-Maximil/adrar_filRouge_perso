import { createWebHistory, createRouter } from "vue-router";
// ! la ƒ° createRouter 
//* permet à VUE d'instancier une nouvelle instance router
/**
 * Liste des routes : 
 * - Liste des parties
 * - Banque de perso
 * - Compte
 * - Abonnement
 * - Connexion/Création de compte
 * - Nous contacter 
 * - Page d'aide
 * - DMCA
 * - Autres
 */

const routes =  [
    {
        path: "/",
        name: "home",
        component: () => import("./components/1-Homepage/Homepage.vue")
    },
    {
        path: "/characters",
        name: "characters",
        component: () => import("./components/2-connected/CharacterBank/Characters.vue")
    },
    // {
    //     path: "/add",
    //     name: "add",
    //     component: () => import("./components/2-connected/CharacterBank/AddCharacter.vue")
    // },
    {
        path: "/account",
        name: "account",
        component: () => import("./components/2-connected/Account/Account.vue")
    },
    {
        path: "/parties",
        name: "parties",
        component: () => import("./components/2-connected/partiesList/Parties.vue")
    },
    {
        path: "/subscription",
        name: "subscription",
        component: () => import("./components/2-notConnected/Subscription/Subscription.vue")
    },
    {
        path: "/sign",
        name: "sign",
        component: () => import("./components/2-notConnected/Sign.vue")
    },
    {
        path: "/contactUs",
        name: "contactUs",
        component: () => import("./components/2-connected/Account/Account.vue")
    },
    {
        path: "/help",
        name: "help",
        component: () => import("./components/2-connected/Account/Account.vue")
    },
    {
        path: "/DMCA",
        name: "DMCA",
        component: () => import("./components/2-connected/Account/Account.vue")
    },
    {
        path: "/other",
        name: "other",
        component: () => import("./components/2-connected/Account/Account.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        name: "error404",
        component: () => import("./components/0-components/Error404.vue")
    }
    ]
 
    const router = createRouter({
    history: createWebHistory(),
    routes,
    });
    
    export default router;