import firebase from '../firebaseConfig';
// ICI c'est une REF à l'endroit de notre """TABLE""" articles dans la BDD
const myDataValue = localStorage.getItem('userEmail');
console.log(myDataValue);
const words = myDataValue.split('.');
let id = '';
for (let i = 0; i < words.length; i++) {
     id += words[i];
}
console.log(id);

const db = firebase.ref("/"+id);

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