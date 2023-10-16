import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
  },
  inputContainer: {
    backgroundColor : 'white',
    flexDirection : 'row',
    justifyContent : 'center',
  },
  titleContainer : {
    backgroundColor : 'white',
    padding : 20,
    justifyContent : 'center',
    alignItems : 'center',
  }
});