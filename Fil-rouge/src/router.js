import { createWebHistory, createRouter } from "vue-router";
// ! la ƒ° createRouter 
//* permet à VUE d'instancier une nouvelle instance router
const routes =  [
    {
        path: "/",
        alias: "/characters",
        name: "characters",
        component: () => import("./components/2-connected/CharacterBank/Characters.vue")
    },
    {
        path: "/add",
        name: "add",
        component: () => import("./components/2-connected/CharacterBank/AddCharacter.vue")
    }
    ];
    
    const router = createRouter({
    history: createWebHistory(),
    routes,
    });
    
    export default router;