import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');

  const calculateBMI = () => {
    const h = parseFloat(height.replace(',', '.').trim());
    const w = parseFloat(weight.replace(',', '.').trim());
  
    if (!h || !w || isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      Alert.alert('Lỗi', 'Vui lòng nhập chiều cao và cân nặng hợp lệ.');
      return;
    }
  
    const bmi = w / (h * h);
    console.log(`Chiều cao: ${h} m, Cân nặng: ${w} kg, BMI: ${bmi.toFixed(2)}`);
    const category = getBMICategory(bmi);
  
    Alert.alert(
      'Chỉ số BMI',
      `Chỉ số BMI của bạn là: ${bmi.toFixed(2)} (${category})`
    );
  };
  

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Thiếu cân';
    if (bmi < 24.9) return 'Bình thường';
    if (bmi < 29.9) return 'Thừa cân';
    return 'Béo phì';
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Kiểm tra chỉ số BMI!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Nhập chiều cao (m)</ThemedText>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ví dụ: 1.75"
          value={height}
          onChangeText={setHeight}
        />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Nhập cân nặng (kg)</ThemedText>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ví dụ: 70"
          value={weight}
          onChangeText={setWeight}
        />
      </ThemedView>
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Tính BMI</Text>
      </TouchableOpacity>
      {bmiResult ? (
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">{bmiResult}</ThemedText>
        </ThemedView>
      ) : null}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    height: 40,
    borderColor: '#A1CEDC',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    backgroundColor: '#1D3D47',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

