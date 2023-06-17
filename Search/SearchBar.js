import React from 'react'
import { TextInput, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

function SearchBar(props) {
    const { style, textInputStyle, chaneTextHandler, clearButtonMode } = props
    return (<View style={{
        backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        ...style
    }}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <FontAwesome name="search" size={15} />
            <TextInput style={{ flex: 1, paddingLeft: 10, ...textInputStyle }}
                clearButtonMode={clearButtonMode ?? 'never'}
                onChangeText={chaneTextHandler} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {props.children}
        </View>
    </View >)
}

export default SearchBar;
