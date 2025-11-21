import { Text, StyleSheet, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile({ navigation }) {  
    return(
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name='person-outline' size={28} color='green'/>
                <Text style={styles.title}> Perfil usuario </Text>
                <Button 
                    title="Detalles de Usuario"
                    onPress={() => navigation.navigate("Detalle")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconRow: {   
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green',
    },
});
