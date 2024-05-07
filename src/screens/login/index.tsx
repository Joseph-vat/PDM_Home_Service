import { View, Text, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { CustomButton } from '../../components/Button';
import { Ionicons } from '@expo/vector-icons';


export function Login() {
    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hide, setHide] = useState(true);

    { console.log(email) }
    { console.log(hide) }

    return (
        <View style={styles.container}>

            {/* view logo-title */}
            <View style={styles.align}>
                <View style={styles.align}>
                    <Image
                        source={require('../../../assets/logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.title}> Home Services</Text>
                </View>

                {/* view input */}
                <View style={styles.alignInput}>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        placeholderTextColor='#9089CB'
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    <View style={styles.security}>
                        <TextInput
                            style={styles.inputSecurity}
                            placeholder='Senha'
                            placeholderTextColor='#9089CB'
                            secureTextEntry={hide}
                            onChangeText={(text) => setPassword(text)}
                            value={password}

                        />
                        <TouchableOpacity style={styles.eyeSecurity} onPress={() => setHide(!hide)}>
                            {hide ?
                                <Ionicons name='eye' color={"#9089CB"} size={25} />

                            :
                            <Ionicons name='eye-off' color={"#9089CB"} size={25} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <CustomButton
                    title="Entrar"
                    onPress={handlePress}
                    containerStyle={styles.buttonContainerType1}
                    titleStyle={styles.buttonTitleType1}
                />
            </View>

        </View>
    )
}