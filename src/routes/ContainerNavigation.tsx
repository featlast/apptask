import {NavigationContainer} from '@react-navigation/native';
import {StackAppNavigator} from './StackAppNavigator';

const ContainerNavigation = () => {
  return (
    <NavigationContainer>
      <StackAppNavigator />
    </NavigationContainer>
  );
};

export default ContainerNavigation;
