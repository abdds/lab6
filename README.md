## 👤 Geliştirici

**Muhammed Hazem Kabbanı**  
Öğrenci No: 220404931
# ProfileApp

Bu proje, React Native ve Expo kullanılarak geliştirilmiş bir profil kartları uygulamasıdır. Uygulama, ünlü bilim insanlarının profil kartlarını görüntülemek için tasarlanmıştır.

## 📋 Proje Bilgileri

- **Öğrenci Adı:** Muhammed Hazem Kabbanı
- **Öğrenci Numarası:** 220404931
- **Proje Adı:** ProfileApp
- **Versiyon:** 1.0.0

## 🚀 Özellikler

- Üç farklı profil kartı görüntüleme (Ada Lovelace, Grace Hopper, Hedy Lamarr)
- Kaydırılabilir içerik (ScrollView)
- Güvenli alan desteği (SafeAreaView)
- Modern ve temiz kullanıcı arayüzü

## 📦 Kurulum

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn
- Expo CLI

### Adımlar

1. Projeyi klonlayın veya indirin:
```bash
cd lab6-master
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Uygulamayı başlatın:
```bash
npm start
```

veya platforma özel çalıştırma:

```bash
npm run android  # Android için
npm run ios       # iOS için
npm run web      # Web için
```

## 🏗️ Proje Yapısı

```
lab6-master/
├── App.js                 # Ana uygulama bileşeni
├── index.js              # Uygulama giriş noktası
├── app.json              # Expo yapılandırma dosyası
├── package.json          # Proje bağımlılıkları
├── components/
│   └── ProfileCard.js    # Profil kartı bileşeni
└── assets/
    ├── ada.png          # Ada Lovelace resmi
    ├── grace.png        # Grace Hopper resmi
    ├── hedy.png         # Hedy Lamarr resmi
    └── icon.png         # Uygulama ikonu
```

## 🛠️ Kullanılan Teknolojiler

- **React Native:** 0.81.5
- **Expo:** ~54.0.22
- **React:** 19.1.0
- **react-native-safe-area-context:** ~5.6.0

## 📱 Kullanım

Uygulama başlatıldığında, ekranda üç profil kartı görüntülenecektir:
- **Ada Lovelace** - Matematikçi
- **Grace Hopper** - Bilgisayar Bilimcisi
- **Hedy Lamarr** - Mucit & Aktris

Kartlar arasında gezinmek için ekranı yukarı veya aşağı kaydırabilirsiniz.

## 🎨 Bileşenler

### App.js
Ana uygulama bileşeni. SafeAreaView ve ScrollView kullanarak profil kartlarını render eder.

### ProfileCard.js
Yeniden kullanılabilir profil kartı bileşeni. İsim, rol ve resim prop'larını alır.

## 📝 Notlar

- Uygulama Expo Go uygulaması ile test edilebilir
- iOS ve Android platformlarında çalışır
- Web desteği mevcuttur

## 👤 Geliştirici

**Muhammed Hazem Kabbanı**  
Öğrenci No: 220404931



