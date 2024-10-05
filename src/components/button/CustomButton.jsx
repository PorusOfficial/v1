import { View, Text, Button } from 'react-native';
import React from 'react';

const CustomButton = ({name}) => {

  return (
    <View>
      <Text style={{color :'black', fontWeight: "600" }}>{name}</Text>
      <Button title = "hell" onPres = {()=>{
        "jjjjj"
      }} />
    </View>
  );
};

export default CustomButton;
