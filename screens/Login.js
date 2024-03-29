import React, {useState} from "react";
import { 
  StyledContainer, 
  InnerContainer, 
  PageLogo, 
  PageTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledTextInput,
  SubTitle,
  Colors,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent
} from "../components/style";
import { Formik } from "formik";
import { View } from "react-native";
import { login } from '../services/api'
//Icons
import {Octicons, Ionicons, Fontisto} from "@expo/vector-icons"
//Colors
const {brand, darkLight, primary} = Colors
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper'
import { showMessage } from "react-native-flash-message";


const Login = ({navigation})=> {
    const [hidePassword, setHidePassword] = useState(true) 
    
    const makeLogin = (user, pwd) => {
      const response = login(user, pwd)
      if(response){
        console.log('Login OK!!')
        navigation.navigate("Welcome")
      } else{
        console.log('Login Error')
        showMessage({
          message: "Correo o contraseña inválidos",
          description: "",
          type: "danger",
          icon: "danger",
        });
      }
    }
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <InnerContainer>
            <PageLogo resizeMode="cover" source={require("./../assets/img/logo.jpg")}/>
            <PageTitle>Pet Zone</PageTitle>
            <SubTitle>Bienvenido</SubTitle>
            <Formik
              initialValues={{email:'', password:''}}
              onSubmit={(values) => {
                makeLogin(values.email, values.password)
              }}
            >
            {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
              <MyTextInput 
                label="Correo"
                icon="mail"
                placeholder="jorge.herrera@gmail.com"
                placeHolderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />

              <MyTextInput 
                label="Contraseña"
                icon="lock"
                placeholder="* * * * * "
                placeHolderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword = {hidePassword}
                setHidePassword={setHidePassword}
              />
              <StyledButton onPress={handleSubmit}>
                <ButtonText>
                  Ingresar
                </ButtonText>
              </StyledButton>
              <Line/>
              <StyledButton google={true} onPress={handleSubmit}>
                <Fontisto name='google' color={primary} size={25}/>
                <ButtonText google={true}>
                  Ingresar con Google
                </ButtonText>
              </StyledButton>
              <ExtraView>
                <ExtraText>No tienes cuenta? </ExtraText>
                <TextLink onPress={() =>  navigation.navigate("SignUp")}>
                  <TextLinkContent>Registrar</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>)}
            </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  )
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
  return (<View>
    <LeftIcon>
      <Octicons name={icon} size={30} color={brand} />
    </LeftIcon>
    <StyledInputLabel>{label}</StyledInputLabel>
    <StyledTextInput {...props} />
    { isPassword && (
      <RightIcon onPress={() => setHidePassword(!hidePassword)}>
        <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
      </RightIcon>
    )
    }
  </View>)
}

export default Login