import firebase from '../firebase';
// ICI c'est une REF à l'endroit de notre """TABLE""" articles dans la BDD
const db = firebase.ref("/character");

class CharactersDataService {
    getAll(){
        return db;
    }

    create(character){
        return db.push(character);
    }

    update(key, value){
        return db.child(key).update(value);
    }

    delete(key){
        return db.child(key).remove();
    }

    deleteAll(){
        return db.remove();
    }
}

export default new CharactersDataService();