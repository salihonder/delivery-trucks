import { Text, StyleSheet, SafeAreaView, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function RouteScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Route Screen</Text>
            <Button
                title="Go to Routes"
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

export default RouteScreen;