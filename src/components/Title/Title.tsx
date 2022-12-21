import { Text } from 'react-native';
import styles from './styles';

interface TitleProps {
  text?: string;
  style?: Record<string, unknown>;
}

const Title = ({ text = 'Default Title Text', style }: TitleProps) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

export default Title;
