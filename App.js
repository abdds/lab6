import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Doğru SafeAreaView importu
import ProfileCard from './components/ProfileCard'; // ProfileCard bileşeni importu

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* ScrollView, ekran içeriği uzun olduğunda kaydırma özelliği ekler */}
      <ScrollView style={styles.content}> 
        
        {/* ProfileCard bileşenlerini statik verilerle render ediyoruz */}
        <ProfileCard 
          name="Ada Lovelace"
          role="Mathematician"
          imageSource={require('./assets/ada.png')} // Resimlerin assets klasöründen yüklenmesi
        />
        <ProfileCard 
          name="Grace Hopper"
          role="Computer Scientist"
          imageSource={require('./assets/grace.png')}
        />
        <ProfileCard 
          name="Hedy Lamarr"
          role="Inventor & Actress"
          imageSource={require('./assets/hedy.png')}
        />
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ekranın tamamını kaplamasını sağlar
    backgroundColor: '#f0f2f5', // Açık gri arka plan rengi
  },
  content: {
    padding: 20, // İçeriğe genel kenar boşluğu ekler
  },
});