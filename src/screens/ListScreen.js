import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {
  
    const friends = [
        {name: 'Shukaku', age: '1000'},
        {name: 'Matabi', age: '2000'},
        {name: 'Isobu', age: '3000'},
        {name: 'Son Goku', age: '4000'},
        {name: 'Kokuo', age: '5000'},
        {name: 'Saiken', age: '6000'},
        {name: 'Chomei', age: '7000'},
        {name: 'Gyuki', age: '8000'},
        {name: 'Kurama', age: '9000'}
    ];

    return (
      <FlatList 
        keyExtractor={(friend) => friend.name }
        data={friends} 
        renderItem={( {item} ) => {
          return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
        }}
      />
    );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  } 
});

export default ListScreen