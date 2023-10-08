import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {AppTheme, useAppTheme} from './theme/theme';

type StyledButtonProps = React.ComponentProps<typeof Button> & {
  version: 'primary' | 'secondary' | 'tertiary' | 'danger';
};

export const LongButton = (props: StyledButtonProps) => {
  const {version, children, ...buttonProps} = props;
  const theme = useAppTheme();
  const textColor =
    version === 'secondary' ? theme.colors.primary : theme.colors.black5;
  const styles = makeStyles(theme);

  return (
    <Button
      style={[styles.basic, styles[version]]}
      textColor={textColor}
      {...buttonProps}>
      {children}
    </Button>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    basic: {
      marginHorizontal: 24,
      borderRadius: 8,
      height: 40,
    },
    primary: {
      backgroundColor: theme.colors.primary,
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: {height: 2, width: 2},
    },
    secondary: {
      backgroundColor: theme.colors.black5,
      borderColor: theme.colors.primary,
      borderWidth: 1,
    },
    tertiary: {
      backgroundColor: theme.colors.warning,
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: {height: 2, width: 2},
    },
    danger: {
      backgroundColor: theme.colors.error,
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: {height: 2, width: 2},
    },
  });
