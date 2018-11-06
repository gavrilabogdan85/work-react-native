
import React,{Component} from 'react';
import { StyleSheet, Text, View , ActivityIndicator,AsyncStorage } from 'react-native';


class SignInScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator>SignInScreen</ActivityIndicator>
            </View>
        );
    }
}
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
