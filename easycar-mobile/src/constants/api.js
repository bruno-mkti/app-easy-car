import axios from "axios";
import { Alert } from "react-native";

const api = axios.create({
    //baseURL: "http://ip-do-seu-computador:3001",
    baseURL: "http://localhost:3001",
    timeout: 10000
});

function HandleError(error) {
    if (error.response?.data.error)
        Alert.alert(error.response?.data.error);
    else
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
}

export { api, HandleError };