import styled from 'styled-components/native';
import { colors } from './theme.json'
import { LinearGradient } from 'expo-linear-gradient';
import OnboardingApp from 'react-native-onboarding-swiper';
import { Modalize } from 'react-native-modalize';

import {
  ContainerProps, SpacerProps, TextProps, ButtonProps, SnackbarProps, TextInputProps,
  HelperTextProps, ScrollViewProps, ActivityIndicatorProps, OnboardingProps, ModalProps
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
  max-width: ${props => props.maxWidth || '100%'};
  min-width: ${props => props.minWidth || '100%'};
  height: ${props => props.height || 'auto'};
  max-height: ${props => props.maxHeight || 'auto'};
  min-height: ${props => props.minHeight || 'auto'};

  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  padding-top: ${props => props.removePaddingTop ? '0' : props.hasPadding ? '20px' : '0px'};
  padding-bottom: ${props => props.removePaddingBottom ? '0' : props.hasPadding ? '20px' : '0px'};
  
  margin: ${props => props.margin || 0};
  border-radius: ${props => props.radius ? '5px' : '0px'};
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
  padding-top: ${props => props.removePaddingTop ? '0' : props.hasPadding ? '20px' : '0px'};
  padding-bottom: ${props => props.removePaddingBottom ? '0' : props.hasPadding ? '20px' : '0px'};
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
  min-width: ${props => props.minWidth || '100%'};
  height: ${props => props.height || 'auto'};
  max-height: ${props => props.maxHeight || 'auto'};
  min-height: ${props => props.minHeight || 'auto'};

  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  padding-top: ${props => props.removePaddingTop ? '0' : props.hasPadding ? '20px' : '0px'};
  padding-bottom: ${props => props.removePaddingBottom ? '0' : props.hasPadding ? '20px' : '0px'};
  
  margin: ${props => props.margin || 0};
  border-radius: ${props => props.radius ? '5px' : '0px'};
  border-width: ${props => `${props.border || 0}px`};
  border-color: ${props => `${props.theme[props?.borderColor] || props?.borderColor || '#000'}`};
  background: ${props => `${props.theme[props?.background] || props?.background || 'transparent'}`};
`;

export const Touchable = styled.TouchableOpacity<ContainerProps>`
  flex-wrap: ${props => props.wrap || 'nowrap'};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};

  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || '100%'};
  min-width: ${props => props.minWidth || '100%'};
  height: ${props => props.height || 'auto'};
  max-height: ${props => props.maxHeight || 'auto'};
  min-height: ${props => props.minHeight || 'auto'};

  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  padding-top: ${props => props.removePaddingTop ? '0' : props.hasPadding ? '20px' : '0px'};
  padding-bottom: ${props => props.removePaddingBottom ? '0' : props.hasPadding ? '20px' : '0px'};

  margin: ${props => props.margin || 0};
  border-radius: ${props => props.radius || 0};
  border: ${props => props.border || 'none'};

  background: ${props => props?.background ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
`;

export const Title = styled.Text <TextProps>`
  font-size: ${props => props.small ? '20px' : props.big ? '40px' : props.size ? props.size + 'px' : '30px'};
  text-align: ${props => props.align || 'left'};
  letter-spacing: ${props => props.spacing ? props.spacing + 'px' : '0'};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  color: ${props => `${props.theme[props?.color] || props.color || colors.dark}`};
  margin: ${props => props.margin || 0};
  letter-spacing: ${props => props.spacing ? props.spacing + 'px' : '0'};
  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  opacity: ${props => props.opacity || 1};
  text-decoration: ${props => props.decoration || 'none'};
`;

export const Text = styled.Text <TextProps>`
  color: ${props => `${props.theme[props?.color] || props.color || colors.dark}`};
  font-size: ${props => (props.small ? '13px' : '17px')};
  margin: ${props => props.margin || 0};
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
  outlineColor: props.theme.secondary,
  underlineColor: props.theme.secondary,
  selectionColor: props.theme.secondary,
  theme: {
    colors: {
      text: props.theme.dark,
      primary: props.theme.dark,
      background: props.theme.light,
      placeholder: props.theme.dark,
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

export const Searchbar = styled(SearchbarPaper)<SpacerProps>``;

export const Modal = styled(Modalize).attrs<ModalProps>(props => ({
  adjustToContentHeight: props.adjustToContentHeight || false,
  handleStyle: {
    backgroundColor: props.handleColor || colors.muted,
  },
  modalStyle: {
    backgroundColor: props.background || colors.light,
  }
})) <ModalProps>``;




