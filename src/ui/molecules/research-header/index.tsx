import React from 'react';
import {useTheme} from 'emotion-theming';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme, TextSizes, Colors} from '@theme/theme-type';
import AnalysisPrimary from 'assets/icons/analysis.svg';
import AnalysisSecondary from 'assets/icons/analysis-secondary.svg';
import {Text} from '@ui/atoms/text';

const getAnalysisByColor = (color, props) => {
  if (color === 'secondary') {
    return <AnalysisSecondary {...props} />;
  } else {
    return <AnalysisPrimary {...props} />;
  }
};

interface IResearchHeaderProps {
  textSize: TextSizes;
  color: Colors;
  iconSize: 'small' | 'medium' | 'big';
  name: string;
}

export const ResearchHeader: React.FC<IResearchHeaderProps> = ({
  color = 'secondary',
  textSize = 'bigger',
  iconSize = 'big',
  name,
}) => {
  const theme: ITheme = useTheme();
  return (
    <Header>
      {getAnalysisByColor(color, theme.icons.sizes[iconSize])}
      <Name size={textSize} weight={theme.font.weights.bold}>
        {name}
      </Name>
    </Header>
  );
};

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex: 1;
`;

const Name = styled(Text)`
  margin-left: 30px;
`;
