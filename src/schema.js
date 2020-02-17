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
        id: String!
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
        id: String!
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
        id: String!
        name: String
    }

    type Interest {
        id: String!
        name: String
    }

    type Mutation {
        createEntry(input: EntryInput!): String
        updateEntry(id: String!, input: EntryInput!): String
        removeEntry(id: String!): String
        addCity(input: CityInput!): String
        addSomething(id: String!, field: String!, input: String!): String
        removeSomething(id: String!, field: String!, input: String!): String

        updateCity(id: String!, value: String): String
        removeCity(id: String): String
        createInterest(input: InterestInput): String
        updateInterest(id: String!, value: String): String
        removeInterest(id: String!): String
    }
`

module.exports = schema;