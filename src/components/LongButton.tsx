import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

type StyledButtonProps = React.ComponentProps<typeof Button> & {
  version: 'primary' | 'secondary' | 'tertiary' | 'danger';
};

export const LongButton = (props: StyledButtonProps) => {
  const {version, children, ...buttonProps} = props;
  const textColor = version === 'secondary' ? 'blue' : 'white';

  return (
    <Button
      style={[styles.basic, styles[version]]}
      textColor={textColor}
      {...buttonProps}>
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  basic: {
    marginHorizontal: 24,
    borderRadius: 8,
    height: 40,
  },
  primary: {
    backgroundColor: 'blue',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {height: 2, width: 2},
  },
  secondary: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 1,
  },
  tertiary: {
    backgroundColor: 'orange',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {height: 2, width: 2},
  },
  danger: {
    backgroundColor: 'red',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {height: 2, width: 2},
  },
});
