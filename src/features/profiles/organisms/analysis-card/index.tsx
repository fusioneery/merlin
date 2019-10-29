import React from 'react';
import {useTheme} from 'emotion-theming';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme} from '@theme/theme-type';
import {UIButton} from '@ui/atoms/button';
import {IAnalysis} from '@features/profiles/screens/view-profile';
import {Text} from '@ui/atoms/text';
import {normalize} from '@lib/normalize-font';
import {Shadow} from '@ui/atoms/shadow';
import {ResearchHeader} from '@ui/molecules/research-header';

interface IAnalysisCardProps {
  analysis: IAnalysis;
  onDetails(a: any): void;
}

export const AnalysisCard: React.FC<IAnalysisCardProps> = ({analysis, onDetails}) => {
  const {name, description, color} = analysis;
  const theme: ITheme = useTheme();
  return (
    <StyledShadow shadow={theme.cards.shadow} radius={theme.borderRadius.analysisCard}>
      <Card>
        <ResearchHeader color={color} iconSize="medium" textSize="bigger" name={name} />
        <Desc color={theme.colors.darkNeutral}>{description}</Desc>
        <Button size="superbig" color={color} title="Просмотреть" />
        <TextButton
          weight={theme.font.weights.normal}
          isLowerCase
          isTextOnly
          color="neutral"
          title="Узнать подробнее"
          onPress={() => onDetails(analysis)}
        />
      </Card>
    </StyledShadow>
  );
};

const Card = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 40px;
  max-width: ${normalize(320)};
  background-color: white;
  border-radius: ${defaultTheme.borderRadius.analysisCard};
`;

const StyledShadow = styled(Shadow)`
  &:not(:first-of-type) {
    margin-top: 25px;
  }
  z-index: 1;
`;

const Desc = styled(Text)`
  /* flex: 1; */
  margin: 20px 0;
`;

const Button = styled(UIButton)`
  width: 100%;
  flex: 1;
  /* max-width: 225px; */
  margin-top: 30px;
`;

const TextButton = styled(Button)`
  margin-top: 16px;
  max-width: 100%;
`;
