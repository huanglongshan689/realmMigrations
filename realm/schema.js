
'use strict';
import schema1 from './schemaVersion1';
import schema2 from './SchemaVersion2';

class Schema {
    /**所有版本模型*/
    schemas: Array<any>;

    constructor() {
        this.schemas = [
            schema1,
            schema2,
        ];
    }
    /**最新版本模型*/
    current() {
        return this.schemas[this.schemas.length - 1];
    }
}

module.exports = Schema;