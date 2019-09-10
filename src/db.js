import PouchDB from 'pouchdb';

export default class DB{
    constructor(name){
        this.db = new PouchDB(name);
    }

    
}