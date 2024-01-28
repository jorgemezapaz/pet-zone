import React, { useState } from 'react'
import { 
    StyledContainer, 
    InnerContainer, 
    StyledFormArea,
    StyledButton,
    ButtonText,
    Colors,
} from "../components/style";
import { Formik } from "formik";
import { StyleSheet, TextInput, View } from "react-native";
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper'
import StarRating from 'react-native-star-rating-widget';
const {brand} = Colors

export const ReviewForm = ({markerId}) => {
    const [rating, setRating] = useState(0)
    console.log(markerId)
    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer reviewForm={true}>
            <InnerContainer>
                <Formik
                initialValues={{review:''}}
                onSubmit={(values) => {
                    console.log(rating)
                    console.log(values)
                }}
                >
                {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                <View style={styles.starRatingView}>
                    <StarRating
                        rating={rating}
                        onChange={setRating}
                        color={brand}  style={styles.stars}
                    />
                </View>
                <TextInput
                    editable
                    multiline
                    numberOfLines={6}
                    maxLength={250}
                    onBlur={handleBlur('review')}
                    onChangeText={handleChange('review')}
                    placeholder="Comparte los detalles de tu experiencia en este lugar"
                    value={values.review}
                    style={styles.textArea}
                />
                <StyledButton onPress={handleSubmit}>
                    <ButtonText>
                        Enviar
                    </ButtonText>
                </StyledButton>
                </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    </KeyboardAvoidingWrapper>
    )
}

const styles = StyleSheet.create({
    textArea: {
        minHeight: 150,
        borderWidth:1,
        borderColor: '#f0f0f0',
        padding: 5,
    },
    stars:{
        paddingTop:'5%',
    },
    starRatingView:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 15
    }
})