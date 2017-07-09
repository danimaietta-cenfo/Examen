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
  Segment,
  ListItem,
} from 'native-base';

export default class Ordenes extends Component{

  static navigationOptions = ({navigation}) => ({

  });

  constructor(props){
    super(props)
  }

    render(){
      const { params } = this.props.navigation.state;
      const { navigate } = this.props.navigation;

      let listOrders = params.tables.order.map((order,i) => {
      return (
              <View style={styles.content} key={i}>
                      <ListItem row>
                          <Text style={styles.text}>{order.cant + "  " + order.type + "  " + order.description}</Text>
                      </ListItem>
              </View>
            )
        });
      return (
        <Container>
          <Header>
              <View style={styles.header}>
                  <Body>
                      <Title>Mesa {params.tables.number}</Title>
                  </Body>
              </View>
          </Header>
          <Content>
              <View style={styles.center}>
                  <Body>
                      {listOrders}
                  </Body>
            </View>
          </Content>
          <Footer>
              <FooterTab>
                  <Button full
                      onPress={()=>navigate('AgregarOrden', {tables: params.tables})}>
                      <Title>Agregar Orden</Title>
                  </Button>
              </FooterTab>
          </Footer>
        </Container>
    )}

}

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      color: '#000000',
    }
});

module.export = Ordenes;
