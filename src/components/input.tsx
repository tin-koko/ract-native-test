import {
  TextInput,
  TextInputIOSProps,
  TextInputAndroidProps,
} from "react-native";

import { InputSheet } from "./style";

interface Props extends TextInputAndroidProps, TextInputIOSProps {}

const Input = (props: Props) => (
  <TextInput
    style={InputSheet.textInput}
    placeholder="Search by country name"
    placeholderTextColor={"white"}
    keyboardType={"web-search"}
    autoFocus={true}
    {...props}
  />
);

export default Input;
