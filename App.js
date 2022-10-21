import * as React from 'react';
import { Button, View, Text,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





  


function HomeScreen({ navigation }) {
  return (
    <View style={{   flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
      <Text> First Project in react Native by Abdul Basit  </Text>
      
      <Button
         color="#f0b905"
        title="Check my information"
        onPress={() => navigation.navigate('Myinformation')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Name : Abdul Basit{"\n"} </Text>
      <Text> CONTACT : 03165146096 {"\n"}</Text>
      <Text> Location: Islamabad  </Text>
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mainpage">
        <Stack.Screen name=" Mainpage" component={HomeScreen} />
        <Stack.Screen name="Myinformation" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
