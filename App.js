import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const jdmCars = [
  {
    id: '1',
    name: 'Nissan Skyline GT-R R34',
    price: '₱4,104,520',
    year: '1999',
    engine: 'RB26DETT 2.6L I6',
    power: '280 hp',
    torque: '392 Nm',
    image: require('./assets/skylines1.png'),
    description: 'The Nissan Skyline GT-R R34 is a legendary JDM sports car known for its advanced technology, iconic design, and racing heritage. It gained global recognition as one of the most tunable and high-performing cars of its era.',
  },
  {
    id: '2',
    name: 'Toyota Supra MK4',
    price: '₱2,931,800',
    year: '1993',
    engine: '2JZ-GTE 3.0L I6',
    power: '276 hp',
    torque: '318 Nm',
    image: require('./assets/supras2.png'),
    description: 'The Toyota Supra MK4 is a cult classic, powered by the legendary 2JZ engine. It became famous for its incredible tuning potential and sleek, timeless design, making it a favorite among car enthusiasts and racers.',
  },
  {
    id: '3',
    name: 'Mazda RX-7 FD3S',
    price: '₱2,345,440',
    year: '1992',
    engine: '13B Rotary Engine',
    power: '276 hp',
    torque: '314 Nm',
    image: require('./assets/rx72.png'),
    description: 'The Mazda RX-7 FD3S features a lightweight rotary engine and a sleek design, making it one of the most iconic JDM sports cars. Its balance of performance and style has earned it a place in automotive history.',
  },
  {
    id: '4',
    name: 'Nissan Silvia S14',
    price: '₱1,756,300',
    year: '1994',
    engine: 'SR20DET 2.0L I4 Turbo',
    power: '217 hp',
    torque: '274 Nm',
    image: require('./assets/s141.png'),
    description: 'The Nissan Silvia S14 is a lightweight and stylish coupe designed for enthusiasts. Its rear-wheel drive layout, balanced chassis, and turbocharged engine made it a popular choice for drifting and tuning.',
  },
  {
    id: '5',
    name: 'Honda Civic Type R (2020)',
    price: '₱3,150,000',
    year: '2020',
    engine: 'K20C1 2.0L I4 Turbo',
    power: '306 hp',
    torque: '400 Nm',
    image: require('./assets/typer1.png'),
    description: 'The 2020 Honda Civic Type R is a modern hot hatch with track-focused performance and aggressive styling. Its turbocharged engine, lightweight design, and advanced aerodynamics make it a leader in its class.',
  },
  {
    id: '6',
    name: 'Mitsubishi Lancer Evolution IX',
    price: '₱2,520,000',
    year: '2005',
    engine: '4G63T 2.0L I4 Turbo',
    power: '286 hp',
    torque: '392 Nm',
    image: require('./assets/evo61.png'),
    description: 'The Mitsubishi Lancer Evolution IX is an iconic rally-inspired sedan, offering superb all-wheel-drive handling and a turbocharged engine. Its aggressive looks and performance earned it a loyal fan base worldwide.',
  },
];


function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      {/* JDM Logo */}
      <Image source={require('./assets/jdm3.png')} style={styles.logo} />

      <Text style={styles.title}>Welcome to JDM Car Showcase</Text>
      <Button
        title="Browse JDM Cars"
        onPress={() => navigation.navigate('Browse')}
      />
      {/* Introduction Text */}
      <Text style={styles.introText}>
      JDM stands for Japanese domestic market and refers to Japan's home market for vehicles and parts. Strictly speaking, only cars that are made specifically for the Japanese market fall under this term.
      </Text>
    </View>
  );
}

function BrowseScreen({ navigation }) {
  return (
    <View style={styles.browseContainer}>
      <Text style={styles.title}>JDM Cars</Text>
      <FlatList
        data={jdmCars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.carName}>{item.name}</Text>
            <Text>Price: {item.price}</Text>
            <Text>Year: {item.year}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('CarDetails', { car: item })}
            />
          </View>
        )}
        contentContainerStyle={styles.browseListContent} // Centering FlatList items
      />
    </View>
  );
}

function CarDetailsScreen({ route }) {
  const { car } = route.params;

  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{car.name}</Text>
      <Image source={car.image} style={styles.image} />
      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>Price: {car.price}</Text>
        <Text style={styles.descriptionText}>Year: {car.year}</Text>
        <Text style={styles.descriptionText}>Engine: {car.engine}</Text>
        <Text style={styles.descriptionText}>Power: {car.power}</Text>
        <Text style={styles.descriptionText}>Torque: {car.torque}</Text>
        <Text style={styles.descriptionText}>{car.description}</Text>
      </View>
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
  homeContainer: {
    flex: 1,
    justifyContent: 'center', // Centers items vertically
    alignItems: 'center', // Centers items horizontally
    backgroundColor: '#f0f8ff',
    paddingVertical: 40, // Adds spacing on top and bottom
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
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
  description: {
    fontSize: 16,
    marginTop: 15,
    paddingHorizontal: 20,
    textAlign: 'center',
    lineHeight: 22,
    color: '#555',
  },
  descriptionBox: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  descriptionText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333',
  },
  introText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    color: '#555',
    lineHeight: 22,
  },
  browseContainer: {
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
    backgroundColor: '#f0f8ff', // Match background color with HomeScreen
    padding: 20, // Padding for the overall screen
  },
  browseListContent: {
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
    paddingBottom: 20, // Add space at the bottom for a clean look
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    backgroundColor: '#f0f8ff', // Match background color with other screens
    padding: 20, // Add padding for spacing
  },
  descriptionBox: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center', // Centers text inside the box
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  descriptionText: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center', // Centers each text line
    color: '#333',
  },
});
