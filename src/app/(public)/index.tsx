import { View, Text } from "react-native";
import SignIn from "../../../components/clerk/SignIn";

export default function PublicIndex(){
    return (
       <SignIn signUpUrl="/sign-up" scheme="mynextcutfrontend" homeUrl="(protected)"/>
    )
}