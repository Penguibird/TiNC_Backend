let db = require('./databaseProvider');

class CityProvider {
    constructor() {
        this.ref = db.collection('cities');
    }

    async getAllCities() {
        return await this.ref.get()
            .then(snapshot => { return snapshot.docs.map(doc => doc.data()) })
    }
    async getCityByID(id) {
        return await this.ref.get.document(id).get()
            .then(snapshot => { return snapshot.docs.data })
    }
}

module.exports = CityProvider