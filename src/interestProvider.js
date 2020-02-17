let db = require('./databaseProvider');

class InterestProvider {
    constructor() {
        this.ref = db.collection('interests');
    }

    async getAllInterests() {
        return await this.ref.get()
            .then(snapshot => { return snapshot.docs.map(doc => doc.data()) })
    }
    async getInterestByID(id) {
        return await this.ref.get.document(id).get()
            .then(snapshot => { return snapshot.docs.data })
    }
}

module.exports = InterestProvider;