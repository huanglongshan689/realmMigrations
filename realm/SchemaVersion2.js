const PersonSchema = {
    name: 'Person',
    properties: {
        firstName:     'string',
        firstLast:     'string',
        birthday:      'string',
    }
};

module.exports = {
        schema: [PersonSchema],
        schemaVersion: 2,
        migration: (oldRealm,newRealm)=>{
            if(oldRealm.schemaVersion<2){
                var  oldObject = oldRealm.objects('Person');
                var newObjects = newRealm.objects('Person');
                for (var i = 0; i < oldObject.length; i++) {
                    newObjects[i].firstName = oldObject[i].name+'数据迁移';
                    newObjects[i].lastName = oldObject[i].name+'数据迁移';
                }
            }
        }
};
