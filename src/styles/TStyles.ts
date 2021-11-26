export type ContainerProps = {
    flex?: number,
    background?: string,
    align?: string,
    justify?: string,
    margin?: string,
    wrap?: string,
    row?: boolean,
    width?: string,
    maxWidth?: string,
    minWidth?: string,
    height?: string,
    maxHeight?: string,
    minHeight?: string,
    hasPadding?: boolean,
    customPadding?: string,
    removePaddingTop?: string | boolean,
    removePaddingBottom?: string | boolean,
    radius?: string,
    border?: number,
    borderColor?: string
}

export type ScrollViewProps = {
    margin?: number,
    hasPadding?: boolean,
    customPadding?: string,
    removePaddingTop?: string,
    removePaddingBottom?: string,
    background?: string,
    verticalScrollIndicator?: boolean,
    horizontalScrollIndicator?: boolean
}

export type SpacerProps = {
    size?: number,
    vertical?: boolean
}

export type TextProps = {
    color?: string,
    small?: boolean,
    big?: boolean,
    size?: number,
    bold?: string,
    align?: string,
    scale?: string,
    spacing?: number,
    hasPadding?: boolean,
    customPadding?: string,
    opacity?: number,
    decoration?: string,
    margin?: number
}

export type ButtonProps = {
    background?: string,
    block?: boolean,
    half?: boolean,
    textColor?: string,
}

export type TextInputProps = {
    error: boolean | string
}

export type HelperTextProps = {
    type?: string,
}

export type ActivityIndicatorProps = {
    color?: string,
    size?: string
}

export type SnackbarProps = {
    background?: string,
    time?: number,
    style?: string
}

export type OnboardingProps = {
    bottomBarHeight?: number,
    bottomBarColor?: string
}

export type ModalProps = {
    adjustToContentHeight?: boolean,
    background?: string,
    handleColor?: string
}