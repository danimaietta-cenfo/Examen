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
import ModalDropdown from 'react-native-modal-dropdown';
import { setTables } from '../common/global';


let order = [];

export default class AgregarOrden extends Component{

  static navigationOptions = ({navigation}) => ({

  });

  constructor(props){
    super(props)
    this.state = {
        displayValue: 1,
        order: order,
        dropVal: 'Entrada',
        textVal: '',
    }
  }

    render(){
      const { params } = this.props.navigation.state;
      const { navigate } = this.props.navigation;
      return (
        <Container>
            <Content>
                <View style={styles.pad}></View>
                <Item rounded>
                    <ModalDropdown
                        style={styles.dropdown}
                        textStyle={styles.text}
                        dropdownTextStyle={styles.dropdownText}
                        options={['Entrada', 'Plato Principal', 'Bebida', 'Postre']}
                        defaultValue={'Entrada'}
                        onSelect={(index, value) => this.setState({dropVal:value})}
                        value={this.state.dropVal}
                    />
                </Item>
                <View style={styles.pad}></View>
                <Item rounded>
                    <Input
                        placeholder='Descripción'
                        onChangeText={(textVal) => this.setState({textVal})}
                        value={this.state.textVal}
                    />
                </Item>
                <View style={styles.pad}></View>
                <View style={styles.center}>
                    <Item rounded center>
                          <Text style={styles.text}>{this.state.displayValue}</Text>
                          <SimpleStepper
                              valueChanged={(value) => this.valueChanged(value)}
                              imageHeight={ 140 }
                              imageWidth={ 140 }
                              padding={30}
                              minimumValue={1}
                              maximumValue={10}
                          />
                      </Item>
                </View>
              </Content>
              <Footer>
                  <FooterTab>
                      <Button full
                          onPress={()=>this.addOrder()}>
                          <Title>Agregar</Title>
                      </Button>
                  </FooterTab>
              </Footer>
        </Container>
    )}

    addOrder(){
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        params.tables.order.push({table: params.tables.number, cant: this.state.displayValue, type: this.state.dropVal, description: this.state.textVal})
        navigate('Ordenes', {tables: params.tables})
    }

    valueChanged(value) {
        // If you want to set the value to a certain decimal point you can like so:
        const displayValue = value.toFixed(null)
        this.setState({
           displayValue: displayValue,
        })
        // ...
}

}

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      color: '#000000',
    },
    dropdownText: {
      fontSize: 15,
      color: '#000000',
    },
    dropdown: {
      padding: 30,
    },
    pad: {
      padding: 20,
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
});

module.export = AgregarOrden;
