import React from 'react';
import {useTheme} from 'emotion-theming';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme} from '@theme/theme-type';
import {UIButton} from '@ui/atoms/button';
import {getShadowStyle} from '@lib/shadow-style';
import AnalysisPrimary from 'assets/icons/analysis.svg';
import AnalysisSecondary from 'assets/icons/analysis-secondary.svg';
import {IAnalysis} from '@screens/view-profile';
import {Text} from '@ui/atoms/text';
import { normalize } from '@lib/normalize-font';

interface IAnalysisCardProps {
  analysis: IAnalysis;
}

const getAnalysisByColor = (color, props) => {
  if (color === 'secondary') { 
    return <AnalysisSecondary {...props} />
  } else {
    return <AnalysisPrimary {...props} />
  }
}

export const AnalysisCard: React.FC<IAnalysisCardProps> = ({analysis: {name, description, color}}) => {
  const theme: ITheme = useTheme();
  return (
    <Card style={getShadowStyle(theme.shadow.light)}>
      <Header>
        {getAnalysisByColor(color, theme.icons.sizes.medium)}
        <Name weight={theme.font.weights.bold}>{name}</Name>
      </Header>
      <Desc>{description}</Desc>
      <Button color={color} title="Просмотреть" />
      <TextButton weight={theme.font.weights.normal} isLowerCase isTextOnly color={color} title="Узнать подробнее" />
    </Card>
  );
};

const Card = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  max-width: ${normalize(320)};
  background-color: white;
  border-radius: ${defaultTheme.borderRadius.analysisCard};
  &:not(:first-of-type) {
      margin-top: 25px;
  }
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex: 1;
`;

const Desc = styled(Text)`
  flex: 1;
  margin: 20px 0;
`;

const Name = styled(Text)`
  margin-left: 30px;
`

const Button = styled(UIButton)`
  width: auto;
  max-width: 225px;
  margin-top: 30px;
`

const TextButton = styled(Button)`
  margin-top: 16px;
  max-width: 100%;
`