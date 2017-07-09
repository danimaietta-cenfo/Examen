import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import SimpleStepper from 'react-native-simple-stepper';
import { Container,
  Content,
  Header,
  Footer,
  FooterTab,
  Form,
  Item,
  Input,
  Label,
  Button,
  Left,
  Right,
  Body,
  Title,
  Card,
  CardItem,
} from 'native-base';

export default class SalonCocina extends Component{

  static navigationOptions = ({navigation}) => ({

  });

  constructor(props){
    super(props)
  }

    render(){
      const { params } = this.props.navigation.state;
      const { navigate } = this.props.navigation;
      return (
        <Container>
            <Content>
                <Card>
                    <CardItem>
                        <Left>
                            <Text style={styles.text}>Salón</Text>
                        </Left>
                    </CardItem>
                    <CardItem cardBody button onPress={() => navigate('Mesas', {tables: params.tables})}>
                        <Image
                            source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/39/91/nuestro-salon-comedor.jpg'}} style={{height: 220, width: null, flex: 1}}
                        />
                    </CardItem>
                 </Card>
                 <Card>
                     <CardItem>
                         <Left>
                             <Text style={styles.text}>Cocina</Text>
                         </Left>
                     </CardItem>
                     <CardItem cardBody button onPress={() => navigate('Pendientes', {tables: params.tables})}>
                         <Image
                           source={{uri: 'https://professor-falken.com/wp-content/uploads/2016/10/cocineros-cocina-comida-profesio-n-chefs-Fondos-de-Pantalla-HD-professor-falken.com_-1024x683.jpg'}} style={{height: 220, width: null, flex: 1}}
                        />
                   </CardItem>
                  </Card>
            </Content>
        </Container>
    )}

}

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      color: '#000000',
    }
});

module.export = SalonCocina;
