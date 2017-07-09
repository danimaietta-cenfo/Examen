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
} from 'native-base';


let tables = [{number: 1, order:[]}];

export default class Empezar extends Component{

  constructor(props){
    super(props)
    this.state = {
      displayValue: 1,
      tables: tables,
    }
  }

  async componentDidMount(){
      tables.push({number: tables.length + 1, order: []})
  }

    render(){
      const { navigate } = this.props.navigation;
      return (
          <Container>
            <Header>
                <View style={styles.header}>
                    <Body>
                        <Title>Cantidad de mesas</Title>
                    </Body>
                </View>
            </Header>
            <Content>
                <View style={styles.center}>
                    <Body>
                      <Text style={styles.text}>{this.state.displayValue}</Text>
                        <SimpleStepper
                            valueChanged={(value) => this.valueChanged(value)}
                            imageHeight={ 140 }
                            imageWidth={ 140 }
                            padding={30}
                            minimumValue={1}
                            maximumValue={10}
                        />
                    </Body>
              </View>
            </Content>
            <Footer>
                <FooterTab>
                    <Button full
                        onPress={()=>navigate('SalonCocina',{tables: this.state.tables})}>
                        <Title>Empezar</Title>
                    </Button>
                </FooterTab>
            </Footer>
          </Container>
    )}

    valueChanged(value) {
      const displayValue = value.toFixed(null)

      if(this.state.displayValue < value){
        tables.push({number: tables.length + 1, order: []})
      }else{
        tables.pop({number: tables.length + 1, order: []})
      }
      this.setState({
         displayValue: value,
         tables: tables,
      })
    }

}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Dimensions.get('window').width/3,
  },
    text: {
      fontSize: 100,
      fontWeight: 'bold',
      color: '#000000',
    }
});

module.export = Empezar;
