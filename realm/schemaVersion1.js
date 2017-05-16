const  PersonSchema = {
    name: 'Person',
    properties: {
        name: 'string',
        birthday: 'string',
    }
}

module.exports = {
        schema: [PersonSchema],
        schemaVersion: 1,
        migration: () => {}
};