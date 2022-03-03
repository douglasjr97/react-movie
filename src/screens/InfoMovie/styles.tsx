import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const ImageBackground = styled.ImageBackground.attrs({
    imageStyle: { borderRadius: 7 }
})`
    height: 100%;
`;

export const ImageMovie = styled.ImageBackground.attrs({})`
    height: 100%;
`;

export const Header = styled.View``;

export const BackgroundContent = styled.View`
    width: 100%;
    height: ${RFValue(234)}px;
    margin-bottom: 16px;
`;

export const ImageMovieContent = styled(BorderlessButton)`
    width: 100px;
    height: 150px;
    position: absolute;
    margin: 16px;
    margin-top: 150px;
`;

export const TitleMovie = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 130px;
`;
export const TitleDescription = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.shape};
    margin-bottom: 16px;
`;

export const DescriptionWrapper = styled.View`
    margin: 16px;
    margin-top: 36px;
`;

export const Description = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
`;

export const OpenInWebSiteText = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.shape};
`;

export const OpenInWebSiteButton = styled(RectButton)`
    align-items: center;
    justify-content: center;
    margin-top: 16px;
`;
