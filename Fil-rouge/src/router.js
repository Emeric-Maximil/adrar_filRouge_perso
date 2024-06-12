import { createWebHistory, createRouter } from "vue-router";

// ! la ƒ° createRouter 
//* permet à VUE d'instancier une nouvelle instance router


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
        path: "/sign",
        name: "sign",
        component: () => import("./components/2-notConnected/Sign.vue")
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
        path: "/connexion",
        name: "connexion",
        component: () => import("./components/Connexion.vue")
    },{
        path: "/inscription",
        name: "inscription",
        component: () => import("./components/inscription.vue")
    },

    {
        path: "/other",
        name: "other",
        component: () => import("./components/2-notConnected/Other.vue")    },
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