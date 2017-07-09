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
import { getTables } from '../common/global';

export default class Pendientes extends Component{

  static navigationOptions = ({navigation}) => ({

  });

  constructor(props){
    super(props)
  }

    render(){
      const { params } = this.props.navigation.state;
      const { navigate } = this.props.navigation;

      let listOrders = params.tables.map((table,i) => {
            return (
                      <View style={styles.content} key={i}>
                              <ListItem row>
                                  <Text style={styles.text}>{table.order.table + "  " + table.order.cant + "  " + table.order.type + "  " + table.order.description}</Text>
                              </ListItem>
                      </View>

                  )
        });
      return (
        <Container>
          <Header>
              <View style={styles.header}>
                  <Body>
                      <Title>Pendientes</Title>
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
        </Container>
    )}

}

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      color: '#000000',
    }
});

module.export = Pendientes;
