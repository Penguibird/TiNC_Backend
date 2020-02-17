const schema = `
    type Query {
        entries: [Entry]
        entry(id: String): Entry
        cities: [City]
        city(id: String): City
        interests: [Interest]
        interest(id: String): Interest
    }

    input EntryInput {
        institution: String!
        city: CityInput
        contacts: [ContactInput]
        notes: [String]
        interest: InterestInput
    }

    type Entry {
        id: String!
        institution: String!
        city: City
        contacts: [Contact]
        notes: [String]
        interest: Interest
    }

    input CityInput {
        name: String
    }

    type City {
        id: String!
        name: String!
    }

    input ContactInput {
        name: String!
        position: String
        phone: [String]
        email: [String]
    }

    type Contact {
        name: String!
        position: String
        phone: [String]
        email: [String]
    }
    
    input InterestInput {
        name: String
    }

    type Interest {
        id: String!
        name: String
    }

    type Mutation {
        createEntry(input: EntryInput!): String
        updateEntry(id: String!, field: String!, value: String!): String
        removeEntry(id: String!): String
        addContact(entryID: String!, input: ContactInput): String
        updateContact(entryID: String!, id: String!, field: String!, value: String!): String
        removeContact(entryID: String!, id: String!): String
        addNote(entryID: String!, input: String): String
        updateNote(entryID: String!, id: String!, value: String!): String
        removeNote(entryID: String!, id: String!): String
        addCity(input: CityInput!): String
        updateCity(id: String!, value: String): String
        removeCity(id: String): String
        createInterest(input: InterestInput): String
        updateInterest(id: String!, value: String): String
        removeInterest(id: String!): String
    }
`

module.exports = schema;