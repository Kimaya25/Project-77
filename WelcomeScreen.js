import * as React from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import firebase from 'firebase';
import db from '../config';


export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            EmailId : '',
            Password : ''
        }
      }

      userSignUp = (email, password) =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
         alert("you have created an account")
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert("there has been an error")
        });
      }

      userLogin = (email, password) =>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
         alert("you have loged in")
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert("there has been an error")
        });
      }

      render(){
          return(
              <View>
                  <TextInput style = {styles.textInput}
                  placeholder = 'abc@gmail.com'
                  keyBoardType = 'email-address'
          onChangeText = {(text)=>{
              this.setState({
                  EmailId : text
              })
          }
          }/>

             <TextInput style = {styles.textInput}
             placeholder = 'Password'
             secureTextEntry = {true}
             onChangeText = {(text)=>{
                 this.setState({
                     Password : text
                 })
             }}/>

             <TouchableOpacity style = {styles.signUp}
             onPress = {()=>{
                 this.userSignUp(this.state.EmailId, this.state.Password)
             }}>
                 <Text style = {styles.text}>Sign Up</Text>
             </TouchableOpacity>

             <TouchableOpacity style = {styles.login}
             onPress = {()=>{
                 this.userLogin(this.state.EmailId, this.state.Password)
             }}>
                 <Text style = {styles.text}>Login</Text>
             </TouchableOpacity>
              </View>
          )
      }
}

const styles = StyleSheet.create({
    textStyle : {
      fontSize : 25,
      fontWeight : 'bold',
      color : 'red'
    },
    textInput : {
        marginBottom : 20,
        marginTop : 20,
        marginLeft : 20,
        marginRight : 20,
        width : 200,
        height : 25,
        border : 'solid'
    },
    signUp : {
        border : 'solid',
        backgroundColor : "yellow",
       marginLeft : 20,
        width : 200,
        height : 25
    },
    text : {
        textAlign : 'center',
        textSize : 25,
        textFont : 'ariel',
        textWeight : 'bold'
    },
    login : {
        border : 'solid',
        backgroundColor : "yellow",
        marginTop : 20,
       marginLeft : 20,
        width : 200,
        height : 25
    
    }
})