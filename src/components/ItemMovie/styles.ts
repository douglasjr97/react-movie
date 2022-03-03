import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
    width: ${RFValue(340)}px;
    height: ${RFValue(234)}px;
    background-color: ${({ theme }) => theme.colors.black};

    border-radius: 7px;
    margin-bottom: 16px;
    justify-content: center; ;
`;

export const ImageBackground = styled.ImageBackground.attrs({
    imageStyle: { borderRadius: 7 }
})`
    height: 100%;
`;

export const ContentViewMovie = styled.View`
    justify-content: flex-end;
    margin-top: 190px;

    background-color: black;
    padding: 0 24px;
`;

export const TitleMovie = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    text-align: left;
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(28)}px;
`;

export const DateMovie = styled.Text`
    font-family: ${({ theme }) => theme.fonts.card_regular};
    color: ${({ theme }) => theme.colors.primary};
`;

export const InfoMovie = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const RatingMovie = styled.Text`
    font-family: ${({ theme }) => theme.fonts.card_regular};
    color: ${({ theme }) => theme.colors.primary};
`;
