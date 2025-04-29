import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { RAWG_API_KEY } from '@env';
import { globalStyles } from '../styles/globalStyles';
import LoadingScreen from './LoadingScreen';

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const studios = [
    { name: 'Nintendo', logo: require('../assets/nintendo.png') },
    { name: 'SEGA', logo: require('../assets/sega.png') },
    { name: 'Square Enix', logo: require('../assets/squareenix.png') },
    { name: 'Capcom', logo: require('../assets/capcom.png') },
    { name: 'Bandai Namco', logo: require('../assets/bandai.png') },
    { name: 'Konami', logo: require('../assets/konami.png') },
  ];

  const japaneseStudios = [
    'Nintendo', 'SEGA', 'Capcom', 'Square Enix', 'Bandai Namco Entertainment', 'Konami',
    'Atlus', 'Level-5', 'FromSoftware', 'PlatinumGames', 'Game Freak',
    'Monolith Soft', 'Intelligent Systems', 'Nippon Ichi Software', 'Spike Chunsoft',
  ];

  async function handleSearch() {
    if (!search.trim()) return;

    try {
      setLoading(true);
      const searchResponse = await fetch(`https://api.rawg.io/api/games?search=${encodeURIComponent(search)}&key=${RAWG_API_KEY}&page_size=5`);
      const searchData = await searchResponse.json();

      if (searchData.results && searchData.results.length > 0) {
        let gameFound = null;

        for (const result of searchData.results) {
          const detailResponse = await fetch(`https://api.rawg.io/api/games/${result.id}?key=${RAWG_API_KEY}`);
          const gameDetail = await detailResponse.json();
          const companies = [
            ...(gameDetail.developers || []).map(d => d.name),
            ...(gameDetail.publishers || []).map(p => p.name),
          ];

          if (companies.some(company => japaneseStudios.includes(company))) {
            gameFound = gameDetail;
            break;
          }
        }

        setLoading(false);

        if (gameFound) {
          navigation.navigate('GameDetail', { game: gameFound });
        } else {
          Alert.alert('Pas un jeu japonais', 'Aucun jeu japonais trouvé.');
        }
      } else {
        setLoading(false);
        Alert.alert('Oh noon aucun jeu trouvé !', 'Essayez un autre jeu.');
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      Alert.alert('Erreur', 'Erreur lors de la recherche.');
    }
  }

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.header}>
        <Image source={require('../assets/asobiki_logo.png')} style={globalStyles.logo} />
        <Text style={globalStyles.title}>Bienvenue sur AsobiKi</Text>
        <Text style={globalStyles.subtitle}>La bibliothèque des jeux-vidéos japonais !</Text>
      </View>

      <TextInput
        style={globalStyles.searchBar}
        placeholder="Chercher un jeu..."
        placeholderTextColor="#666"
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}/>

      <Text style={globalStyles.sectionTitle}>Choisis ton studio préféré 👾</Text>

      <View style={globalStyles.logoContainer}>
        {studios.map((studio, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('GameList', { studio: studio.name })}
            style={globalStyles.pixelButton}>
            <ImageBackground
              source={require('../assets/tv_bouton.png')}
              style={globalStyles.buttonBackground}
              imageStyle={{ resizeMode: 'contain' }}>
              <Image source={studio.logo} style={globalStyles.logoImage} />
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>

      {loading && <LoadingScreen />}
    </ScrollView>
  );
}
