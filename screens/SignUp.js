import React, {useState} from "react";
import { 
  StyledContainer, 
  InnerContainer, 
  PageLogoSmall, 
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
//Icons
import {Octicons, Ionicons, Fontisto} from "@expo/vector-icons"
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper'

//Colors
const {brand, darkLight, primary} = Colors
import { register } from '../services/api'
import { showMessage } from "react-native-flash-message";


const SignUp = ({navigation})=> {
    const [hidePassword, setHidePassword] = useState(true) 

    return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <InnerContainer>
            <PageLogoSmall resizeMode="cover" source={require("./../assets/img/logo.jpg")}/>
            <PageTitle>Pet Zone</PageTitle>
            <SubTitle>Registrar</SubTitle>
            <Formik
              initialValues={{fullName: '', email:'', password:'', confirmPassword:''}}
              onSubmit={(values) => {
                console.log('Register log',values)
                const resutl = register(values.fullName, values.email, values.password)
                if(resutl == ''){
                  navigation.navigate("Login")
                }else{
                  showMessage({
                    message: resutl,
                    description: "",
                    type: "danger",
                    icon: "danger",
                  });
                }
              }}
            >
            {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
              <MyTextInput 
                label="Nombre Completo"
                icon="person"
                placeholder="Jorge"
                placeHolderTextColor={darkLight}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />
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

              <MyTextInput 
                label="Confirmar Contraseña"
                icon="lock"
                placeholder="* * * * * "
                placeHolderTextColor={darkLight}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword = {hidePassword}
                setHidePassword={setHidePassword}
              />

              <StyledButton onPress={handleSubmit}>
                <ButtonText>
                  Registrar
                </ButtonText>
              </StyledButton>
              <Line/>
              <ExtraView>
                <ExtraText>Ya tengo una cuenta </ExtraText>
                <TextLink onPress={() => navigation.navigate("Login")}>
                  <TextLinkContent>Ingresar</TextLinkContent>
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

export default SignUp