import React from 'react'

import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, SafeAreaView, Platform } from 'react-native'

function KeyboardAvoidingWrapper({children}) {
  return (
    <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding":"height"}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default KeyboardAvoidingWrapper