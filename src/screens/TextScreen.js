import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('');

    return <View>
        <Text>Enter name:</Text>
        <TextInput 
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value = {name}
          onChangeText = {(newValue) => setName(newValue)  }
        />
        <Text>My name is {name}</Text>
    </View>
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 15

    }
});

export default TextScreen;