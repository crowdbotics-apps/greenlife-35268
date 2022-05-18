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
      <View style={styles.View_220_261}>
        <View style={styles.View_220_262}>
          <Text style={styles.Text_220_262}>Заголовок h1</Text>
        </View>
        <View style={styles.View_220_263}>
          <Text style={styles.Text_220_263}>Заголовок h2</Text>
        </View>
        <View style={styles.View_220_264}>
          <Text style={styles.Text_220_264}>заголовок h3</Text>
        </View>
        <View style={styles.View_220_265}>
          <Text style={styles.Text_220_265}>Кнопка</Text>
        </View>
        <View style={styles.View_220_266}>
          <Text style={styles.Text_220_266}>Инпут</Text>
        </View>
        <View style={styles.View_220_267}>
          <Text style={styles.Text_220_267}>Текст</Text>
        </View>
        <View style={styles.View_220_268}>
          <Text style={styles.Text_220_268}>Лейбл</Text>
        </View>
      </View>
      <View style={styles.View_220_269}>
        <Text style={styles.Text_220_269}>Кегль</Text>
      </View>
      <View style={styles.View_220_270}>
        <Text style={styles.Text_220_270}>Шрифты</Text>
      </View>
      <View style={styles.View_220_271}>
        <Text style={styles.Text_220_271}>Цвета</Text>
      </View>
      <View style={styles.View_220_272} />
      <View style={styles.View_220_273} />
      <View style={styles.View_220_274} />
      <View style={styles.View_220_275} />
      <View style={styles.View_220_276} />
      <View style={styles.View_220_277}>
        <Text style={styles.Text_220_277}>Kanit</Text>
      </View>
      <View style={styles.View_220_278}>
        <Text style={styles.Text_220_278}>
          Cantarell
          CantarellCantarellCantarellCantarellCantarellCantarellCantarellCantarellCantarellCantarell
        </Text>
      </View>
      <View style={styles.View_220_279}>
        <Text style={styles.Text_220_279}>Roboto</Text>
      </View>
      <View style={styles.View_220_280} />
      <View style={styles.View_220_281} />
      <View style={styles.View_220_282} />
      <View style={styles.View_220_283} />
      <View style={styles.View_220_284} />
      <View style={styles.View_220_285} />
      <View style={styles.View_220_286} />
      <View style={styles.View_220_287} />
      <View style={styles.View_220_288} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("126%") },
  View_220_261: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_220_262: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_220_262: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_263: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_220_263: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_264: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_220_264: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_220_265: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_220_265: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_266: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_220_266: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_220_267: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_220_267: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_268: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_220_268: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_269: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_220_269: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_270: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("77%"),
    justifyContent: "flex-start"
  },
  Text_220_270: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_271: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_220_271: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_272: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("53%"),
    backgroundColor: "rgba(22, 22, 22, 1)"
  },
  View_220_273: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("45%"),
    backgroundColor: "rgba(69, 69, 69, 1)"
  },
  View_220_274: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("37%"),
    backgroundColor: "rgba(115, 115, 115, 1)"
  },
  View_220_275: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("30%"),
    backgroundColor: "rgba(162, 162, 162, 1)"
  },
  View_220_276: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("22%"),
    backgroundColor: "rgba(208, 208, 208, 1)"
  },
  View_220_277: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_220_277: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_278: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("105%"),
    justifyContent: "flex-start"
  },
  Text_220_278: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_279: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("88%"),
    justifyContent: "flex-start"
  },
  Text_220_279: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_280: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("54%"),
    backgroundColor: "rgba(67, 154, 86, 1)"
  },
  View_220_281: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("85%"),
    backgroundColor: "rgba(13, 31, 17, 1)"
  },
  View_220_282: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("61%"),
    backgroundColor: "rgba(53, 123, 69, 1)"
  },
  View_220_283: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("69%"),
    backgroundColor: "rgba(40, 92, 52, 1)"
  },
  View_220_284: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("77%"),
    backgroundColor: "rgba(27, 62, 34, 1)"
  },
  View_220_285: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("24%"),
    backgroundColor: "rgba(217, 235, 221, 1)"
  },
  View_220_286: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("46%"),
    backgroundColor: "rgba(104, 174, 120, 1)"
  },
  View_220_287: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("39%"),
    backgroundColor: "rgba(142, 194, 154, 1)"
  },
  View_220_288: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("31%"),
    backgroundColor: "rgba(180, 215, 187, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
