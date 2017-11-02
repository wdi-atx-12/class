import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Slider,
  PixelRatio,
  TouchableHighlight
} from 'react-native';


export default class GAR extends Component<{}> {
  constructor(props) {
   super(props);
   this.state = {
     supervision: 2,
     planning: 2,
     teamSelection: 2,
     teamFitness: 2,
     environment: 2,
     complexity: 2
   }
   this._reset = this._reset.bind(this);
 }

 _reset(){
   this.setState({
     supervision: 2,
     planning: 2,
     teamSelection: 2,
     teamFitness: 2,
     environment: 2,
     complexity: 2
   })
 }
  _total() {
    let {
      supervision,
      planning,
      teamSelection,
      teamFitness,
      environment,
      complexity
    } = this.state;
    return supervision + planning + teamSelection + teamFitness + environment + complexity;
  }

  _color() {
   let total = this._total()
   if (total <= 23) {
     return 'green'
   } else if (total <= 44) {
     return 'amber'
   } else {
     return 'red'
   }
  }

  render() {
    let color = this._color();
    color = color[0].toUpperCase() + color.slice(1);
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.header, styles[this._color()]]}>
          <Text style={styles.title}>{this._total()} {color}</Text>
        </View>

        <View style={styles.sliderContainer}>
            <Text>Supervision: {this.state.supervision}</Text>
         <Slider
           maximumValue={10}
           step={1}
           value={this.state.supervision}
           onValueChange={supervision => this.setState({ supervision })}
           />
        </View>

       <View style={styles.sliderContainer}>
          <Text>Planning: {this.state.planning}</Text>
          <Slider
            maximumValue={10}
            step={1}
            value={this.state.planning}
            onValueChange={planning => this.setState({ planning })}
            />
        </View>

      <View style={styles.sliderContainer}>
          <Text>Team Selection: {this.state.teamSelection}</Text>
       <Slider
         maximumValue={10}
         step={1}
         value={this.state.teamSelection}
         onValueChange={teamSelection => this.setState({ teamSelection })}
         />
      </View>

     <View style={styles.sliderContainer}>
        <Text>Team Fitness: {this.state.teamFitness}</Text>
        <Slider
          maximumValue={10}
          step={1}
          value={this.state.teamFitness}
          onValueChange={teamFitness => this.setState({ teamFitness })}
          />
      </View>

      <View style={styles.sliderContainer}>
          <Text>Environment: {this.state.environment}</Text>
       <Slider
         maximumValue={10}
         step={1}
         value={this.state.environment}
         onValueChange={environment => this.setState({ environment })}
         />
      </View>

      <View style={styles.sliderContainer}>
        <Text>Complexity: {this.state.complexity}</Text>
        <Slider
          maximumValue={10}
          step={1}
          value={this.state.complexity}
          onValueChange={complexity => this.setState({ complexity })}
          />
      </View>

      <TouchableHighlight style={styles.resetButton} onPress={this._reset}>
        <Text style={styles.resetButtonText}>Reset all fields to 2</Text>
      </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: 78 / PixelRatio.get()
  },
  green: {
    backgroundColor: 'green'
  },
  amber: {
    backgroundColor: 'orange'
  },
  red: {
    backgroundColor: 'red'
  },
  sliderContainer: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 40 / PixelRatio.get(),
    paddingRight: 40 / PixelRatio.get(),
    borderColor: '#AAAAAA',
    borderBottomWidth: 1 / PixelRatio.get()
  },
  resetButtonText: {
    color: '#FFF',
    fontSize: 20
  },
  resetButton: {
    flex: 2,
    backgroundColor: '#1452E3',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
