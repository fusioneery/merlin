import React, {ReactNode, useEffect, useState, ReactElement, PropsWithChildren} from 'react';
import {BoxShadow} from 'react-native-shadow';
import {View} from 'react-native';
import {IShadow} from '@theme/theme-type';
import {getBoxShadowSettings} from '@lib/shadow-style';

interface IShadowProps {
  shadow: IShadow | {};
  radius?: string;
  children: ReactElement | any;
  z?: number;
  style: any;
}

export const Shadow = (props: IShadowProps) => {
  const {children, shadow, radius = '0px', style, z = 10} = props;
  const [state, setState] = useState({width: 0, height: 0, isCalculated: false});
  const {width, height, isCalculated} = state;
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      onLayout: e => {
        const {width, height} = e.nativeEvent.layout;
        setState({width, height, isCalculated: true});
      },
    }),
  );
  const numberedRadius = Number(radius.substr(0, 2));
  console.log(width, height);
  return isCalculated && Object.keys(shadow).length > 0 ? (
    <BoxShadow
      setting={{
        ...getBoxShadowSettings(width, height, shadow, numberedRadius),
        style: {zIndex: z, ...style},
      }}>
      {childrenWithProps}
    </BoxShadow>
  ) : (
    childrenWithProps
  );
};
