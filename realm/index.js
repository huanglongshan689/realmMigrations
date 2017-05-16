
'use strict';
import Realm from 'realm';
import Schema from './schema';


/**获取最新版本数据库*/
function getCurrent() {
    var schema = new Schema();
    var current = schema.current();

    return new Realm(current);
}

module.exports = {
    current: getCurrent
}