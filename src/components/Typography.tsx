import { StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import { Text } from 'react-native-paper';

type TypographyProps = {
  version:
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'subHeading'
    | 'paragraph'
    | 'labelBig'
    | 'label';
  color?: string;
};

export const Typography = ({
  version,
  color = '#000000',
  children,
}: PropsWithChildren<TypographyProps>) => {
  return (
    <Text style={[styles.basic, styles[version], { color: color }]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  basic: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
  },
  heading1: {
    fontSize: 68,
    fontWeight: '600',
  },
  heading2: {
    fontSize: 51,
    fontWeight: '600',
  },
  heading3: {
    fontSize: 38,
    fontWeight: '300',
  },
  heading4: {
    fontSize: 29,
    fontWeight: '600',
  },
  heading5: {
    fontSize: 22,
    fontWeight: '600',
  },
  heading6: {
    fontSize: 16,
    fontWeight: '600',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '400',
  },
  paragraph: {
    fontSize: 16,
    fontWeight: '300',
  },
  labelBig: {
    fontSize: 14,
    fontWeight: '400',
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
  },
});
