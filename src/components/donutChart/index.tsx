/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from 'react';
import {Text, View, Animated} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface DonutChartProps {
  percentage?: number;
  radius?: number;
  strokeWidth?: number;
  duration?: number;
  color?: string;
  backgroundColor?: string;
  delay?: number;
  max?: number;
}

const DonutChart: React.FC<DonutChartProps> = ({
  percentage = 60,
  radius = 20,
  strokeWidth = 2,
  duration = 6000,
  color = '#f4560f',
  backgroundColor = '#8b8d9a',
  delay = 0,
  max = 60,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const circleRef = useRef();
  const halfCircle = radius + strokeWidth;
  const circleCircunference = 2 * Math.PI * radius;
  const animation = (toValue) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start(() => {
      // animation(toValue === 0 ? percentage : 0);
    });
  }

  useEffect(() => {
    animation(percentage);
    
    animatedValue.addListener(v => {
      if (circleRef?.current) {
        const maxPerc = (100 * v.value) / max;
        const strokeDashoffset = circleCircunference - (circleCircunference * maxPerc) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset
        });
      }
    });
    return () => {
      animatedValue.removeAllListeners();
    };
  }, [max, percentage]);

  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circleCircunference}
            strokeDashoffset={circleCircunference}
            strokeLinecap="square"
          />
        </G>
      </Svg>
    </View>
  );
}

export default DonutChart;