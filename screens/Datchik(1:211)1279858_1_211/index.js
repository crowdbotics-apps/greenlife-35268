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
      <View style={styles.View_1_213}>
        <View style={styles.View_1_214}>
          <Text style={styles.Text_1_214}>Зона 1</Text>
        </View>
        <View style={styles.View_1_215}>
          <Text style={styles.Text_1_215}>
            Здесь вы можете выбрать автоматический полив с учетом определенного
            растения. Поливания будут проиходить с аналитикой особенности
            культуры и влажности почвы.{" "}
          </Text>
        </View>
        <View style={styles.View_200_3147}>
          <Text style={styles.Text_200_3147}>
            Выберите здесь программу для определенного растения
          </Text>
        </View>
        <View style={styles.View_1_216}>
          <View style={styles.View_1_217}>
            <View style={styles.View_1_218}>
              <Text style={styles.Text_1_218}>Авторежим</Text>
            </View>
          </View>
          <View style={styles.View_1_219} />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64fb/b147/09e916e6bbf70887dfead894ea81be85"
        }}
        style={styles.ImageBackground_1_224}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05fb/adb7/b5d951602a3f2349b3309c31938903e5"
        }}
        style={styles.ImageBackground_1_230}
      />
      <View style={styles.View_198_456}>
        <View style={styles.View_94_772}>
          <Text style={styles.Text_94_772}>Культуры</Text>
        </View>
        <View style={styles.View_94_773}>
          <Text style={styles.Text_94_773}>Ваши настройки</Text>
        </View>
      </View>
      <View style={styles.View_106_861}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03cb/4cf7/f138278affe1ddcaacb019903c10a564"
          }}
          style={styles.ImageBackground_I106_861_81_245}
        />
        <View style={styles.View_I106_861_81_341}>
          <View style={styles.View_I106_861_81_248}>
            <View style={styles.View_I106_861_81_240}>
              <View style={styles.View_I106_861_81_241}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e08b/e14f/c6c506e01703ca1cad4fc5bb9d98416b"
                  }}
                  style={styles.ImageBackground_I106_861_81_242}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf70/1446/f9e9f96964bed85644a6ec5e9c9d636a"
                  }}
                  style={styles.ImageBackground_I106_861_81_244}
                />
              </View>
            </View>
            <View style={styles.View_I106_861_81_246}>
              <Text style={styles.Text_I106_861_81_246}>Расписание</Text>
            </View>
          </View>
          <View style={styles.View_I106_861_81_249}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2145/7b88/29ad7a2c0a0add8fd71613926d5368f3"
              }}
              style={styles.ImageBackground_I106_861_81_250}
            />
            <View style={styles.View_I106_861_81_255}>
              <Text style={styles.Text_I106_861_81_255}>Авторежим</Text>
            </View>
          </View>
          <View style={styles.View_I106_861_81_256}>
            <View style={styles.View_I106_861_81_257}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05d7/2095/12703e3bdecea65239ae113376fdfd80"
                }}
                style={styles.ImageBackground_I106_861_81_1920}
              />
            </View>
            <View style={styles.View_I106_861_81_262}>
              <Text style={styles.Text_I106_861_81_262}>Simple Mode</Text>
            </View>
          </View>
          <View style={styles.View_I106_861_106_355}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ca3/ee7b/c37ed1ea4c0ae6f86769715d6df0156f"
              }}
              style={styles.ImageBackground_I106_861_106_210}
            />
            <View style={styles.View_I106_861_106_208}>
              <Text style={styles.Text_I106_861_106_208}>История</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_183_316}>
        <View style={styles.View_1_228} />
        <View style={styles.View_1_229}>
          <Text style={styles.Text_1_229}>Сохранить</Text>
        </View>
      </View>
      <View style={styles.View_220_289}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0521/62a6/69a1eb92c8fa77956aa6062cbd5a9fac"
          }}
          style={styles.ImageBackground_220_290}
        />
        <View style={styles.View_220_291}>
          <Text style={styles.Text_220_291}>20-40%</Text>
        </View>
        <View style={styles.View_220_292}>
          <Text style={styles.Text_220_292}>0-20%</Text>
        </View>
        <View style={styles.View_220_293}>
          <Text style={styles.Text_220_293}>40-60%</Text>
        </View>
        <View style={styles.View_220_294}>
          <Text style={styles.Text_220_294}>60-80%</Text>
        </View>
        <View style={styles.View_220_295}>
          <Text style={styles.Text_220_295}>80-100%</Text>
        </View>
        <View style={styles.View_220_296}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b1a/e295/26ccb2fb1e3e9882f2662350b5fdc2ab"
            }}
            style={styles.ImageBackground_220_297}
          />
          <View style={styles.View_220_298}>
            <Text style={styles.Text_220_298}>0</Text>
          </View>
          <View style={styles.View_220_299}>
            <Text style={styles.Text_220_299}>-</Text>
          </View>
          <View style={styles.View_220_300}>
            <Text style={styles.Text_220_300}>2</Text>
          </View>
          <View style={styles.View_220_301}>
            <Text style={styles.Text_220_301}>0</Text>
          </View>
          <View style={styles.View_220_302}>
            <Text style={styles.Text_220_302}>%</Text>
          </View>
        </View>
        <View style={styles.View_220_303}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/956c/f599/fb431d9b95a8b02307f03047a6e33048"
            }}
            style={styles.ImageBackground_220_304}
          />
          <View style={styles.View_220_305}>
            <Text style={styles.Text_220_305}>2</Text>
          </View>
          <View style={styles.View_220_306}>
            <Text style={styles.Text_220_306}>0</Text>
          </View>
          <View style={styles.View_220_307}>
            <Text style={styles.Text_220_307}>-</Text>
          </View>
          <View style={styles.View_220_308}>
            <Text style={styles.Text_220_308}>4</Text>
          </View>
          <View style={styles.View_220_309}>
            <Text style={styles.Text_220_309}>0</Text>
          </View>
          <View style={styles.View_220_310}>
            <Text style={styles.Text_220_310}>%</Text>
          </View>
        </View>
        <View style={styles.View_220_311}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b06d/f186/62f000362f1e1cc7ddc74664aeb1dc4c"
            }}
            style={styles.ImageBackground_220_312}
          />
          <View style={styles.View_220_313}>
            <Text style={styles.Text_220_313}>8</Text>
          </View>
          <View style={styles.View_220_314}>
            <Text style={styles.Text_220_314}>0</Text>
          </View>
          <View style={styles.View_220_315}>
            <Text style={styles.Text_220_315}>-</Text>
          </View>
          <View style={styles.View_220_316}>
            <Text style={styles.Text_220_316}>1</Text>
          </View>
          <View style={styles.View_220_317}>
            <Text style={styles.Text_220_317}>0</Text>
          </View>
          <View style={styles.View_220_318}>
            <Text style={styles.Text_220_318}>0</Text>
          </View>
          <View style={styles.View_220_319}>
            <Text style={styles.Text_220_319}>%</Text>
          </View>
        </View>
        <View style={styles.View_220_320}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b8c/cf74/5ee9bc7328f8681f019eb84f97c415ab"
            }}
            style={styles.ImageBackground_220_321}
          />
          <View style={styles.View_220_322}>
            <Text style={styles.Text_220_322}>6</Text>
          </View>
          <View style={styles.View_220_323}>
            <Text style={styles.Text_220_323}>0</Text>
          </View>
          <View style={styles.View_220_324}>
            <Text style={styles.Text_220_324}>-</Text>
          </View>
          <View style={styles.View_220_325}>
            <Text style={styles.Text_220_325}>8</Text>
          </View>
          <View style={styles.View_220_326}>
            <Text style={styles.Text_220_326}>0</Text>
          </View>
          <View style={styles.View_220_327}>
            <Text style={styles.Text_220_327}>%</Text>
          </View>
        </View>
        <View style={styles.View_220_328}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a3e/f6c9/9eb3ab93a50e97078067962410e49a73"
            }}
            style={styles.ImageBackground_220_329}
          />
          <View style={styles.View_220_330}>
            <Text style={styles.Text_220_330}>4</Text>
          </View>
          <View style={styles.View_220_331}>
            <Text style={styles.Text_220_331}>0</Text>
          </View>
          <View style={styles.View_220_332}>
            <Text style={styles.Text_220_332}>-</Text>
          </View>
          <View style={styles.View_220_333}>
            <Text style={styles.Text_220_333}>6</Text>
          </View>
          <View style={styles.View_220_334}>
            <Text style={styles.Text_220_334}>0</Text>
          </View>
          <View style={styles.View_220_335}>
            <Text style={styles.Text_220_335}>%</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("162%") },
  View_1_213: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("8%")
  },
  View_1_214: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_215: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_1_215: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_3147: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_200_3147: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_216: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_1_217: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_218: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_218: {
    color: "rgba(45, 45, 45, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_219: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_224: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("8%")
  },
  ImageBackground_1_230: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("17%")
  },
  View_198_456: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_94_772: {
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
  Text_94_772: {
    color: "rgba(53, 123, 69, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_773: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_94_773: {
    color: "rgba(142, 142, 142, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_861: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("146%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    overflow: "hidden"
  },
  ImageBackground_I106_861_81_245: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I106_861_81_341: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I106_861_81_248: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I106_861_81_240: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I106_861_81_241: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I106_861_81_242: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I106_861_81_244: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I106_861_81_246: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I106_861_81_246: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I106_861_81_249: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%")
  },
  ImageBackground_I106_861_81_250: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_I106_861_81_255: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I106_861_81_255: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I106_861_81_256: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%")
  },
  View_I106_861_81_257: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I106_861_81_1920: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I106_861_81_262: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I106_861_81_262: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I106_861_106_355: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I106_861_106_210: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I106_861_106_208: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I106_861_106_208: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_316: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("132%")
  },
  View_1_228: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(104, 174, 120, 1)",
    overflow: "hidden"
  },
  View_1_229: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_229: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_220_289: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("63%")
  },
  ImageBackground_220_290: {
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
  View_220_291: {
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
  Text_220_291: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_292: {
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
  Text_220_292: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_293: {
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
  Text_220_293: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_294: {
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
  Text_220_294: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_295: {
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
  Text_220_295: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_296: {
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
  ImageBackground_220_297: {
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
  View_220_298: {
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
  Text_220_298: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_299: {
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
  Text_220_299: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_300: {
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
  Text_220_300: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_301: {
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
  Text_220_301: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_302: {
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
  Text_220_302: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_303: {
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
  ImageBackground_220_304: {
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
  View_220_305: {
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
  Text_220_305: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_306: {
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
  Text_220_306: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_307: {
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
  Text_220_307: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_308: {
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
  Text_220_308: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_309: {
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
  Text_220_309: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_310: {
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
  Text_220_310: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_311: {
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
  ImageBackground_220_312: {
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
  View_220_313: {
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
  Text_220_313: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_314: {
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
  Text_220_314: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_315: {
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
  Text_220_315: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_316: {
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
  Text_220_316: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_317: {
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
  Text_220_317: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_318: {
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
  Text_220_318: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_319: {
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
  Text_220_319: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_320: {
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
  ImageBackground_220_321: {
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
  View_220_322: {
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
  Text_220_322: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_323: {
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
  Text_220_323: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_324: {
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
  Text_220_324: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_325: {
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
  Text_220_325: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_326: {
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
  Text_220_326: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_327: {
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
  Text_220_327: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_328: {
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
  ImageBackground_220_329: {
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
  View_220_330: {
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
  Text_220_330: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_331: {
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
  Text_220_331: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_332: {
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
  Text_220_332: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_333: {
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
  Text_220_333: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_334: {
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
  Text_220_334: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_335: {
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
  Text_220_335: {
    color: "rgba(237, 237, 237, 1)",
    fontSize: 14,
    fontWeight: "400",
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
