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
      <View style={styles.View_198_457}>
        <View style={styles.View_198_458}>
          <Text style={styles.Text_198_458}>Культуры</Text>
        </View>
        <View style={styles.View_198_459}>
          <Text style={styles.Text_198_459}>Ваши настройки</Text>
        </View>
      </View>
      <View style={styles.View_200_3148}>
        <Text style={styles.Text_200_3148}>
          Выберите здесь программу для определенной влажности почвы
        </Text>
      </View>
      <View style={styles.View_198_476}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0521/62a6/69a1eb92c8fa77956aa6062cbd5a9fac"
          }}
          style={styles.ImageBackground_199_476}
        />
        <View style={styles.View_199_362}>
          <Text style={styles.Text_199_362}>20-40%</Text>
        </View>
        <View style={styles.View_200_3153}>
          <Text style={styles.Text_200_3153}>0-20%</Text>
        </View>
        <View style={styles.View_200_3150}>
          <Text style={styles.Text_200_3150}>40-60%</Text>
        </View>
        <View style={styles.View_200_3151}>
          <Text style={styles.Text_200_3151}>60-80%</Text>
        </View>
        <View style={styles.View_200_3152}>
          <Text style={styles.Text_200_3152}>80-100%</Text>
        </View>
        <View style={styles.View_200_3160}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0107/b0b3/a13685efcfc4adaa46ce16b164c21555"
            }}
            style={styles.ImageBackground_200_3159}
          />
          <View style={styles.View_200_4071}>
            <Text style={styles.Text_200_4071}>0</Text>
          </View>
          <View style={styles.View_200_4072}>
            <Text style={styles.Text_200_4072}>-</Text>
          </View>
          <View style={styles.View_200_4073}>
            <Text style={styles.Text_200_4073}>2</Text>
          </View>
          <View style={styles.View_200_4074}>
            <Text style={styles.Text_200_4074}>0</Text>
          </View>
          <View style={styles.View_200_4075}>
            <Text style={styles.Text_200_4075}>%</Text>
          </View>
        </View>
        <View style={styles.View_200_4078}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/956c/f599/fb431d9b95a8b02307f03047a6e33048"
            }}
            style={styles.ImageBackground_200_4077}
          />
          <View style={styles.View_200_4571}>
            <Text style={styles.Text_200_4571}>2</Text>
          </View>
          <View style={styles.View_200_4572}>
            <Text style={styles.Text_200_4572}>0</Text>
          </View>
          <View style={styles.View_200_4573}>
            <Text style={styles.Text_200_4573}>-</Text>
          </View>
          <View style={styles.View_200_4574}>
            <Text style={styles.Text_200_4574}>4</Text>
          </View>
          <View style={styles.View_200_4575}>
            <Text style={styles.Text_200_4575}>0</Text>
          </View>
          <View style={styles.View_200_4576}>
            <Text style={styles.Text_200_4576}>%</Text>
          </View>
        </View>
        <View style={styles.View_200_4579}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b06d/f186/62f000362f1e1cc7ddc74664aeb1dc4c"
            }}
            style={styles.ImageBackground_200_4578}
          />
          <View style={styles.View_200_4774}>
            <Text style={styles.Text_200_4774}>8</Text>
          </View>
          <View style={styles.View_200_4775}>
            <Text style={styles.Text_200_4775}>0</Text>
          </View>
          <View style={styles.View_200_4776}>
            <Text style={styles.Text_200_4776}>-</Text>
          </View>
          <View style={styles.View_200_4777}>
            <Text style={styles.Text_200_4777}>1</Text>
          </View>
          <View style={styles.View_200_4778}>
            <Text style={styles.Text_200_4778}>0</Text>
          </View>
          <View style={styles.View_200_4779}>
            <Text style={styles.Text_200_4779}>0</Text>
          </View>
          <View style={styles.View_200_4780}>
            <Text style={styles.Text_200_4780}>%</Text>
          </View>
        </View>
        <View style={styles.View_200_4596}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b8c/cf74/5ee9bc7328f8681f019eb84f97c415ab"
            }}
            style={styles.ImageBackground_200_4595}
          />
          <View style={styles.View_200_4735}>
            <Text style={styles.Text_200_4735}>6</Text>
          </View>
          <View style={styles.View_200_4736}>
            <Text style={styles.Text_200_4736}>0</Text>
          </View>
          <View style={styles.View_200_4737}>
            <Text style={styles.Text_200_4737}>-</Text>
          </View>
          <View style={styles.View_200_4738}>
            <Text style={styles.Text_200_4738}>8</Text>
          </View>
          <View style={styles.View_200_4739}>
            <Text style={styles.Text_200_4739}>0</Text>
          </View>
          <View style={styles.View_200_4740}>
            <Text style={styles.Text_200_4740}>%</Text>
          </View>
        </View>
        <View style={styles.View_200_4743}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a3e/f6c9/9eb3ab93a50e97078067962410e49a73"
            }}
            style={styles.ImageBackground_200_4742}
          />
          <View style={styles.View_200_4750}>
            <Text style={styles.Text_200_4750}>4</Text>
          </View>
          <View style={styles.View_200_4751}>
            <Text style={styles.Text_200_4751}>0</Text>
          </View>
          <View style={styles.View_200_4752}>
            <Text style={styles.Text_200_4752}>-</Text>
          </View>
          <View style={styles.View_200_4753}>
            <Text style={styles.Text_200_4753}>6</Text>
          </View>
          <View style={styles.View_200_4754}>
            <Text style={styles.Text_200_4754}>0</Text>
          </View>
          <View style={styles.View_200_4755}>
            <Text style={styles.Text_200_4755}>%</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_106_888}>
        <View style={styles.View_106_897}>
          <View style={styles.View_106_898}>
            <Text style={styles.Text_106_898}>Освещенность</Text>
          </View>
          <View style={styles.View_106_899} />
          <View style={styles.View_106_900}>
            <View style={styles.View_106_901}>
              <View style={styles.View_106_902} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1775/40d3/9af9b109abf30a7749c27a2945f17afc"
                }}
                style={styles.ImageBackground_106_903}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1106/7cb2/bc1240c6582d8fdd34e79992463c2234"
                }}
                style={styles.ImageBackground_106_904}
              />
            </View>
          </View>
          <View style={styles.View_106_905}>
            <View style={styles.View_106_906}>
              <View style={styles.View_106_907} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1775/40d3/9af9b109abf30a7749c27a2945f17afc"
                }}
                style={styles.ImageBackground_106_908}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1106/7cb2/bc1240c6582d8fdd34e79992463c2234"
                }}
                style={styles.ImageBackground_106_909}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_106_910}>
          <View style={styles.View_106_911}>
            <Text style={styles.Text_106_911}>Температура</Text>
          </View>
          <View style={styles.View_106_912} />
          <View style={styles.View_106_913}>
            <View style={styles.View_106_914}>
              <View style={styles.View_106_915} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1775/40d3/9af9b109abf30a7749c27a2945f17afc"
                }}
                style={styles.ImageBackground_106_916}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1106/7cb2/bc1240c6582d8fdd34e79992463c2234"
                }}
                style={styles.ImageBackground_106_917}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_200_4795}>
        <View style={styles.View_200_4796}>
          <Text style={styles.Text_200_4796}>10:59</Text>
        </View>
        <View style={styles.View_200_4797}>
          <Text style={styles.Text_200_4797}>11:59</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e18/5c5e/49d8bcd9bdfa794ec46b9fbc9f4c61e3"
          }}
          style={styles.ImageBackground_200_4798}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f39c/b940/1d1939064c39b38fc07d5a2f85d159a1"
          }}
          style={styles.ImageBackground_200_4799}
        />
      </View>
      <View style={styles.View_200_4803}>
        <View style={styles.View_174_293}>
          <Text style={styles.Text_174_293}>
            Выберите интервал проветривания
          </Text>
        </View>
        <View style={styles.View_174_280}>
          <View style={styles.View_174_297}>
            <View style={styles.View_174_281}>
              <Text style={styles.Text_174_281}>11</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e6a/1e8a/7da14470716c3cec4f968ebf877e5d30"
              }}
              style={styles.ImageBackground_174_294}
            />
          </View>
          <View style={styles.View_174_296}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04de/07d5/76c9335b5b5cb629dccffdf441c8f54b"
              }}
              style={styles.ImageBackground_174_284}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6087/bd85/99d5ef0c556b4c082d169339977bd00c"
              }}
              style={styles.ImageBackground_174_288}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6087/bd85/99d5ef0c556b4c082d169339977bd00c"
              }}
              style={styles.ImageBackground_174_289}
            />
          </View>
          <View style={styles.View_174_298}>
            <View style={styles.View_174_282}>
              <Text style={styles.Text_174_282}>15</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e6a/1e8a/7da14470716c3cec4f968ebf877e5d30"
              }}
              style={styles.ImageBackground_174_295}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_200_4804}>
        <Text style={styles.Text_200_4804}>Выберите интервал освещения</Text>
      </View>
      <View style={styles.View_198_455}>
        <View style={styles.View_106_934}>
          <View style={styles.View_106_887}>
            <Text style={styles.Text_106_887}>Выберите настройки режима</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("208%") },
  View_198_457: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_198_458: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_198_458: {
    color: "rgba(142, 142, 142, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_198_459: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_198_459: {
    color: "rgba(53, 123, 69, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_3148: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_200_3148: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_198_476: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("28%")
  },
  ImageBackground_199_476: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("14%")
  },
  View_199_362: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_199_362: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_3153: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_200_3153: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_3150: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_200_3150: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_3151: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_200_3151: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_3152: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_200_3152: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_3160: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_200_3159: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_200_4071: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_200_4071: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4072: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_200_4072: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4073: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_200_4073: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4074: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_200_4074: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4075: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_200_4075: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4078: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%")
  },
  ImageBackground_200_4077: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_200_4571: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_200_4571: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4572: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_200_4572: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4573: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_200_4573: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4574: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_200_4574: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4575: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_200_4575: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4576: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_200_4576: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4579: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("16%")
  },
  ImageBackground_200_4578: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_200_4774: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_200_4774: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4775: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_200_4775: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4776: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_200_4776: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4777: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_200_4777: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4778: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("13%"),
    justifyContent: "center"
  },
  Text_200_4778: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4779: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_200_4779: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4780: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("15%"),
    justifyContent: "center"
  },
  Text_200_4780: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4596: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("33%")
  },
  ImageBackground_200_4595: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_200_4735: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_200_4735: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4736: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_200_4736: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4737: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_200_4737: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4738: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_200_4738: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4739: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_200_4739: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4740: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_200_4740: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4743: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  ImageBackground_200_4742: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_200_4750: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("15%"),
    justifyContent: "center"
  },
  Text_200_4750: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4751: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_200_4751: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4752: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("13%"),
    justifyContent: "center"
  },
  Text_200_4752: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4753: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_200_4753: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4754: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_200_4754: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4755: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_200_4755: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_888: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("101%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_106_897: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_106_898: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_106_898: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_899: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_106_900: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("3%")
  },
  View_106_901: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_106_902: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_106_903: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_106_904: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_106_905: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("3%")
  },
  View_106_906: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_106_907: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_106_908: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_106_909: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_106_910: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_106_911: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_106_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_912: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_106_913: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("3%")
  },
  View_106_914: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_106_915: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_106_916: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_106_917: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_200_4795: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("173%")
  },
  View_200_4796: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_4796: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.068965911865234,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_4797: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_4797: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.068965911865234,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_4798: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("1%")
  },
  ImageBackground_200_4799: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%")
  },
  View_200_4803: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("133%")
  },
  View_174_293: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_174_293: {
    color: "rgba(45, 45, 45, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_174_280: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_174_297: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_174_281: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_174_281: {
    color: "rgba(45, 45, 45, 1)",
    fontSize: 18.068965911865234,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_174_294: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_174_296: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("1%")
  },
  ImageBackground_174_284: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_174_288: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_174_289: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%")
  },
  View_174_298: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  View_174_282: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_174_282: {
    color: "rgba(45, 45, 45, 1)",
    fontSize: 18.068965911865234,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_174_295: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_200_4804: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("157%"),
    justifyContent: "flex-start"
  },
  Text_200_4804: {
    color: "rgba(45, 45, 45, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_198_455: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("80%")
  },
  View_106_934: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_106_887: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_106_887: {
    color: "rgba(45, 45, 45, 1)",
    fontSize: 19,
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
