import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Button = styled(RectButton)`
    height: ${RFValue(56)}px;
    width: ${RFValue(300)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    align-items: center;
    flex-direction: row;
    margin-bottom: 16px;
`;

export const Text = styled.Text`
    flex: 1;
    text-align: center;
    color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.card_regular};
    font-size: ${RFValue(14)}px;
`;
