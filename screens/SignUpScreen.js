
import React,{Component} from 'react';
import { StyleSheet, Text, View , ActivityIndicator,AsyncStorage } from 'react-native';


class SignUpScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator>SignUpScreen</ActivityIndicator>
            </View>
        );
    }
}
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
