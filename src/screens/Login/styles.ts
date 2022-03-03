import { Image } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.card_title};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(30)}px;
    text-align: center;
`;

export const Header = styled.View`
    align-items: center;
    margin-top: 90px;
    margin-bottom: 40px;
`;

export const ImageContainer = styled.View`
    align-items: center;

    margin-bottom: 40px;
`;

export const TitleWrapper = styled.View`
    align-items: center;
    margin: 16px;
    margin-bottom: 40px;
`;

export const LoginTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.card_regular};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(16)}px;
    text-align: center;
`;

export const Footer = styled.View`
    align-items: center;
`;
