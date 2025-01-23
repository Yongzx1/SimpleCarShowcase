import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const jdmCars = [
  {
    id: '1',
    name: 'Nissan Skyline GT-R R34',
    price: '$70,000',
    year: '1999',
    image: 'https://example.com/skyline.jpg',
  },
  {
    id: '2',
    name: 'Toyota Supra MK4',
    price: '$50,000',
    year: '1993',
    image: 'https://example.com/supra.jpg',
  },
  {
    id: '3',
    name: 'Mazda RX-7 FD3S',
    price: '$40,000',
    year: '1992',
    image: 'https://example.com/rx7.jpg',
  },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to JDM Car Showcase</Text>
      <Button
        title="Browse JDM Cars"
        onPress={() => navigation.navigate('Browse')}
      />
    </View>
  );
}

function BrowseScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>JDM Cars</Text>
      <FlatList
        data={jdmCars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.carName}>{item.name}</Text>
            <Text>Price: {item.price}</Text>
            <Text>Year: {item.year}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Browse" component={BrowseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
});
