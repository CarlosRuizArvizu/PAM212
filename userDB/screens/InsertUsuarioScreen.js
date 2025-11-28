import { useEffect, useState, useCallback } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Alert,
    ActivityIndicator,
    Platform
} from 'react-native';

import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function UsuarioView() {

    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState('');
    const [loading, setLoading] = useState(true);
    const [guardando, setGuardando] = useState(false);

    // Estados para editar
    const [editando, setEditando] = useState(null);
    const [nuevoNombre, setNuevoNombre] = useState('');

    const cargarUsuarios = useCallback(async () => {
        try {
            setLoading(true);
            const data = await controller.obtenerUsuarios();
            setUsuarios(data);
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const init = async () => {
            await controller.initialize();
            await cargarUsuarios();
        };

        init();

        controller.addListener(cargarUsuarios);
        return () => controller.removeListener(cargarUsuarios);

    }, [cargarUsuarios]);

    const handleAgregar = async () => {
        if (guardando) return;

        try {
            setGuardando(true);
            await controller.crearUsuario(nombre);
            setNombre('');
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setGuardando(false);
        }
    };

    const iniciarEdicion = (usuario) => {
        setEditando(usuario.id);
        setNuevoNombre(usuario.nombre);
    };

    const guardarCambios = async () => {
        try {
            await controller.actualizarUsuario(editando, nuevoNombre);
            setEditando(null);
            setNuevoNombre('');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const eliminar = (id) => {
    // 💻 WEB: usar window.confirm
    if (Platform.OS === 'web') {
        const confirmar = window.confirm('¿Deseas eliminar este usuario?');
        if (confirmar) {
        controller
            .eliminarUsuario(id)
            .catch((error) => Alert.alert('Error', error.message));
        }
        return;
    }

    // 📱 MÓVIL: usar Alert con botones
    Alert.alert(
        'Eliminar Usuario',
        '¿Deseas eliminar este usuario?',
        [
        { text: 'Cancelar', style: 'cancel' },
        {
            text: 'Eliminar',
            style: 'destructive',
            onPress: async () => {
            try {
                await controller.eliminarUsuario(id);
            } catch (error) {
                Alert.alert('Error', error.message);
            }
            },
        },
        ]
    );
    };

    const renderUsuario = ({ item, index }) => (
        <View style={styles.userItem}>
            <View style={styles.userNumber}>
                <Text style={styles.userNumberText}>{index + 1}</Text>
            </View>

            <View style={styles.userInfo}>
                {editando === item.id ? (
                    <>
                        <TextInput
                            style={styles.input}
                            value={nuevoNombre}
                            onChangeText={setNuevoNombre}
                        />

                        <TouchableOpacity style={styles.saveButton} onPress={guardarCambios}>
                            <Text style={styles.saveButtonText}>Guardar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setEditando(null)}>
                            <Text style={{ color: 'red', marginTop: 5 }}>Cancelar</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <Text style={styles.userName}>{item.nombre}</Text>
                        <Text style={styles.userId}>ID: {item.id}</Text>

                        <View style={{ flexDirection: 'row', marginTop: 8 }}>
                            <TouchableOpacity onPress={() => iniciarEdicion(item)}>
                                <Text style={{ color: '#007AFF', marginRight: 20 }}>Editar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => eliminar(item.id)}>
                                <Text style={{ color: 'red' }}>Eliminar</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>
        </View>
    );

    return (
        <View style={styles.container}>

            <Text style={styles.mainTitle}>INSERT, SELECT, UPDATE y DELETE</Text>
            <Text style={styles.subTitle}>iOS (SQLite)</Text>

            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Insertar Usuario</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nombre del usuario"
                    value={nombre}
                    onChangeText={setNombre}
                />

                <TouchableOpacity style={styles.addButton} onPress={handleAgregar}>
                    <Text style={styles.addButtonText}>
                        {guardando ? 'Guardando...' : 'Agregar Usuario'}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listHeader}>
                <Text style={styles.sectionTitle}>Lista de Usuarios</Text>

                <TouchableOpacity onPress={cargarUsuarios}>
                    <Text style={styles.reloadText}>Recargar</Text>
                </TouchableOpacity>
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 20 }} />
            ) : (
                <FlatList
                    data={usuarios}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderUsuario}
                    style={{ marginTop: 10 }}
                />
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F6FA'
    },

    mainTitle: {
        fontSize: 28,
        fontWeight: '800',
        textAlign: 'center',
        marginTop: 10
    },

    subTitle: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
        marginBottom: 20
    },

    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        elevation: 3,
        marginBottom: 20
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10
    },

    addButton: {
        backgroundColor: '#007AFF',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center'
    },

    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },

    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },

    reloadText: {
        color: '#007AFF',
        fontWeight: '600'
    },

    userItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2
    },

    userNumber: {
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    userNumberText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007AFF'
    },

    userInfo: {
        flex: 1
    },

    userName: {
        fontSize: 18,
        fontWeight: '600'
    },

    userId: {
        color: '#555'
    },

    saveButton: {
        backgroundColor: "#34C759",
        padding: 8,
        borderRadius: 8,
        marginTop: 6,
        alignItems: "center"
    },

    saveButtonText: {
        color: "#fff",
        fontWeight: "bold"
    }
});
