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
      <View style={styles.View_83_654}>
        <View style={styles.View_I83_654_142_1061}>
          <View style={styles.View_I83_654_142_1062}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ed3/19f4/8e6b379d5ec3b211fd860e7931792288"
              }}
              style={styles.ImageBackground_I83_654_142_1063}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b11d/576c/526cc69e15672b119558098ee7fe9aa1"
              }}
              style={styles.ImageBackground_I83_654_142_1064}
            />
          </View>
        </View>
        <View style={styles.View_I83_654_142_1066}>
          <Text style={styles.Text_I83_654_142_1066}>Календарь</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1dce/dc79/506e3da758c94987db929530733e615d"
        }}
        style={styles.ImageBackground_83_655}
      />
      <View style={styles.View_83_663}>
        <Text style={styles.Text_83_663}>Помидоры</Text>
      </View>
      <View style={styles.View_89_666}>
        <Text style={styles.Text_89_666}>Влажность 24%</Text>
      </View>
      <View style={styles.View_89_672}>
        <View style={styles.View_89_669}>
          <Text style={styles.Text_89_669}>10</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b47/d2a5/3383dac8ee3bcaf3af8fdab6dbccd80a"
          }}
          style={styles.ImageBackground_89_671}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd0b/b2be/66387e83f1d825844e5ef1e4e9d03d15"
        }}
        style={styles.ImageBackground_106_840}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c105/2b86/14d01f024b18a441e5ec01f298d545f1"
        }}
        style={styles.ImageBackground_106_842}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d6e/412d/145d06b8f2650c5738f50e67453c4411"
        }}
        style={styles.ImageBackground_106_844}
      />
      <View style={styles.View_106_987}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b182/0528/f7f067d2d8f29253cf5f68b095c22e77"
          }}
          style={styles.ImageBackground_106_985}
        />
        <View style={styles.View_106_986}>
          <Text style={styles.Text_106_986}>!</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(142, 194, 154, 1)" },
  View_2: { height: hp("100%") },
  View_83_654: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I83_654_142_1061: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I83_654_142_1062: {
    width: wp("6%"),
    height: hp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I83_654_142_1063: {
    width: wp("6%"),
    height: hp("19%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I83_654_142_1064: {
    width: wp("6%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I83_654_142_1066: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_I83_654_142_1066: {
    color: "rgba(239, 239, 239, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_83_655: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("85%")
  },
  View_83_663: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_83_663: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_89_666: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_89_666: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_89_672: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("4%")
  },
  View_89_669: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_89_669: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_89_671: {
    width: wp("6%"),
    height: hp("19%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_106_840: {
    width: wp("7%"),
    height: hp("26%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_106_842: {
    width: wp("7%"),
    height: hp("26%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_106_844: {
    width: wp("8%"),
    height: hp("29%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_106_987: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("23%")
  },
  ImageBackground_106_985: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_106_986: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_106_986: {
    color: "rgba(45, 45, 45, 1)",
    fontSize: 34.28571319580078,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
