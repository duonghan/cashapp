import * as React from "react"
import { observer } from "mobx-react-lite"
import { SafeAreaView, TextStyle, View, ViewStyle } from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
// import { useStores } from "../models/root-store"
import { color, spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { State } from "react-powerplug"

export interface SigninScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
  justifyContent: "center",
}

const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}
const SIGNIN: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "#3E9DE1",
}
const SIGNIN_TEXT: TextStyle = {
  fontWeight: "bold",
  fontSize: 13,
  letterSpacing: 2,
}

export const SigninScreen: React.FunctionComponent<SigninScreenProps> = observer(props => {
  // const { someStore } = useStores()
  const nextScreen = React.useMemo(() => () => props.navigation.navigate("welcome"), [
    props.navigation,
  ])

  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" tx="signinScreen.header" />

      <State initial={{ user: "" }}>
        {({ state, setState }) => (
          <TextField
            onChangeText={user => setState({ user })}
            value={state.user}
            placeholderTx="signinScreen.placeholder.user"
            labelTx="signinScreen.field.user"
          />
        )}
      </State>

      <State initial={{ password: "" }}>
        {({ state, setState }) => (
          <TextField
            onChangeText={password => setState({ password })}
            value={state.password}
            placeholderTx="signinScreen.placeholder.password"
            labelTx="signinScreen.field.password"
          />
        )}
      </State>
      <SafeAreaView>
        <View style={FOOTER_CONTENT}>
          <Button
            style={SIGNIN}
            textStyle={SIGNIN_TEXT}
            tx="signinScreen.signin"
            onPress={nextScreen}
          />
        </View>
      </SafeAreaView>
    </Screen>
  )
})
