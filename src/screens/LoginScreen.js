import { Text, StyleSheet, SafeAreaView, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.header}>LOGIN SCREEN</Text>
            <Button
                title="LOGIN"
                onPress={() => navigation.navigate('Routes')}
            />
        </SafeAreaView>
    );
}

// Style
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
});

export default LoginScreen;