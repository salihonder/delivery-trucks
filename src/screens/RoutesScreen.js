import { Text, StyleSheet, SafeAreaView, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function RoutesScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Route"
                onPress={() => navigation.navigate('Route')}
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

export default RoutesScreen;