import { Text, StyleSheet, SafeAreaView, Button, View, FlatList, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Item = (props) => {

    //const navigation = useNavigation();
    return <Pressable style={Styles.item}>

        <View>

            <Text style={Styles.header}>{props.item.name}</Text>

            <Text style={Styles.subHeader}>2023-03-22</Text>

        </View>

        <Image
            style={Styles.eduteklogo}
            source={require('./delivery.png')}
        />


    </Pressable>;
}
function RoutesScreen() {


    return (
        <View style={{ flex: 1, paddingHorizontal: 12, paddingTop: 20 }}>
            <FlatList
                data={[
                    { name: 'Devin' },
                    { name: 'Dan' },
                    { name: 'Dominic' },
                    { name: 'Jackson' },
                    { name: 'James' },
                    { name: 'Joel' },
                    { name: 'John' },
                    { name: 'Jillian' },
                    { name: 'Jimmy' },
                    { name: 'Julie' },
                ]}
                renderItem={Item}
            />
        </View>
    );
}

// Style
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24
    },
    item: {
        height: 86,
        backgroundColor: '#24AA4D',
        marginBottom: 20,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,

    },

    eduteklogo: {
        width: 17,
        height: 28,
    },
    header: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',

    },
    subHeader: {

        fontSize: 14,
        color: '#FFFFFF',
        textDecorationLine: 'underline',

    }
});

export default RoutesScreen;