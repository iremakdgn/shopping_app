import { StyleSheet,Dimensions } from "react-native";

const deviceSize=Dimensions.get("window")
export default StyleSheet.create({
container:{
    flex:1
},
body_container:{
    padding:10
},
image:{
    width:deviceSize.width,
    height:deviceSize.height/3,
    resizeMode:"contain",
    backgroundColor:"white"
},
title:{
    fontSize:25,
    fontWeight:"bold",
    color:"black"
},
desc:{
    fontStyle:"italic",
  marginVertical:5,
    color:"black"
},
price:{
    fontWeight:"bold",
    fontSize:22,
    textAlign:"right",
      color:"black"
},
});