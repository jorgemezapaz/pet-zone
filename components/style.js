import styled from "styled-components"
import {View, Image, Text, TextInput, TouchableOpacity, MapView} from "react-native"
import  Constants  from "expo-constants";

const StatusBarHeight =  Platform.OS === 'ios' ? 100 : Constants.StatusBarHeight

export const Colors = {
  primary: "#ffffff", 
  secondary: "#E5E7EB", 
  tertiary: "#1F2937", 
  darkLight: "#9CABAF", 
  brand: "#1499aa",
  green: "#10B981",
  red: "#EF4444"
};

const { primary, secondary, tertiary, darklight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: 25px;
  background-color: ${primary};
`

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`
export const WelcomeContainetr = styled(InnerContainer)`
  padding: 0px;
  padding-top: 0px;

`
export const WelcomeMainContainetr = styled(InnerContainer)`
  padding: 0px;
  padding-top: 0px;
  display: flex;
  align-items: baseline;
`

export const HeaderBar = styled.View`
  position: absolute;
  top: 80px;
  left: 90px;
  width: 60%;
  height: 60px;
  background-color: white;
  display: flex;
  border-radius: 10px;
  `

export const MainTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
`

export const PageLogo = styled.Image`
  width: 250px;
  height: 220px;
`

export const PageLogoSmall = styled.Image`
  width: 150px;
  height: 120px;
  grid-column-span:1;
`

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
`

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
`
export const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${tertiary};
  letter-spacing: 1px;
  margin-bottom: 20px;
`
export const StyledFormArea = styled.View`
  width: 90%;
`

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding-vertical: 15px;
  padding-horizontal: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`
export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`
export const LeftIcon = styled.View`
  left: 15px;
  top: 35px;
  position: absolute;
  z-index: 1;
`

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 35px;
  position: absolute;
  z-index: 1;
`
export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;

  ${(props) => props.google == true && `
    background-color: ${red};
    flex-direction: row;
    justify-content: center;
  `}

  ${(props) => props.disabled == true && `
    background-color: ${secondary};
    flex-direction: row;
    justify-content: center;
  `}
`

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 18px;

  ${(props) => props.google == true && `
  padding-left: 25px;
`}
`

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: red;
`
export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${secondary};
  margin-vertical: 10px;
`

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  alignb-items: center;
  padding: 10px;
`

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-content: center;
`

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`
export const MarkerModal = styled.View`
  padding: 5px 10px 5px 10px;
`

export const MarkerTitle = styled.Text`
  color: ${brand};
  font-weight: bold;
  font-size: 15px;
`
export const MarkerRatingText = styled.Text`
  color: ${tertiary};
  font-size: 12px;
`
export const MarkerRatingContainer = styled.Text`
  display: flex;
  align-items: flex-start;
`