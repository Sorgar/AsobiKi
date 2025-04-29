import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({

  //Style Global (utilisé partout)
  container: {
    flex: 1,
    backgroundColor: '#FFC300',
    alignItems: 'center',
    paddingTop: 40,
  },

  header: {
    alignItems: 'center',
    marginBottom: 10,
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
    textAlign: 'center',
  },

  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },

  backImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  
  // Style de la page HomeScreen
  searchBar: {
    width: '90%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  pixelButton: {
    margin: 10,
    width: 150,
    height: 150,
  },
  buttonBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    top: -10,
  },
  scrollContainer: {
    backgroundColor: '#FFC300',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },

  // Page GameListScreen
  card: {
    margin: 8,
    width: '45%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartoucheBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 18,
    paddingBottom: 10,
  },
  gameListImage: {
    width: 115,
    height: 75,
    resizeMode: 'stretch',
    marginBottom: 15,
    top: 11,
  },
  imagePlaceholder: {
    width: 90,
    height: 100,
    backgroundColor: '#ccc',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  placeholderText: {
    fontSize: 10,
    color: '#666',
  },
  gameTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 4,
    overflow: 'hidden',
  },

  // Page GameDetailScreen
  gameDetailImage: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  
  section: {
    width: '90%',
    marginBottom: 20,
  },

  info: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 6,
  },

  separator: {
    width: '80%',
    height: 1,
    backgroundColor: '#aaa',
    marginVertical: 10,
    alignSelf: 'center',
  },

  //  Page du LoadingScreen 
  loadingContainer: {
    flex: 1,
    backgroundColor: '#FFC300',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

});
