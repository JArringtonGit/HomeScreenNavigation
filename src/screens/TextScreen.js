import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
    return <View>
        <TextInput 
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
        />
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