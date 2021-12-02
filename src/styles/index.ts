import styled from 'styled-components/native';
import { colors } from './theme.json'
import { LinearGradient } from 'expo-linear-gradient';
import OnboardingApp from 'react-native-onboarding-swiper';
import { Modalize } from 'react-native-modalize';

import {
  ContainerProps, SpacerProps, TextProps, ButtonProps, SnackbarProps, TextInputProps,
  HelperTextProps, ScrollViewProps, ActivityIndicatorProps, OnboardingProps, ImageProps,
  ModalProps, CoverProps, TouchableProps
} from './TStyles'

import {
  Button as ButtonPaper,
  TextInput as TextInputPaper,
  HelperText as HelperTextPaper,
  Snackbar as SnackbarPaper,
  ActivityIndicator as ActivityIndicatorPaper,
  Searchbar as SearchbarPaper
} from 'react-native-paper';

export const Container = styled.View<ContainerProps>`
  flex: ${props => props.flex || 1};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};

  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  max-width: ${props => props.maxWidth || '100%'};
  max-height: ${props => props.maxHeight || 'auto'};

  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  margin: ${props => props.margin || 0};
  border-radius: ${props => props.radius ? '10px' : props.customRadius ? props.customRadius : '0'};
  border-width: ${props => `${props.border || 0}px`};
  border-color: ${props => `${props.theme[props?.borderColor] || props?.borderColor || '#000'}`};
  background: ${props => `${props.theme[props?.background] || props?.background || 'transparent'}`};
`;

export const ScrollView = styled.ScrollView.attrs<ScrollViewProps>(props => ({
  showsVerticalScrollIndicator: props.verticalScrollIndicator || false,
  showsHorizontalScrollIndicator: props.horizontalScrollIndicator || false
})) <ScrollViewProps>`
  width: 100%;
  margin: ${props => props.margin || 0};
  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  background: ${props => `${props.theme[props?.background] || props?.background || 'transparent'}`};
`;

export const ContainerKeyboardAvoiding = styled.KeyboardAvoidingView<ContainerProps>`
  flex: ${props => props.flex || 1};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};

  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || '100%'};
  height: ${props => props.height || 'auto'};
  max-height: ${props => props.maxHeight || 'auto'};

  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  margin: ${props => props.margin || 0};
  border-radius: ${props => props.radius ? '10px' : props.customRadius ? props.customRadius : '0'};
  border-width: ${props => `${props.border || 0}px`};
  border-color: ${props => `${props.theme[props?.borderColor] || props?.borderColor || '#000'}`};
  background: ${props => `${props.theme[props?.background] || props?.background || 'transparent'}`};
`;

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  flex-wrap: ${props => props.wrap || 'nowrap'};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};

  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || '100%'};
  height: ${props => props.height || 'auto'};
  max-height: ${props => props.maxHeight || 'auto'};

  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  margin: ${props => props.margin || 0};
  border-radius: ${props => props.radius ? '10px' : props.customRadius ? props.customRadius : '0'};
  border: ${props => props.border || 'none'};

  background: ${props => `${props.theme[props?.background] || props?.background || 'transparent'}`};
`;

export const Cover = styled.ImageBackground.attrs<CoverProps>(props => ({
  resizeMode: props.mode || 'contain',
})) <CoverProps>`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '100px'};
  justify-content: ${props => props.justify || 'flex-start'};
  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  max-height: ${props => props.height || '100px'};
  margin: ${props => props.margin || 0};
  border-radius: ${props => props.radius || 0}px;
  border: ${props => props.border || 'none'};
  overflow: hidden;
`;

export const Image = styled.Image.attrs<ImageProps>(props => ({
  resizeMode: props.mode || 'contain',
})) <ImageProps>`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '100px'};
`;

// Roboto_100Thin,
// Roboto_100Thin_Italic,
// Roboto_300Light,
// Roboto_300Light_Italic,
// Roboto_400Regular,
// Roboto_400Regular_Italic,
// Roboto_500Medium,
// Roboto_500Medium_Italic,
// Roboto_700Bold,
// Roboto_700Bold_Italic,
// Roboto_900Black,
// Roboto_900Black_Italic

export const Title = styled.Text <TextProps>`
  font-size: ${props => props.small ? '20px' : props.big ? '35px' : props.size ? props.size + 'px' : '25px'};
  text-align: ${props => props.align || 'left'};
  letter-spacing: ${props => props.spacing ? props.spacing + 'px' : '0'};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  color: ${props => `${props.theme[props?.color] || props.color || colors.dark}`};
  margin: ${props => props.margin || 0};
  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  opacity: ${props => props.opacity || 1};
  text-decoration: ${props => props.decoration || 'none'};
  font-family: 'Roboto_400Regular';
`;

export const Text = styled.Text <TextProps>`
  color: ${props => `${props.theme[props?.color] || props.color || colors.dark}`};
  font-size: ${props => props.small ? '13px' : props.big ? '17px' : props.size ? props.size + 'px' : '15px'};
  margin: ${props => props.margin || 0}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  letter-spacing: ${props => props.spacing ? props.spacing + 'px' : '0'};
  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  opacity: ${props => props.opacity || 1};
  text-align: ${props => props.align || 'left'};
  text-decoration: ${props => props.decoration || 'none'};
`;

export const Button = styled(ButtonPaper).attrs<ButtonProps>(props => ({
  color: props.theme[props.background] || props.background || props.theme.primary,
  width: props.block ? '100%' : props.half ? '50%' : 'auto',
  labelStyle: {
    color: props.theme[props.textColor || 'light'],
    letterSpacing: 0,
    fontSize: 18,
    //fontFamily: 'Ubuntu_300Light',
  },
  uppercase: false,
  mode: props.mode || 'contained',
})) <ButtonProps>``;

export const TextInput = styled(TextInputPaper).attrs<TextInputProps>(props => ({
  mode: 'outlined',
  outlineColor: props.theme.primary,
  underlineColor: props.theme.primary,
  selectionColor: props.theme.primary,
  theme: {
    colors: {
      text: props.theme.primary,
      primary: props.theme.primary,
      background: props.theme.light,
      placeholder: props.theme.primary,
    },
  }
})) <TextInputProps>`
  height: 45px;
  width: 100%;
  font-size: 15px;
`;

export const GradientView = styled(LinearGradient) <ContainerProps>`
  flex: ${props => props.flex || 1};
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
`;

export const HelperText = styled(HelperTextPaper).attrs(props => ({
  type: 'error',
})) <HelperTextProps>``;

export const Snackbar = styled(SnackbarPaper).attrs<SnackbarProps>(props => ({
  duration: props.time ? props.time : 3000,
})) <SnackbarProps>`
  flex: 1;
  background-color: ${props => props.background ? props.background : props.theme.danger};
`;

export const ActivityIndicator = styled(ActivityIndicatorPaper).attrs<ActivityIndicatorProps>(props => ({
  size: props.size || 'large',
  color: props.theme[props.color] || props.color || colors.primary
})) <ActivityIndicatorProps>`
  flex: 1;
`;

export const Onboarding = styled(OnboardingApp).attrs<OnboardingProps>(props => ({
  controlStatusBar: false,
  bottomBarHeight: props.bottomBarHeight,
  bottomBarColor: props.bottomBarColor
})) <OnboardingProps>``;

export const Spacer = styled.View<SpacerProps>`
  width: ${props => props.vertical ? '25px' : '100%'};
  height: ${props => props.size ? props.size + 'px' : props.vertical ? '100%' : '10px'};
`;

export const Searchbar = styled(SearchbarPaper) <SpacerProps>``;

export const Modal = styled(Modalize).attrs<ModalProps>(props => ({
  adjustToContentHeight: props.adjustToContentHeight || false,
  handleStyle: {
    backgroundColor: props.handleColor || colors.muted,
  },
  modalStyle: {
    backgroundColor: props.background || colors.light,
  }
})) <ModalProps>``;





