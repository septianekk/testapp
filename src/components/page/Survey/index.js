// import React, {useState, useEffect} from 'react';
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import getPlan from '../../../utils/mealPlan';
// import {getSurveyData} from '../../../utils/data';
// import Tabs, {Tab} from '../../shared/Tabs';
// import SelectRn from '../../shared/Select';
// import {RadioButton} from 'react-native-paper';
// // import RadioForm, {
// //   RadioButton,
// //   RadioButtonInput,
// //   RadioButtonLabel,
// // } from 'react-native-simple-radio-button';

// const Survey = data => {
//   //   const [mealCount, setMealCount] = useState();
//   //   const [planType, setPlanType] = useState();
//   //   const [healthPreferences, setHealthPreferences] = useState();
//   //   const [calories, setCalories] = useState();
//   //   const [diet, setDiet] = useState();
//   //   const [loading, setLoading] = useState();
//   //   const [redirect, setRedirect] = useState();

//   const [state, setState] = useState({
//     mealCount: '',
//     planType: '',
//     healthPreferences: '',
//     calories: '',
//     diet: '',
//     loading: '',
//     redirect: '',
//   });
//   const {selectOpt, dietSpec, healthSpec} = data;

//   useEffect =
//     (() => {
//       let data = getSurveyData();
//       const count = data.selectOpt.mealCount[0].val;
//       const plan = data.selectOpt.planType[0].val;
//       const defaultDiet = {
//         activeIndex: 0,
//         name: data.dietSpec[0].name,
//       };
//       const calories = {
//         activeIndex: 0,
//         selected: 'rec',
//         min: data.state.calories.min,
//         max: data.state.calories.max,
//       };
//       //   setMealCount(mealCount);
//       //   setPlanType(plan);
//       //   setHealthPreferences({});
//       //   setCalories(calories);
//       //   setDiet(defaultDiet);
//       //   setLoading(false);
//       //   setRedirect(false);
//       setState({
//         mealCount: count,
//         planType: plan,
//         healthPreferences: {},
//         calories: calories,
//         diet: defaultDiet,
//         loading: false,
//         redirect: false,
//       });
//     },
//     []);

//   const handleHealth = name => {
//     setHealthPreferences(prevState => {
//       let value = prevState.state.healthPreferences[name]
//         ? !prevState.state.healthPreferences[name]
//         : true;
//       return {
//         healthPreferences: {
//           ...prevState.state.healthPreferences,
//           [name]: value,
//         },
//       };
//     });
//   };

//   const handleSelect = () => {};

//   const handleCalories = index => {
//     let selected = partseInt(index, 10) === 1 ? 'custom' : 'rec';
//     setState({...state.calories, activeIndex: index, selected: selected});
//   };

//   const setCalories = () => {
//     if (value) {
//       let value = parseInt(value, 10);
//       if (isNaN(value)) {
//         value = 0;
//       }
//       setState({calories: {...state.calories, [value]: value}});
//     }
//   };

//   const handleDiet = index => {
//     const name = data.dietSpec[index].name;
//     setState({diet: {activeIndex: index, name: name}});
//   };

//   const goTo = () => {
//     const Tabs = this.tabs;
//     switch (props.name) {
//       case 'next':
//         Tabs.handleClick(Tabs.state.activeIndex + 1);
//         break;
//       case 'back':
//         Tabs.handleClick(Tabs.state.activeIndex - 1);
//       default:
//         break;
//     }
//   };

//   const getMealPlan = () => {
//     const meals = data.mealTypes[state.mealCount];
//     const res = {
//       plan: state.planType,
//       health: state.healthPreferences,
//       calories: {min: state.calories.min, max: state.calories.max},
//       diet: state.diet.name,
//       meals: meals,
//     };
//     setState({loading: true}, () => {
//       getPlan(res).then(data => {
//         let par = {num: state.planType, data: data};
//         setState({loading: false, redirect: true, data: par});
//       });
//     });
//   };

//   return (
//     <View>
//       <Text>Some quick questions</Text>
//       <Tabs defaultIndex={0} ref={tabs}>
//         <Tab heading="1">
//           <Text>How many meals do you? </Text>
//           <SelectRn
//             label="Pilih"
//             value={state.mealCount}
//             onSelectChange={value => setState({mealCount: value})}
//           />
//           <View>
//             <TouchableOpacity onPress={goto} name="next">
//               <Text>Next</Text>
//             </TouchableOpacity>
//           </View>
//         </Tab>
//         <Tab heading="2">
//           <Text>Choose a plan type</Text>
//           <SelectRn
//             label="Pilih"
//             value={state.planType}
//             onSelectChange={value => setState({planType: value})}
//           />
//           <View>
//             <TouchableOpacity onPress={goTo} name="back">
//               <Text>Back</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={goTo} name="next">
//               <Text>Next</Text>
//             </TouchableOpacity>
//           </View>
//         </Tab>
//         <Tab>
//           <Text>Any dietary preferences</Text>
//           {/* <RadioForm
//             radio_props={state.diet.activeIndex}
//             initial={0}
//             onPress={value => setState({diet: value})}
//           /> */}
//           <RadioButton.Group onValueChange={handleDiet} value={state.diet}>
//             {dietSpec.map(diet => (
//               <RadioButton.Item label={diet.text} value={diet.name} />
//             ))}
//           </RadioButton.Group>
//           <View>
//             <TouchableOpacity onPress={goTo} name="back">
//               <Text>Back</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={goTo} name="next">
//               <Text>Next</Text>
//             </TouchableOpacity>
//           </View>
//         </Tab>
//         <Tab>
//           <Text>Any Health preferences</Text>
//         </Tab>
//         <Tab heading="5">
//           <Text>Calorie intake</Text>
//           <RadioButton.Group
//             onValueChange={handleCalories}
//             value={state.calories}>
//             <RadioButton.Item label="Go with recommended" value="first" />
//             <RadioButton.Item label="Choose custom values" value="second" />
//           </RadioButton.Group>
//           {state.calories.selected === 'custom' ? (
//             <View>
//               <TextInput
//                 placeholder="min"
//                 value={state.calories.min}
//                 onChange={setCalories}
//               />
//               <TextInput
//                 placeholder="max"
//                 value={state.calories.max}
//                 onChange={setCalories}
//               />
//             </View>
//           ) : null}
//           <View>
//             <TouchableOpacity onPress={goTo} name="back">
//               <Text>Back</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={getMealPlan} name="next">
//               <Text>Next</Text>
//             </TouchableOpacity>
//           </View>
//         </Tab>
//       </Tabs>
//       {/* {state.redirect
//         ? navigation.navigate('Plan', {state: {data: data.state}})
//         : null} */}
//     </View>
//   );
// };

// export default Survey;

// const styles = StyleSheet.create({});

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import getPlan from '../../../utils/mealPlan';
import {getSurveyData} from '../../../utils/data';
import Tabs, {Tab} from '../../shared/Tabs';
import SelectRn from '../../shared/Select';
import {RadioButton} from 'react-native-paper';
import Button from '../../shared/Button/indes';
// import RadioForm, {
//   RadioButton,
//   RadioButtonInput,
//   RadioButtonLabel,
// } from 'react-native-simple-radio-button';

export default class Survey extends Component {
  componentWillMount() {
    this.data = getSurveyData();
    const count = this.data.selectOpt.mealCount[0].val;
    const plan = this.data.selectOpt.planType[0].val;
    const defaultDiet = {
      activeIndex: 0,
      name: this.data.dietSpec[0].name,
    };
    const calories = {
      activeIndex: 0,
      selected: 'rec',
      min: this.data.calories.min,
      max: this.data.calories.max,
    };
    this.setState({
      mealCount: count,
      planType: plan,
      healthPreferences: {},
      calories: calories,
      diet: defaultDiet,
      loading: false,
      redirect: false,
    });
  }

  handleHealth = name => {
    setHealthPreferences(prevState => {
      let value = prevState.healthPreferences[name]
        ? !prevState.state.healthPreferences[name]
        : true;
      return {
        healthPreferences: {
          ...prevState.healthPreferences,
          [name]: value,
        },
      };
    });
  };

  handleSelect = () => {
    this.setState({[name]: parseInt(value, 10)});
  };

  handleCalories = index => {
    let selected = partseInt(index, 10) === 1 ? 'custom' : 'rec';
    this.setState({
      ...this.state.calories,
      activeIndex: index,
      selected: selected,
    });
  };

  setCalories = () => {
    if (value) {
      let value = parseInt(value, 10);
      if (isNaN(value)) {
        value = 0;
      }
      this.setState({calories: {...this.state.calories, [value]: value}});
    }
  };

  handleDiet = index => {
    const name = this.data.dietSpec[index].name;
    this.setState({
      diet: {activeIndex: index, name: name},
    });
  };

  goTo = () => {
    const Tabs = this.tabs;
    console.log('INI ADALAH', Tabs);
    switch (this.props.name) {
      case 'next':
        Tabs.handleClick(Tabs.state.activeIndex + 1);
        break;
      case 'back':
        Tabs.handleClick(Tabs.state.activeIndex - 1);
      default:
        break;
    }
    console.log('INI ADALAH', Tabs);
  };

  getMealPlan = () => {
    const {mealCount, planType, healthPreferences, calories, diet} = this.state;
    const meals = this.data.mealTypes[mealCount];
    const res = {
      plan: planType,
      health: healthPreferences,
      calories: {min: calories.min, max: calories.max},
      diet: diet.name,
      meals: meals,
    };
    this.setState({loading: true}, () => {
      getPlan(res).then(data => {
        let par = {num: this.state.planType, data: data};
        this.setState({loading: false, redirect: true, data: par});
      });
    });
  };

  render() {
    const {selectOpt, dietSpec, healthSpec} = this.data;
    return (
      <View>
        <Text>Some quick questions</Text>
        <Tabs
          defaultIndex={0}
          ref={component => {
            this.tabs = component;
          }}>
          <Tab heading="1">
            <Text>How many meals do you? </Text>
            {/* <SelectRn
              defaultValue={this.state.mealCount}
              listObject={selectOpt.mealCount}
              handler={value => this.setState({mealCount: value})}
            /> */}
            <SelectRn
              value={this.state.mealCount}
              options={selectOpt.mealCount}
              onSelectChange={value => this.setState({mealCount: value})}
            />
            <View>
              {/* <TouchableOpacity onPress={this.goTo} name="next">
                <Text>Next</Text>
              </TouchableOpacity> */}
              <Button name="next" onPress={this.goTo}>
                Next
              </Button>
            </View>
          </Tab>
          <Tab heading="2">
            <Text>Choose a plan type</Text>
            {/* <SelectRn
              defaultValue={this.state.planType}
              listObject={selectOpt.planType}
              handler={value => this.setState({planType: value})}
            /> */}
            <SelectRn
              value={this.state.planType}
              options={selectOpt.planType}
              onSelectChange={value => this.setState({planType: value})}
            />
            <View>
              <TouchableOpacity onPress={this.goTo} name="back">
                <Text>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.goTo} name="next">
                <Text>Next</Text>
              </TouchableOpacity>
            </View>
          </Tab>
          <Tab heading="3">
            <Text>Any dietary preferences</Text>
            {/* <RadioForm
            radio_props={state.diet.activeIndex}
            initial={0}
            onPress={value => setState({diet: value})}
          /> */}
            <RadioButton.Group
              onValueChange={this.handleDiet}
              value={this.state.diet}>
              {dietSpec.map(diet => (
                <RadioButton.Item label={diet.text} value={diet.name} />
              ))}
            </RadioButton.Group>
            <View>
              <TouchableOpacity onPress={this.goTo} name="back">
                <Text>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.goTo} name="next">
                <Text>Next</Text>
              </TouchableOpacity>
            </View>
          </Tab>
          <Tab heading="4">
            <Text>Any Health preferences</Text>
            <RadioButton.Group
              onValueChange={this.handleHealth}
              value={this.state.healthPreferences}>
              {healthSpec.map(h => (
                <RadioButton.Item label={h.text} value={h.name} />
              ))}
            </RadioButton.Group>
          </Tab>
          <Tab heading="5">
            <Text>Calorie intake</Text>
            <RadioButton.Group
              onValueChange={this.handleCalories}
              value={this.state.calories.activeIndex}>
              <RadioButton.Item label="Go with recommended" value="first" />
              <RadioButton.Item label="Choose custom values" value="second" />
            </RadioButton.Group>
            {this.state.calories.selected === 'custom' ? (
              <View>
                <TextInput
                  placeholder="min"
                  value={this.state.calories.min}
                  onChange={this.setCalories}
                />
                <TextInput
                  placeholder="max"
                  value={this.state.calories.max}
                  onChange={this.setCalories}
                />
              </View>
            ) : null}
            <View>
              <TouchableOpacity onPress={this.goTo} name="back">
                <Text>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.getMealPlan} name="next">
                <Text>Next</Text>
              </TouchableOpacity>
            </View>
          </Tab>
        </Tabs>
        {/* {state.redirect
        ? navigation.navigate('Plan', {state: {data: data.state}})
        : null} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
