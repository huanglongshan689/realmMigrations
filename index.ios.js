/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
TouchableOpacity,
} from 'react-native';


import  Configure  from  './realm/configure';
import  Current  from  './realm/index';


// /**版本1*/
// const Realm = require('realm');
// export default class realmMigrations extends Component {
//     render() {
//         let realm = new Realm();
//         realm.write(() => {
//             realm.create('Person', {
//             name: 'Joe',
//             birthday: '2019-09-09',
//         })
//     });
//         let   person = realm.objects('Person');
//
//         return (
//             <View style={styles.container}>
//     <Text style={styles.welcome}>
//         {person[0].name}:{person[0].birthday}
//     </Text>
//         </View>
//     );
//     }
// }


/**版本2*/
export default class realmMigrations extends Component {
    render() {
        Configure.configure();
        let personRealm = Current.current();
        let results  =personRealm.objects('Person');
        // person.write({
        //
        // })

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {results[0].firstName}:{personRealm.path}
                </Text>
            </View>
        );
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 20,
  },
});

AppRegistry.registerComponent('realmMigrations', () => realmMigrations);
