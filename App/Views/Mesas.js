import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableHighlight,
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
} from 'native-base';

export default class Mesas extends Component{

  static navigationOptions = ({navigation}) => ({

  });

  constructor(props){
    super(props)

  }

    render(){
          const { params } = this.props.navigation.state;
          const { navigate } = this.props.navigation;

          let listTable = params.tables.map((table,i) => {
          return (
                  <View style={styles.content} key={i}>
                      <TouchableHighlight onPress={() => navigate('Ordenes', {tables: table})}>
                          <Segment>
                              <Text style={styles.text}>{table.number} </Text>
                          </Segment>
                      </TouchableHighlight>
                  </View>
                )
            });

      return (
        <Container>
          {listTable}
        </Container>
    )}

}

const styles = StyleSheet.create({
    content: {
      paddingTop: 10,
      flex: 1,
    },
    text: {
      fontSize: 30,
      color: '#E9E7E7',
      fontWeight: 'bold',
    }
});

module.export = Mesas;
