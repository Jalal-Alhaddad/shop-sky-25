import { Text } from 'react-native';

export function Greeting(props) {
  return (
    <Text>Hello {props.name}</Text>
    <Text>Welcome to : {props.tafe}</Text>
  );
}