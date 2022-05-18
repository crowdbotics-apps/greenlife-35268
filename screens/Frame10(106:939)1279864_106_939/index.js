import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_106_940}>
        <View style={styles.View_106_941}>
          <View style={styles.View_106_942}>
            <View style={styles.View_106_943}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6220/3b80/2842e8bc11123af02665e58dece1dcf9"
                }}
                style={styles.ImageBackground_106_944}
              />
            </View>
          </View>
          <View style={styles.View_106_948}>
            <Text style={styles.Text_106_948}>18:00</Text>
          </View>
          <View style={styles.View_106_949}>
            <Text style={styles.Text_106_949}>Понедельник</Text>
          </View>
        </View>
        <View style={styles.View_106_950}>
          <View style={styles.View_106_951}>
            <Text style={styles.Text_106_951}>10</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6320/6e8f/f0005fbc1888b5ccbd2fb567827e79d2"
            }}
            style={styles.ImageBackground_106_952}
          />
        </View>
      </View>
      <View style={styles.View_106_969}>
        <Text style={styles.Text_106_969}>Влажность 24%</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3482/17f8/7f72fb78c07aacf89a6b85280dee3e1f"
        }}
        style={styles.ImageBackground_106_970}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(90, 90, 90, 1)" },
  View_2: { height: hp("100%") },
  View_106_940: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("30%")
  },
  View_106_941: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_106_942: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_106_943: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_106_944: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_106_948: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_106_948: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 45.3636360168457,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_949: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_106_949: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_950: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("11%")
  },
  View_106_951: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_106_951: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 45.3636360168457,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_952: {
    width: wp("6%"),
    height: hp("12%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_106_969: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_106_969: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_970: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
