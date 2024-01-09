import { createWebHistory, createRouter } from "vue-router";
// ! la ƒ° createRouter 
//* permet à VUE d'instancier une nouvelle instance router
const routes =  [
    {
        path: "/",
        alias: "/charaters",
        name: "charaters",
        component: () => import("./components/CharacterList.vue")
    },
    {
        path: "/add",
        name: "add",
        component: () => import("./components/AddCharacter.vue")
    }
    ];
    
    const router = createRouter({
    history: createWebHistory(),
    routes,
    });
    
    export default router;