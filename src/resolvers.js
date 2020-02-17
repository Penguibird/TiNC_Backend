module.exports = {
    Query: {
        entries: (_, __, { dataSources }) =>
            dataSources.crmProvider.getAllEntries(),
        entry: (_, { id }, { dataSources }) =>
            dataSources.crmProvider.getEntryByID(id),
        cities: (_, __, { dataSources }) =>
            dataSources.cityProvider.getAllCities(),
        city: (_, { id }, { dataSources }) =>
            dataSources.cityProvider.getCityByID(id),
        interests: (_, __, { dataSources }) =>
            dataSources.interestProvider.getAllInterests(),
        interest: (_, { id }, { dataSources }) =>
            dataSources.interestProvider.getInterestByID(id),
    },
    Mutation: {
        updateEntry: (_, args, { dataSources }) => {
            // console.log(args)
            dataSources.crmProvider.updateEntry(args)
        },
        addSomething: (_, args, { dataSources }) => {
            dataSources.crmProvider.addSomething(args)
        },
        removeSomething: (_, args, { dataSources }) => {
            dataSources.crmProvider.removeSomething(args)
        },
        createEntry: (_, args, { dataSources }) => {
            dataSources.crmProvider.createEntry(args)
        },
        removeEntry: (_, args, { dataSources }) => {
            dataSources.crmProvider.removeEntry(args)
        },
    }
}