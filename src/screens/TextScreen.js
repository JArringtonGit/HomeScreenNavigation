import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
    const [password, setPassword] = useState('');

    return <View>
        <Text>Enter Password:</Text>
        <TextInput 
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value = {password}
          onChangeText = {(newValue) => setPassword(newValue)  }
        />
        {password.length < 4 ? <Text>Password cannot exceed 4 characters</Text> : null}
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