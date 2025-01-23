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
    engine: 'RB26DETT 2.6L I6',
    power: '280 hp',
    torque: '392 Nm',
    image: './assets/skylines1.png',
  },
  {
    id: '2',
    name: 'Toyota Supra MK4',
    price: '$50,000',
    year: '1993',
    engine: '2JZ-GTE 3.0L I6',
    power: '276 hp',
    torque: '318 Nm',
    image: './assets/favicon.png',
  },
  {
    id: '3',
    name: 'Mazda RX-7 FD3S',
    price: '$40,000',
    year: '1992',
    engine: '13B Rotary Engine',
    power: '276 hp',
    torque: '314 Nm',
    image: './assets/rx72.png',
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

function BrowseScreen({ navigation }) {
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
            <Button
              title="View Details"
              onPress={() => navigation.navigate('CarDetails', { car: item })}
            />
          </View>
        )}
      />
    </View>
  );
}

function CarDetailsScreen({ route }) {
  const { car } = route.params;
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{car.name}</Text>
      <Image source={{ uri: car.image }} style={styles.image} />
      <Text>Price: {car.price}</Text>
      <Text>Year: {car.year}</Text>
      <Text>Engine: {car.engine}</Text>
      <Text>Power: {car.power}</Text>
      <Text>Torque: {car.torque}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Browse" component={BrowseScreen} />
        <Stack.Screen name="CarDetails" component={CarDetailsScreen} />
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
