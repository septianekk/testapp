// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// const HomeTest = () => {
//   return (
//     <View>
//       <Text></Text>
//     </View>
//   );
// };

// export default HomeTest;

// const styles = StyleSheet.create({});
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {fetchRecipes} from '../../../utils/mkalpanaApi/api';
import {addRecipe, removeFromCalendar} from '../../../redux/actions';
import {connect} from 'react-redux';
import ShoppingList from '../mkalpana/ShoppingList';
import Modal from '../mkalpana/Modal';
import FoodSearch from '../mkalpana/FoodSearch';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Home from '../Home';

class HomeKalpana extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFoodModalOpen: false,
      isIngredientsModalOpen: false,
      meal: null,
      day: null,
      food: null,
      foodSearchInput: '',
    };
  }

  openFoodModal = ({meal, day}) => {
    this.setState(() => ({
      isFoodModalOpen: true,
      meal,
      day,
      foodSearchInput: '',
    }));
  };

  closeFoodModal = () => {
    this.setState(() => ({
      isFoodModalOpen: false,
      meal: null,
      day: null,
      food: null,
      foodSearchInput: '',
    }));
  };

  onInputChange = value => {
    this.setState({foodSearchInput: value});
  };

  searchFood = () => {
    if (!this.state.foodSearchInput) {
      return;
    }

    this.setState(() => ({loadingFood: true}));

    fetchRecipes(this.state.foodSearchInput).then(food =>
      this.setState(() => ({
        food,
        loadingFood: false,
      })),
    );
  };

  openIngredientsModal = () =>
    this.setState(() => ({isIngredientsModalOpen: true}));

  closeIngredientsModal = () =>
    this.setState(() => ({isIngredientsModalOpen: false}));

  generateShoppingList = () => {
    return this.props.calendar
      .reduce((result, {meals}) => {
        const {breakfast, lunch, dinner} = meals;

        breakfast && result.push(breakfast);
        lunch && result.push(lunch);
        dinner && result.push(dinner);

        return result;
      }, [])
      .reduce((ings, {ingredientLines}) => ings.concat(ingredientLines), []);
  };

  render() {
    const {
      isFoodModalOpen,
      isIngredientsModalOpen,
      loadingFood,
      food,
      day,
      meal,
    } = this.state;
    const {calendar, selectRecipe, remove} = this.props;
    const mealOrder = ['breakfast', 'lunch', 'dinner'];
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Meal Planner</Text>

          <TouchableOpacity style={styles.btn}>
            <Text>ShoppingList</Text>
          </TouchableOpacity>
          <View style={styles.tabs}>
            {mealOrder.map(mealType => (
              <Text key={mealType}>{mealType}</Text>
            ))}
          </View>
          <View style={styles.calendar}>
            <View style={styles.days}>
              {calendar.map(({day, meals}) => (
                <View key={day}>
                  {mealOrder.map(meal => (
                    <View key={meal}>
                      {meals[meal] ? (
                        <View>
                          <Image source={{uri: meals[meal.image]}} />
                          <Text>{meals[meal].label}</Text>
                          <TouchableOpacity>
                            <Text>Clear</Text>
                          </TouchableOpacity>
                        </View>
                      ) : (
                        <View>
                          <TouchableOpacity
                            style={styles.tabs}
                            onPress={() => this.openFoodModal({meal, day})}>
                            <Icon name="calendar" size={20} />
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </View>
          <Modal isOpen={isFoodModalOpen}>
            <FoodSearch
              isLoading={loadingFood}
              selectRecipe={selectRecipe}
              searchFood={this.searchFood}
              onInputChange={this.onInputChange}
              food={food}
              day={day}
              meal={meal}
              onClose={this.closeFoodModal}
            />
          </Modal>
          <Modal
            isOpen={isIngredientsModalOpen}
            onClose={this.closeIngredientsModal}>
            <ShoppingList list={this.generateShoppingList()} />
          </Modal>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    paddingHorizontal: 24,
    paddingVertical: 26,
    justifyContent: 'center',
  },
  btn: {
    padding: 20,
    backgroundColor: '#009688',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
});

const mapStateToProps = ({calendar, food}) => {
  const dayOrder = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  return {
    calendar: dayOrder.map(day => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal] ? food[calendar[day][meal]] : null;
        return meals;
      }, {}),
    })),
  };
};

const mapDispatchToProps = dispatch => ({
  selectRecipe: data => dispatch(addRecipe(data)),
  remove: data => dispatch(removeFromCalendar(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeKalpana);
