const db = require('./databaseProvider');
const admin = require('firebase-admin');
const uuid = require('uuid/v1');

class CrmProvider {
  constructor() {
    this.ref = db.collection('crm');
  }

  async getAllEntries() {
    return await this.ref.get()
      .then(snapshot => { return snapshot.docs.map(doc => doc.data()) })
  }
  async getEntryByID(id) {
    return await this.ref.doc(id).get()
      .then(snapshot => { return snapshot.data() })
  }
  async getEntriesByCity(city) {
    return await this.ref.where('city', '==', city).get()
      .then(snapshot => { return snapshot.docs.map(doc => doc.data()) })
  }
  async getEntriesByInterest(interest) {
    return await this.ref.where('interest', '==', interest).get()
      .then(snapshot => { return snapshot.docs.map(doc => doc.data()) })
  }
  async updateEntry(args) {
    return await this.ref.doc(args.id).set(args.input)
      .then(snapshot => { return 'success' })
  }
  async addSomething(args) {
    return await this.ref.doc(args.id).update({
      [args.field]: admin.firestore.FieldValue.arrayUnion(args.input),
    })
      .then(snapshot => { return 'success' });
  }
  async removeSomething(args) {
    console.log("REMOVE SOMETHING WAS CALLED")
    return await this.ref.doc(args.id).update({
      [args.field]: admin.firestore.FieldValue.arrayRemove(args.input),
    })
      .then(snapshot => { return 'success' });
  }
  async createEntry(args) {
    let id = uuid();
    return await this.ref.doc(args.input.id).set(args.input)
      .then(snapshot => {
        return 'succcess'
      });
  }
  async removeEntry(args) {
    return await this.ref.doc(args.id).delete();
  }
}

module.exports = CrmProvider;