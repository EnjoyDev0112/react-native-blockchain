import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FONTS} from '../../theme/font';
import {HomeHeader} from '../../components/HeaderComponent/HomeHeader';
import {GradientBG} from '../../assets/images';
import {ROUTES} from '../../navigation/routes';
import {
  BlockMSVG,
  BlockMUDISVG,
  BlockMEDSVG,
  BlockEDSVG,
  BlockRIDESVG,
  ArtistNFTSVG,
  BlockLOANSSVG,
  BlockFARMSVG,
} from '../../assets/icons';

const BLOCK_DATA = [
  {id: 1, name: 'BLOCK M', color: '#29ECF9', Icon: BlockMSVG},
  {id: 2, name: 'BLOCK MUID', color: '#1684F3', Icon: BlockMUDISVG},
  {id: 3, name: 'BLOCK MED', color: '#A42BF1', Icon: BlockMEDSVG},
  {id: 4, name: 'BLOCK ED', color: '#FE94B4', Icon: BlockEDSVG},
  {id: 5, name: 'BLOCK RIDE', color: '#FD6A8A', Icon: BlockRIDESVG},
  {id: 6, name: 'ARTIST NFT', color: '#F61444', Icon: ArtistNFTSVG},
  {id: 7, name: 'BLOCK LOANS', color: '#CC081A', Icon: BlockLOANSSVG},
  {id: 8, name: 'BLOCK FARM', color: '#FD6520', Icon: BlockFARMSVG},
];

const BlockButton = ({color, Icon, name, navigation}) => (
  <TouchableOpacity
    style={[styles.button, {backgroundColor: color}]}
    onPress={() => {
      switch (name) {
        case 'BLOCK M':
          navigation.navigate(ROUTES.BlockM_1_Screen);
          break;
        default:
          break;
      }
    }}>
    <Icon />
    <Text style={styles.buttonText}>{name}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({navigation}) => {
  const renderBlockRows = () => {
    const rows = [];
    for (let i = 0; i < BLOCK_DATA.length; i += 2) {
      rows.push(
        <View key={i} style={styles.buttonRow}>
          <BlockButton {...BLOCK_DATA[i]} navigation={navigation} />
          {i + 1 < BLOCK_DATA.length && <BlockButton {...BLOCK_DATA[i + 1]} />}
        </View>,
      );
    }
    return rows;
  };

  return (
    <View style={styles.rootContainer}>
      <HomeHeader />
      <View style={styles.mainContainer}>
        <View style={styles.gradientContainer}>
          <GradientBG style={styles.gradientBG} width="100%" height={250} />
          <View style={styles.gradientOverlay}>
            <View
              style={[
                styles.textContainer,
                {borderRightWidth: 2, borderColor: 'white'},
              ]}>
              <Text style={styles.valueText}>234</Text>
              <Text style={styles.labelText}>TOKENS</Text>
            </View>
            <View
              style={[
                styles.textContainer,
                {borderRightWidth: 2, borderColor: 'white'},
              ]}>
              <Text style={styles.valueText}>190</Text>
              <Text style={styles.labelText}>CRYPTO</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.valueText}>715</Text>
              <Text style={styles.labelText}>LOANS</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>{renderBlockRows()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#171717',
    paddingHorizontal: 20,
    paddingLeft: 26,
  },
  mainContainer: {
    flex: 1,
    gap: 24,
    marginTop: 24,
  },
  gradientContainer: {
    position: 'relative',
    width: '100%',
    height: 250,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 7,
    right: 7,
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    gap: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 9,
  },
  button: {
    flex: 1,
    height: 54,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontFamily: FONTS.BOLD,
    fontWeight: '700',
  },
  textContainer: {
    flex: 1,
    height: 72,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText: {
    color: 'white',
    fontSize: 40,
    fontFamily: FONTS.REGULAR,
  },
  labelText: {
    color: 'white',
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    fontWeight: '400',
  },
});

export default HomeScreen;
