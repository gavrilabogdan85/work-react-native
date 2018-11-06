
import React,{Component} from 'react';
import { StyleSheet, Text,Button, View , ActivityIndicator , AsyncStorage } from 'react-native';


class WelcomeScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator>WelcomeScreen</ActivityIndicator>
                <Button title="Sign In" onPress={()=>this.props.navigation.navigate('SignIn')}></Button>
                <Button title="Sign Up" onPress={()=>this.props.navigation.navigate('SignUp')}></Button>
            </View>
        );
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
