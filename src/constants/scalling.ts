import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const BASE_WIDTH: number = 375;
const BASE_HEIGHT: number = 812;

const scaleSize = (size: number): number => (width / BASE_WIDTH) * size;
const verticalScaleSize = (size: number): number => (height / BASE_HEIGHT) * size;
const responsiveFontSize = (size: number): number => {
  const scaleFactor: number = Math.min(width / BASE_WIDTH, height / BASE_HEIGHT);
  return Math.round(size * scaleFactor);
};

const responsive = {
  width: (size: number): number => scaleSize(size),
  height: (size: number): number => verticalScaleSize(size),
  fontSize: (size: number): number => responsiveFontSize(size),
  margin: (size: number): number => scaleSize(size),
  padding: (size: number): number => scaleSize(size),
  borderRadius: (size: number): number => scaleSize(size),
};

export default responsive;