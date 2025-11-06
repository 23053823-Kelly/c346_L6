import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Custom component to display a quiz question
const QuizQuestion = ({ question }) => {
    return (
        <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Text style={{ fontSize: 20 }}>{question}</Text>

        </View>
    );
};

const QuizApp = () => {
    // State variables for each question
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');

    // Function to check answers and show score
    const submitAnswers = () => {
        let score = 0;

        if (ans1 === 'Tiger') score++;
        if (ans2 === 'Elephant') score++;
        if (ans3 === 'Parrot') score++;

        let msg = '';
        if (score === 3) msg = 'Excellent! Well done!';
        else if (score === 2) msg = 'Not Bad! You are close!';
        else msg = 'You can do better next time!';

        Alert.alert('Your Score: ' + score + '/3', msg);
    };

    return (
        <ScrollView style={{ marginTop: 40, marginBottom: 50, paddingHorizontal: 10 }}>
            <Text
                style={{
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: 'green',
                    textAlign: 'center',
                    marginBottom: 20,
                }}
            >
                Animal Kingdom
            </Text>

            {/* Question 1 */}
            <Image
                source={{
                    uri: 'https://tse1.mm.bing.net/th/id/OIP.JAmOqm_ZAc4Bk3kn0W_33AHaE6?rs=1&pid=ImgDetMain&o=7&rm=3',
                }}
                style={{ width: '100%', height: 200, resizeMode: 'cover', marginBottom: 10 }}
            />
            <QuizQuestion question="What animal do you think it is?" />
            <Picker onValueChange={(value)=>setAns1(value)} style={{ marginBottom: 15 }}>
                <Picker.Item label="Select an animal..." value="" />
                <Picker.Item label="Tiger" value="Tiger" />
                <Picker.Item label="Elephant" value="Elephant" />
                <Picker.Item label="Parrot" value="Parrot" />
            </Picker>

            {/* Question 2 */}
            <Image
                source={{
                    uri: 'https://tse1.mm.bing.net/th/id/OIP.1DCjaaaqQpmdRUv-zhJyiAHaEm?w=1654&h=1026&rs=1&pid=ImgDetMain&o=7&rm=3',
                }}
                style={{ width: '100%', height: 200, resizeMode: 'cover', marginBottom: 10 }}
            />
            <QuizQuestion question="What animal do you think it is?" />
            <Picker selectedValue={ans2} onValueChange={(value)=>setAns2(value)} style={{ marginBottom: 15 }}>
                <Picker.Item label="Select an animal..." value="" />
                <Picker.Item label="Tiger" value="Tiger" />
                <Picker.Item label="Elephant" value="Elephant" />
                <Picker.Item label="Parrot" value="Parrot" />
            </Picker>

            {/* Question 3 */}
            <Image
                source={{
                    uri: 'https://tse4.mm.bing.net/th/id/OIP.zrneYtiXrZN2tYqVavrT7wHaEo?rs=1&pid=ImgDetMain&o=7&rm=3',
                }}
                style={{ width: '100%', height: 200, resizeMode: 'cover', marginBottom: 10 }}
            />
            <QuizQuestion question="What animal do you think it is?" />
            <Picker selectedValue={ans3} onValueChange={(value)=>setAns3(value)} style={{ marginBottom: 20 }}>
                <Picker.Item label="Select an animal..." value="" />
                <Picker.Item label="Tiger" value="Tiger" />
                <Picker.Item label="Elephant" value="Elephant" />
                <Picker.Item label="Parrot" value="Parrot" />
            </Picker>

            {/* Submit Button */}
            <TouchableOpacity
                style={{
                    margin: 5,
                    backgroundColor: 'deepskyblue',
                    height: 50,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={submitAnswers}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default QuizApp;
