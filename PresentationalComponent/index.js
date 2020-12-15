import React from 'react'
import { View, Text } from 'react-native'

export default function PresentationalComponent({data}) {
    return (
        <View>
            <Text>{data}</Text>
        </View>
    )
}
