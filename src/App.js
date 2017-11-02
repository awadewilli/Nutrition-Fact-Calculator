import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import additional from './NutImages/additional.png';
import burritos from './NutImages/burritos.png';
import chipsDip from './NutImages/salad.png';
import nachos from './NutImages/nachos.png';
import quesadilla from './NutImages/quesadilla.png';
import salads from './NutImages/salads.png';
import bowl from './NutImages/bowl.png';
import tacos from './NutImages/tacos.png';
var nutritionObject = {
"Burritos": [
   {
      "id": 1,
      "name": "Flour Tortilla",
      "ServingSize": "1 tortilla",
      "Calories": 300,
      "CaloriesfromFat": 80,
      "TotalFat": 8,
      "SaturatedFat": 2,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 770,
      "Carbohydrates": 47,
      "Protein": 10,
      "DietaryFiber": 3,
      "Sugars": 3
   },
   {
      "id": 2,
      "name": "Spinach Tortilla",
      "ServingSize": "1 tortilla",
      "Calories": 300,
      "CaloriesfromFat": 80,
      "TotalFat": 8,
      "SaturatedFat": 2,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 770,
      "Carbohydrates": 47,
      "Protein": 10,
      "DietaryFiber": 3,
      "Sugars": 2
   },
   {
      "id": 3,
      "name": "ChipotleTortilla",
      "ServingSize": "1 tortilla",
      "Calories": 300,
      "CaloriesfromFat": 80,
      "TotalFat": 8,
      "SaturatedFat": 2,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 770,
      "Carbohydrates": 47,
      "Protein": 10,
      "DietaryFiber": 3,
      "Sugars": 2
   },
   {
      "id": 4,
      "name": "Wheat Tortilla",
      "ServingSize": "1 tortilla",
      "Calories": 300,
      "CaloriesfromFat": 80,
      "TotalFat": 8,
      "SaturatedFat": 2.5,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 770,
      "Carbohydrates": 47,
      "Protein": 10,
      "DietaryFiber": 5,
      "Sugars": 2
   },
   {
      "id": 5,
      "name": "Chicken",
      "ServingSize": "3oz",
      "Calories": 130,
      "CaloriesfromFat": 30,
      "TotalFat": 3.5,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": 70,
      "Sodium": 85,
      "Carbohydrates": 1,
      "Protein": 24,
      "DietaryFiber": "0",
      "Sugars": 17
   },
   {
      "id": 6,
      "name": "Spicy Chicken",
      "ServingSize": "3oz",
      "Calories": 140,
      "CaloriesfromFat": 30,
      "TotalFat": 3.5,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": 70,
      "Sodium": 310,
      "Carbohydrates": 2,
      "Protein": 24,
      "DietaryFiber": "0",
      "Sugars": 17
   },
   {
      "id": 7,
      "name": "Steak",
      "ServingSize": "3oz",
      "Calories": 180,
      "CaloriesfromFat": 90,
      "TotalFat": 10,
      "SaturatedFat": 3.5,
      "TransFat": "0",
      "Cholesterol": 90,
      "Sodium": 320,
      "Carbohydrates": 1,
      "Protein": 21,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 8,
      "name": "Ground Turkey",
      "ServingSize": "3oz",
      "Calories": 130,
      "CaloriesfromFat": 60,
      "TotalFat": 7,
      "SaturatedFat": 1.5,
      "TransFat": "0",
      "Cholesterol": 60,
      "Sodium": 400,
      "Carbohydrates": 2,
      "Protein": 14,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 9,
      "name": "Ground Beef",
      "ServingSize": "3oz",
      "Calories": 250,
      "CaloriesfromFat": 160,
      "TotalFat": 18,
      "SaturatedFat": 7,
      "TransFat": "0",
      "Cholesterol": 60,
      "Sodium": 230,
      "Carbohydrates": 2,
      "Protein": 20,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 10,
      "name": "Tofu",
      "ServingSize": "3oz",
      "Calories": 110,
      "CaloriesfromFat": 60,
      "TotalFat": 7,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 810,
      "Carbohydrates": 3,
      "Protein": 8,
      "DietaryFiber": 1,
      "Sugars": 1
   },
   {
      "id": 11,
      "name": "Fish",
      "ServingSize": "3oz",
      "Calories": 115,
      "CaloriesfromFat": 35,
      "TotalFat": 4,
      "SaturatedFat": 0.5,
      "TransFat": "0",
      "Cholesterol": 50,
      "Sodium": 410,
      "Carbohydrates": 1,
      "Protein": 20,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 12,
      "name": "Rice",
      "ServingSize": "3oz",
      "Calories": 120,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 330,
      "Carbohydrates": 28,
      "Protein": 3,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 13,
      "name": "Black Beans",
      "ServingSize": "3oz",
      "Calories": 60,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 160,
      "Carbohydrates": 11,
      "Protein": 3,
      "DietaryFiber": 2,
      "Sugars": 0
   },
   {
      "id": 14,
      "name": "Pinto Beans",
      "ServingSize": "3oz",
      "Calories": 50,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 105,
      "Carbohydrates": 10,
      "Protein": 3,
      "DietaryFiber": 6,
      "Sugars": 0
   },
   {
      "id": 15,
      "name": "Cheese",
      "ServingSize": "1.5oz",
      "Calories": 160,
      "CaloriesfromFat": 120,
      "TotalFat": 13,
      "SaturatedFat": 8,
      "TransFat": "0",
      "Cholesterol": 40,
      "Sodium": 230,
      "Carbohydrates": "0",
      "Protein": 10,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 16,
      "name": "Salsa",
      "ServingSize": "2.5oz",
      "Calories": 10,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 140,
      "Carbohydrates": 3,
      "Protein": 1,
      "DietaryFiber": 1,
      "Sugars": 2.5
   },
   {
      "id": 17,
      "name": "Iceburg Lettuce",
      "ServingSize": "0.75oz",
      "Calories": "0",
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": "0",
      "Carbohydrates": 1,
      "Protein": "0",
      "DietaryFiber": 1,
      "Sugars": "<1"
   },
   {
      "id": 18,
      "name": "Romaine Lettuce",
      "ServingSize": "0.75oz",
      "Calories": "0",
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": "0",
      "Carbohydrates": "0",
      "Protein": "0",
      "DietaryFiber": "0",
      "Sugars": "<1"
   },
   {
      "id": 19,
      "name": "Guacamole",
      "ServingSize": "1.5oz",
      "Calories": 45,
      "CaloriesfromFat": 30,
      "TotalFat": 3.5,
      "SaturatedFat": 0.5,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 115,
      "Carbohydrates": 3,
      "Protein": 1,
      "DietaryFiber": 1,
      "Sugars": 2.3
   },
   {
      "id": 20,
      "name": "Sour Cream",
      "ServingSize": "1.2oz",
      "Calories": 60,
      "CaloriesfromFat": 50,
      "TotalFat": 6,
      "SaturatedFat": 4,
      "TransFat": "0",
      "Cholesterol": 25,
      "Sodium": 15,
      "Carbohydrates": 1,
      "Protein": 1,
      "DietaryFiber": "0",
      "Sugars": 1
   }
],
	"Tacos" : [
   {
      "id": 1,
      "name": "Corn Tortilla-6in. (taco)",
      "ServingSize": "1 tortilla",
      "Calories": 70,
      "CaloriesfromFat": 5,
      "TotalFat": 1,
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 15,
      "Carbohydrates": 14,
      "Protein": 2,
      "DietaryFiber": 1,
      "Sugars": 2
   },
   {
      "id": 2,
      "name": "Hard Shell Taco",
      "ServingSize": "1 taco",
      "Calories": 60,
      "CaloriesfromFat": 25,
      "TotalFat": 3,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 10,
      "Carbohydrates": 7,
      "Protein": 1,
      "DietaryFiber": 1,
      "Sugars": 0
   },
   {
      "id": 3,
      "name": "Chicken",
      "ServingSize": "1.5oz",
      "Calories": 70,
      "CaloriesfromFat": 20,
      "TotalFat": 2,
      "SaturatedFat": 0.5,
      "TransFat": "0",
      "Cholesterol": 35,
      "Sodium": 45,
      "Carbohydrates": 1,
      "Protein": 12,
      "DietaryFiber": "0",
      "Sugars": "<1"
   },
   {
      "id": 4,
      "name": "Spicy Chicken",
      "ServingSize": "1.5oz",
      "Calories": 70,
      "CaloriesfromFat": 15,
      "TotalFat": 2,
      "SaturatedFat": 0.5,
      "TransFat": "0",
      "Cholesterol": 35,
      "Sodium": 160,
      "Carbohydrates": 1,
      "Protein": 12,
      "DietaryFiber": "0",
      "Sugars": "<1"
   },
   {
      "id": 5,
      "name": "Steak",
      "ServingSize": "1.5oz",
      "Calories": 90,
      "CaloriesfromFat": 45,
      "TotalFat": 5,
      "SaturatedFat": 2,
      "TransFat": "0",
      "Cholesterol": 45,
      "Sodium": 160,
      "Carbohydrates": 1,
      "Protein": 11,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 6,
      "name": "Ground Turkey",
      "ServingSize": "1.5oz",
      "Calories": 60,
      "CaloriesfromFat": 30,
      "TotalFat": 3,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": 30,
      "Sodium": 200,
      "Carbohydrates": 1,
      "Protein": 7,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 7,
      "name": "Ground Beef",
      "ServingSize": "1.5oz",
      "Calories": 120,
      "CaloriesfromFat": 80,
      "TotalFat": 9,
      "SaturatedFat": 3.5,
      "TransFat": "0",
      "Cholesterol": 30,
      "Sodium": 115,
      "Carbohydrates": 1,
      "Protein": 10,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 8,
      "name": "Tofu",
      "ServingSize": "1.5oz",
      "Calories": 60,
      "CaloriesfromFat": 30,
      "TotalFat": 3.5,
      "SaturatedFat": 0.5,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 410,
      "Carbohydrates": 2,
      "Protein": 4,
      "DietaryFiber": 1,
      "Sugars": "<1"

   },
   {
      "id": 9,
      "name": "Fish",
      "ServingSize": "1.5oz",
      "Calories": 60,
      "CaloriesfromFat": 20,
      "TotalFat": 2,
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": 25,
      "Sodium": 205,
      "Carbohydrates": 1,
      "Protein": 10,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 10,
      "name": "Rice",
      "ServingSize": "1.5oz",
      "Calories": 60,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 170,
      "Carbohydrates": 14,
      "Protein": 1,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 11,
      "name": "Black Beans",
      "ServingSize": "1.5oz",
      "Calories": 30,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 80,
      "Carbohydrates": 6,
      "Protein": 2,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 12,
      "name": "Pinto Beans",
      "ServingSize": "1.5oz",
      "Calories": 30,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 55,
      "Carbohydrates": 5,
      "Protein": 2,
      "DietaryFiber": 3,
      "Sugars": 0
   },
   {
      "id": 13,
      "name": "Cheese",
      "ServingSize": "0.75oz",
      "Calories": 70,
      "CaloriesfromFat": 50,
      "TotalFat": 6,
      "SaturatedFat": 4,
      "TransFat": "0",
      "Cholesterol": 20,
      "Sodium": 115,
      "Carbohydrates": "0",
      "Protein": 5,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 14,
      "name": "Salsa",
      "ServingSize": "1.25oz",
      "Calories": "0",
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 70,
      "Carbohydrates": 1,
      "Protein": "0",
      "DietaryFiber": "0",
      "Sugars": "<1"
   },
   {
      "id": 15,
      "name": "Iceburg Lettuce",
      "ServingSize": "0.35oz",
      "Calories": "0",
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": "0",
      "Carbohydrates": "0",
      "Protein": "0",
      "DietaryFiber": "0",
      "Sugars": "<1"
   },
   {
      "id": 16,
      "name": "Romaine Lettuce",
      "ServingSize": "0.35oz",
      "Calories": "0",
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": "0",
      "Carbohydrates": "0",
      "Protein": "0",
      "DietaryFiber": "0",
      "Sugars": "<1"
   },
   {
      "id": 17,
      "name": "Sour Cream",
      "ServingSize": "0.6oz",
      "Calories": 25,
      "CaloriesfromFat": 25,
      "TotalFat": 3,
      "SaturatedFat": 2,
      "TransFat": "0",
      "Cholesterol": 10,
      "Sodium": 10,
      "Carbohydrates": 1,
      "Protein": 1,
      "DietaryFiber": "0",
      "Sugars": "<1"
   },
   {
      "id": 18,
      "name": "Guacamole",
      "ServingSize": "0.75oz",
      "Calories": 30,
      "CaloriesfromFat": 20,
      "TotalFat": 2,
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 60,
      "Carbohydrates": 2,
      "Protein": "0",
      "DietaryFiber": 1,
      "Sugars": 1
   }
],
"Quesadillas":[
   {
      "id": 1,
      "name": "Flour Tortilla",
      "ServingSize": "1 tortilla",
      "Calories": 200,
      "CaloriesfromFat": 50,
      "TotalFat": 6,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 510,
      "Carbohydrates": 31,
      "Protein": 6,
      "DietaryFiber": 2,
      "Sugars": 2.5
   },
   {
      "id": 2,
      "name": "Wheat Tortilla",
      "ServingSize": "1 tortilla",
      "Calories": 170,
      "CaloriesfromFat": 50,
      "TotalFat": 6,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 470,
      "Carbohydrates": 24,
      "Protein": 5,
      "DietaryFiber": 3,
      "Sugars": 2
   },
   {
      "id": 3,
      "name": "Cheese",
      "ServingSize": "2.5oz",
      "Calories": 250,
      "CaloriesfromFat": 180,
      "TotalFat": 20,
      "SaturatedFat": 15,
      "TransFat": "0",
      "Cholesterol": 65,
      "Sodium": 380,
      "Carbohydrates": 1,
      "Protein": 17,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 4,
      "name": "Chicken",
      "ServingSize": "3oz",
      "Calories": 130,
      "CaloriesfromFat": 30,
      "TotalFat": 3.5,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": 70,
      "Sodium": 85,
      "Carbohydrates": 1,
      "Protein": 24,
      "DietaryFiber": "0",
      "Sugars": "<1"
   },
   {
      "id": 5,
      "name": "Spicy Chicken",
      "ServingSize": "3oz",
      "Calories": 140,
      "CaloriesfromFat": 30,
      "TotalFat": 3.5,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": 70,
      "Sodium": 310,
      "Carbohydrates": 2,
      "Protein": 24,
      "DietaryFiber": "0",
      "Sugars": "<1"
   },
   {
      "id": 6,
      "name": "Steak",
      "ServingSize": "3oz",
      "Calories": 180,
      "CaloriesfromFat": 90,
      "TotalFat": 10,
      "SaturatedFat": 3.5,
      "TransFat": "0",
      "Cholesterol": 90,
      "Sodium": 320,
      "Carbohydrates": 1,
      "Protein": 21,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 7,
      "name": "Ground Turkey",
      "ServingSize": "3oz",
      "Calories": 130,
      "CaloriesfromFat": 60,
      "TotalFat": 7,
      "SaturatedFat": 1.5,
      "TransFat": "0",
      "Cholesterol": 60,
      "Sodium": 400,
      "Carbohydrates": 2,
      "Protein": 14,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 8,
      "name": "Ground Beef",
      "ServingSize": "3oz",
      "Calories": 250,
      "CaloriesfromFat": 160,
      "TotalFat": 18,
      "SaturatedFat": 7,
      "TransFat": "0",
      "Cholesterol": 60,
      "Sodium": 230,
      "Carbohydrates": 2,
      "Protein": 20,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 9,
      "name": "Tofu",
      "ServingSize": "3oz",
      "Calories": 110,
      "CaloriesfromFat": 60,
      "TotalFat": 7,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 810,
      "Carbohydrates": 3,
      "Protein": 8,
      "DietaryFiber": 1,
      "Sugars": 1
   },
   {
      "id": 10,
      "name": "Fish",
      "ServingSize": "3oz",
      "Calories": 115,
      "CaloriesfromFat": 35,
      "TotalFat": 4,
      "SaturatedFat": 0.5,
      "TransFat": "0",
      "Cholesterol": 50,
      "Sodium": 410,
      "Carbohydrates": 1,
      "Protein": 20,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 11,
      "name": "Black Beans",
      "ServingSize": "2.5oz",
      "Calories": 50,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 130,
      "Carbohydrates": 9,
      "Protein": 3,
      "DietaryFiber": 2,
      "Sugars": 0
   },
   {
      "id": 12,
      "name": "Pinto Beans",
      "ServingSize": "2.5oz",
      "Calories": 45,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 90,
      "Carbohydrates": 8,
      "Protein": 3,
      "DietaryFiber": 5,
      "Sugars": 0
   },
   {
      "id": 13,
      "name": "Salsa",
      "ServingSize": "2oz",
      "Calories": 10,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 115,
      "Carbohydrates": 2,
      "Protein": 1,
      "DietaryFiber": 1,
      "Sugars": 2
   },
   {
      "id": 14,
      "name": "Sour Cream",
      "ServingSize": "2.0oz",
      "Calories": 100,
      "CaloriesfromFat": 80,
      "TotalFat": 9,
      "SaturatedFat": 7,
      "TransFat": "0",
      "Cholesterol": 35,
      "Sodium": 30,
      "Carbohydrates": 2,
      "Protein": 2,
      "DietaryFiber": "0",
      "Sugars": 2
   }
],
"Salads": [
   {
      "id": 1,
      "name": "Salad Shell",
      "ServingSize": "1 shell",
      "Calories": 280,
      "CaloriesfromFat": 130,
      "TotalFat": 15,
      "SaturatedFat": 4,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 510,
      "Carbohydrates": 31,
      "Protein": 6,
      "DietaryFiber": 2,
      "Sugars": 2.5
   },
   {
      "id": 2,
      "name": "Iceburg Lettuce",
      "ServingSize": "3.75oz",
      "Calories": 10,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 10,
      "Carbohydrates": 3,
      "Protein": 1,
      "DietaryFiber": 1,
      "Sugars": 2
   },
   {
      "id": 3,
      "name": "Romaine Lettuce",
      "ServingSize": "3.75oz",
      "Calories": 15,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 10,
      "Carbohydrates": 3,
      "Protein": 1,
      "DietaryFiber": 2,
      "Sugars": 1
   },
   {
      "id": 4,
      "name": "Spinach",
      "ServingSize": "3.75oz",
      "Calories": 25,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 85,
      "Carbohydrates": 3,
      "Protein": 3,
      "DietaryFiber": 2,
      "Sugars": 0
   },
   {
      "id": 5,
      "name": "Chicken",
      "ServingSize": "3oz",
      "Calories": 130,
      "CaloriesfromFat": 30,
      "TotalFat": 3.5,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": 70,
      "Sodium": 85,
      "Carbohydrates": 1,
      "Protein": 24,
      "DietaryFiber": "0",
      "Sugars": "<1"
   },
   {
      "id": 6,
      "name": "Spicy Chicken",
      "ServingSize": "3oz",
      "Calories": 140,
      "CaloriesfromFat": 30,
      "TotalFat": 3.5,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": 70,
      "Sodium": 310,
      "Carbohydrates": 2,
      "Protein": 24,
      "DietaryFiber": "0",
      "Sugars": "<1"
   },
   {
      "id": 7,
      "name": "Steak",
      "ServingSize": "3oz",
      "Calories": 180,
      "CaloriesfromFat": 90,
      "TotalFat": 10,
      "SaturatedFat": 3.5,
      "TransFat": "0",
      "Cholesterol": 90,
      "Sodium": 320,
      "Carbohydrates": 1,
      "Protein": 21,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 8,
      "name": "Ground Turkey",
      "ServingSize": "3oz",
      "Calories": 130,
      "CaloriesfromFat": 60,
      "TotalFat": 7,
      "SaturatedFat": 1.5,
      "TransFat": "0",
      "Cholesterol": 60,
      "Sodium": 400,
      "Carbohydrates": 2,
      "Protein": 14,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 9,
      "name": "Ground Beef",
      "ServingSize": "3oz",
      "Calories": 250,
      "CaloriesfromFat": 160,
      "TotalFat": 18,
      "SaturatedFat": 7,
      "TransFat": "0",
      "Cholesterol": 60,
      "Sodium": 230,
      "Carbohydrates": 2,
      "Protein": 20,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 10,
      "name": "Tofu",
      "ServingSize": "3oz",
      "Calories": 110,
      "CaloriesfromFat": 60,
      "TotalFat": 7,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 810,
      "Carbohydrates": 3,
      "Protein": 8,
      "DietaryFiber": 1,
      "Sugars": 1
   },
   {
      "id": 11,
      "name": "Fish",
      "ServingSize": "3oz",
      "Calories": 115,
      "CaloriesfromFat": 35,
      "TotalFat": 4,
      "SaturatedFat": 0.5,
      "TransFat": "0",
      "Cholesterol": 50,
      "Sodium": 410,
      "Carbohydrates": 1,
      "Protein": 20,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 12,
      "name": "Black Beans",
      "ServingSize": "3oz",
      "Calories": 60,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 160,
      "Carbohydrates": 11,
      "Protein": 3,
      "DietaryFiber": 2,
      "Sugars": 0
   },
   {
      "id": 13,
      "name": "Pinto Beans",
      "ServingSize": "3oz",
      "Calories": 50,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 105,
      "Carbohydrates": 10,
      "Protein": 3,
      "DietaryFiber": 6,
      "Sugars": 0
   },
   {
      "id": 14,
      "name": "Cheese",
      "ServingSize": "1.5oz",
      "Calories": 160,
      "CaloriesfromFat": 120,
      "TotalFat": 13,
      "SaturatedFat": 8,
      "TransFat": "0",
      "Cholesterol": 40,
      "Sodium": 230,
      "Carbohydrates": "0",
      "Protein": 10,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 15,
      "name": "Salsa",
      "ServingSize": "2.5oz",
      "Calories": 10,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 140,
      "Carbohydrates": 3,
      "Protein": 1,
      "DietaryFiber": 1,
      "Sugars": 2
   },
   {
      "id": 16,
      "name": "Sour Cream",
      "ServingSize": "2oz",
      "Calories": 100,
      "CaloriesfromFat": 80,
      "TotalFat": 9,
      "SaturatedFat": 7,
      "TransFat": "0",
      "Cholesterol": 35,
      "Sodium": 30,
      "Carbohydrates": 2,
      "Protein": 2,
      "DietaryFiber": "0",
      "Sugars": 2
   },
   {
      "id": 17,
      "name": "Guacamole",
      "ServingSize": "2oz",
      "Calories": 60,
      "CaloriesfromFat": 45,
      "TotalFat": 5,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 160,
      "Carbohydrates": 4,
      "Protein": 1,
      "DietaryFiber": 2,
      "Sugars": 3
   },
   {
      "id": 18,
      "name": "Chipotle Ranch",
      "ServingSize": "2oz",
      "Calories": 190,
      "CaloriesfromFat": 180,
      "TotalFat": 20,
      "SaturatedFat": 3,
      "TransFat": "0",
      "Cholesterol": 20,
      "Sodium": 540,
      "Carbohydrates": 3,
      "Protein": "0",
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 19,
      "name": "Southwestern Vinaigrette",
      "ServingSize": "2oz",
      "Calories": 230,
      "CaloriesfromFat": 230,
      "TotalFat": 26,
      "SaturatedFat": 2,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 420,
      "Carbohydrates": 1,
      "Protein": "0",
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 20,
      "name": "Fat Free Balsamic Vinaigrette",
      "ServingSize": "1oz",
      "Calories": 10,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 250,
      "Carbohydrates": 2,
      "Protein": "0",
      "DietaryFiber": "0",
      "Sugars": 1
   }
],
"Nachos" : [
   {
      "id": 1,
      "name": "Chips",
      "ServingSize": "3.5oz",
      "Calories": 340,
      "CaloriesfromFat": 80,
      "TotalFat": 9,
      "SaturatedFat": 1.5,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 55,
      "Carbohydrates": 55,
      "Protein": 9,
      "DietaryFiber": 4,
      "Sugars": 0
   },
   {
      "id": 2,
      "name": "Black Beans",
      "ServingSize": "3oz",
      "Calories": 60,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 160,
      "Carbohydrates": 11,
      "Protein": 3,
      "DietaryFiber": 2,
      "Sugars": 0
   },
   {
      "id": 3,
      "name": "Pinto Beans",
      "ServingSize": "3oz",
      "Calories": 50,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 105,
      "Carbohydrates": 10,
      "Protein": 3,
      "DietaryFiber": 6,
      "Sugars": 0
   },
   {
      "id": 4,
      "name": "Chicken",
      "ServingSize": "3oz",
      "Calories": 130,
      "CaloriesfromFat": 30,
      "TotalFat": 3.5,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": 70,
      "Sodium": 85,
      "Carbohydrates": 1,
      "Protein": 24,
      "DietaryFiber": "0",
      "Sugars": "<1"
   },
   {
      "id": 5,
      "name": "Spicy Chicken",
      "ServingSize": "3oz",
      "Calories": 140,
      "CaloriesfromFat": 30,
      "TotalFat": 3.5,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": 70,
      "Sodium": 310,
      "Carbohydrates": 2,
      "Protein": 24,
      "DietaryFiber": "0",
      "Sugars": "<1"
   },
   {
      "id": 6,
      "name": "Steak",
      "ServingSize": "3oz",
      "Calories": 180,
      "CaloriesfromFat": 90,
      "TotalFat": 10,
      "SaturatedFat": 3.5,
      "TransFat": "0",
      "Cholesterol": 90,
      "Sodium": 320,
      "Carbohydrates": 1,
      "Protein": 21,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 7,
      "name": "Ground Turkey",
      "ServingSize": "3oz",
      "Calories": 130,
      "CaloriesfromFat": 60,
      "TotalFat": 7,
      "SaturatedFat": 1.5,
      "TransFat": "0",
      "Cholesterol": 60,
      "Sodium": 400,
      "Carbohydrates": 2,
      "Protein": 14,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 8,
      "name": "Ground Beef",
      "ServingSize": "3oz",
      "Calories": 250,
      "CaloriesfromFat": 160,
      "TotalFat": 18,
      "SaturatedFat": 7,
      "TransFat": "0",
      "Cholesterol": 60,
      "Sodium": 230,
      "Carbohydrates": 2,
      "Protein": 20,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 9,
      "name": "Tofu",
      "ServingSize": "3oz",
      "Calories": 110,
      "CaloriesfromFat": 60,
      "TotalFat": 7,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 810,
      "Carbohydrates": 3,
      "Protein": 8,
      "DietaryFiber": 1,
      "Sugars": 1
   },
   {
      "id": 10,
      "name": "Fish",
      "ServingSize": "3oz",
      "Calories": 115,
      "CaloriesfromFat": 35,
      "TotalFat": 4,
      "SaturatedFat": 0.5,
      "TransFat": "0",
      "Cholesterol": 50,
      "Sodium": 410,
      "Carbohydrates": 1,
      "Protein": 20,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 11,
      "name": "Cheese",
      "ServingSize": "3oz",
      "Calories": 310,
      "CaloriesfromFat": 230,
      "TotalFat": 25,
      "SaturatedFat": 16,
      "TransFat": "0",
      "Cholesterol": 75,
      "Sodium": 460,
      "Carbohydrates": 1,
      "Protein": 21,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 12,
      "name": "Salsa",
      "ServingSize": "2.5oz",
      "Calories": 10,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 140,
      "Carbohydrates": 3,
      "Protein": 1,
      "DietaryFiber": 1,
      "Sugars": 2
   },
   {
      "id": 13,
      "name": "Sour Cream",
      "ServingSize": "2oz",
      "Calories": 100,
      "CaloriesfromFat": 80,
      "TotalFat": 9,
      "SaturatedFat": 7,
      "TransFat": "0",
      "Cholesterol": 35,
      "Sodium": 30,
      "Carbohydrates": 2,
      "Protein": 2,
      "DietaryFiber": "0",
      "Sugars": 2
   },
   {
      "id": 14,
      "name": "Guacamole",
      "ServingSize": "2oz",
      "Calories": 60,
      "CaloriesfromFat": 45,
      "TotalFat": 5,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 160,
      "Carbohydrates": 4,
      "Protein": 1,
      "DietaryFiber": 2,
      "Sugars": 3
   }
],
"Bowls" : [
   {
      "id": 1,
      "name": "Chicken",
      "ServingSize": "4.5oz",
      "Calories": 190,
      "CaloriesfromFat": 45,
      "TotalFat": 5,
      "SaturatedFat": 1.5,
      "TransFat": "0",
      "Cholesterol": 105,
      "Sodium": 125,
      "Carbohydrates": 1,
      "Protein": 36,
      "DietaryFiber": "0",
      "Sugars": "<1"
   },
   {
      "id": 2,
      "name": "Steak",
      "ServingSize": "4.5oz",
      "Calories": 270,
      "CaloriesfromFat": 140,
      "TotalFat": 15,
      "SaturatedFat": 5,
      "TransFat": "0",
      "Cholesterol": 135,
      "Sodium": 480,
      "Carbohydrates": 2,
      "Protein": 32,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 3,
      "name": "Cheese",
      "ServingSize": "2.5oz",
      "Calories": 250,
      "CaloriesfromFat": 180,
      "TotalFat": 20,
      "SaturatedFat": 15,
      "TransFat": "0",
      "Cholesterol": 65,
      "Sodium": 380,
      "Carbohydrates": 1,
      "Protein": 17,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 4,
      "name": "Salsa",
      "ServingSize": "3oz",
      "Calories": 10,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 170,
      "Carbohydrates": 3,
      "Protein": 1,
      "DietaryFiber": 1,
      "Sugars": 2
   },
   {
      "id": 5,
      "name": "Iceburg Lettuce",
      "ServingSize": "2oz",
      "Calories": 10,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 5,
      "Carbohydrates": 2,
      "Protein": 1,
      "DietaryFiber": 1,
      "Sugars": 1
   },
   {
      "id": 6,
      "name": "Romaine Lettuce",
      "ServingSize": "2oz",
      "Calories": "0",
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 5,
      "Carbohydrates": 1,
      "Protein": 1,
      "DietaryFiber": 1,
      "Sugars": 1
   },
   {
      "id": 7,
      "name": "Sour Cream",
      "ServingSize": "2oz",
      "Calories": 100,
      "CaloriesfromFat": 80,
      "TotalFat": 9,
      "SaturatedFat": 7,
      "TransFat": "0",
      "Cholesterol": 35,
      "Sodium": 30,
      "Carbohydrates": 2,
      "Protein": 2,
      "DietaryFiber": "0",
      "Sugars": 2
   },
   {
      "id": 8,
      "name": "Guacamole",
      "ServingSize": "2.25oz",
      "Calories": 80,
      "CaloriesfromFat": 50,
      "TotalFat": 6,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 180,
      "Carbohydrates": 5,
      "Protein": 1,
      "DietaryFiber": 2,
      "Sugars": 3
   }
],
"Chips" : [
   {
      "id": 1,
      "name": "Chips (portion served with dip)",
      "ServingSize": "3.5oz",
      "Calories": 340,
      "CaloriesfromFat": 80,
      "TotalFat": 9,
      "SaturatedFat": 1.5,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 55,
      "Carbohydrates": 55,
      "Protein": 9,
      "DietaryFiber": 4,
      "Sugars": 0
   },
   {
      "id": 2,
      "name": "Chips (portion served with entree)",
      "ServingSize": "1.75 oz.",
      "Calories": 170,
      "CaloriesfromFat": 40,
      "TotalFat": 4.5,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 30,
      "Carbohydrates": 30,
      "Protein": 4,
      "DietaryFiber": 2,
      "Sugars": 0
   },
   {
      "id": 3,
      "name": "Small Cheese Dip",
      "ServingSize": "2oz",
      "Calories": 200,
      "CaloriesfromFat": 110,
      "TotalFat": 12,
      "SaturatedFat": 8,
      "TransFat": "0",
      "Cholesterol": 40,
      "Sodium": 520,
      "Carbohydrates": 2,
      "Protein": 20,
      "DietaryFiber": "0",
      "Sugars": 1
   },
   {
      "id": 4,
      "name": "Medium Cheese Dip",
      "ServingSize": "4oz",
      "Calories": 390,
      "CaloriesfromFat": 210,
      "TotalFat": 23,
      "SaturatedFat": 16,
      "TransFat": "0",
      "Cholesterol": 80,
      "Sodium": 1040,
      "Carbohydrates": 5,
      "Protein": 40,
      "DietaryFiber": "0",
      "Sugars": 2
   },
   {
      "id": 5,
      "name": "Large Cheese Dip",
      "ServingSize": "8oz",
      "Calories": 780,
      "CaloriesfromFat": 420,
      "TotalFat": 47,
      "SaturatedFat": 31,
      "TransFat": "0",
      "Cholesterol": 155,
      "Sodium": 2080,
      "Carbohydrates": 9,
      "Protein": 81,
      "DietaryFiber": "0",
      "Sugars": 4
   },
   {
      "id": 6,
      "name": "Heavy D Salsa",
      "ServingSize": "2oz",
      "Calories": 15,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 160,
      "Carbohydrates": 2,
      "Protein": 2,
      "DietaryFiber": 1,
      "Sugars": 2
   },
   {
      "id": 7,
      "name": "Tomatillo",
      "ServingSize": "2oz",
      "Calories": 15,
      "CaloriesfromFat": "0",
      "TotalFat": 2,
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 420,
      "Carbohydrates": 4,
      "Protein": 1,
      "DietaryFiber": 3,
      "Sugars": 3
   },
   {
      "id": 8,
      "name": "Poblano ",
      "ServingSize": "2oz",
      "Calories": 15,
      "CaloriesfromFat": "0",
      "TotalFat": 0,
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 320,
      "Carbohydrates": 4,
      "Protein": 0,
      "DietaryFiber": 2,
      "Sugars": 2
   }

],
"Additional" : [
   {
      "id": 1,
      "name": "Tomatillo Sauce",
      "ServingSize": "2oz",
      "Calories": 15,
      "CaloriesfromFat": "0",
      "TotalFat": 2,
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 420,
      "Carbohydrates": 4,
      "Protein": 1,
      "DietaryFiber": 3,
      "Sugars": 3
   },
   {
      "id": 2,
      "name": "Heavy D Salsa",
      "ServingSize": "2oz",
      "Calories": 15,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 160,
      "Carbohydrates": 2,
      "Protein": 2,
      "DietaryFiber": 1,
      "Sugars": 2
   },
   {
      "id": 3,
      "name": "Hot Sauce",
      "ServingSize": "2oz",
      "Calories": 10,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 450,
      "Carbohydrates": 2,
      "Protein": "0",
      "DietaryFiber": 1,
      "Sugars": "<1"
   },
   {
      "id": 4,
      "name": "Spinach",
      "ServingSize": "1.5oz",
      "Calories": 10,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 35,
      "Carbohydrates": 1,
      "Protein": 1,
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 5,
      "name": "Mushrooms",
      "ServingSize": "1.5oz",
      "Calories": 10,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": "0",
      "Carbohydrates": 1,
      "Protein": 1,
      "DietaryFiber": "0",
      "Sugars": "<1"
   },
   {
      "id": 6,
      "name": "Avocado Slices",
      "ServingSize": "1/2 avocado, sliced",
      "Calories": 120,
      "CaloriesfromFat": 90,
      "TotalFat": 10,
      "SaturatedFat": 1,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 5,
      "Carbohydrates": 6,
      "Protein": 1,
      "DietaryFiber": 4,
      "Sugars": 0
   },
   {
      "id": 7,
      "name": "Black Olives",
      "ServingSize": "1.5oz",
      "Calories": 50,
      "CaloriesfromFat": 40,
      "TotalFat": 4.5,
      "SaturatedFat": 0.5,
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 310,
      "Carbohydrates": 3,
      "Protein": "0",
      "DietaryFiber": 1,
      "Sugars": 0
   },
   {
      "id": 8,
      "name": "Jalapeno, pickled",
      "ServingSize": "1.5oz",
      "Calories": 10,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 710,
      "Carbohydrates": 2,
      "Protein": "0",
      "DietaryFiber": 1,
      "Sugars": "<1"
   },
   {
      "id": 9,
      "name": "Cucumbers",
      "ServingSize": "1.5oz",
      "Calories": "0",
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": "0",
      "Carbohydrates": 1,
      "Protein": "0",
      "DietaryFiber": "0",
      "Sugars": 0
   },
   {
      "id": 10,
      "name": "Onions",
      "ServingSize": "1.5oz",
      "Calories": 15,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": "0",
      "Carbohydrates": 4,
      "Protein": "0",
      "DietaryFiber": "0",
      "Sugars": 2
   },
   {
      "id": 11,
      "name": "Green Pepper",
      "ServingSize": "1.5oz",
      "Calories": 10,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": "0",
      "Carbohydrates": 2,
      "Protein": "0",
      "DietaryFiber": 1,
      "Sugars": 1
   },
   {
      "id": 12,
      "name": "Jalapeno, fresh",
      "ServingSize": "1.5oz",
      "Calories": 10,
      "CaloriesfromFat": "0",
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": "0",
      "Carbohydrates": 3,
      "Protein": "0",
      "DietaryFiber": 1,
      "Sugars": 2
   },
   {
      "id": 13,
      "name": "Chipotle Hot Sauce",
      "ServingSize": "2oz",
      "Calories": 15,
      "CaloriesfromFat": 5,
      "TotalFat": "0",
      "SaturatedFat": "0",
      "TransFat": "0",
      "Cholesterol": "0",
      "Sodium": 410,
      "Carbohydrates": 2,
      "Protein": "0",
      "DietaryFiber": "0",
      "Sugars": 0
   }
]
};


function Header(props){
  return <div className="col-sm-12">
          <div className="row">
            <div className="col-md-3 col-xs-6">
            <div className="header-options active-item" id="Burritos-btn" onClick={props.changeCategory.bind(this,'Burritos')}>
              <img src={burritos} />
              <span>Burrito</span>
                </div>
            </div>
            <div className="col-md-3 col-xs-6">
            <div className="header-options" id="Tacos-btn" onClick={props.changeCategory.bind(this,'Tacos')}>
              <img src={tacos} />
              <span>Taco</span>
                </div>
            </div>
            <div className="col-md-3 col-xs-6">
            <div className="header-options" id="Salads-btn" onClick={props.changeCategory.bind(this,'Salads')}>
              <img src={salads} />
              <span>Salad</span>
                </div>
            </div>
            <div className="col-md-3 col-xs-6">
            <div className="header-options" id="Quesadillas-btn" onClick={props.changeCategory.bind(this,'Quesadillas')}>
              <img src={quesadilla} />
              <span>Quesadillas</span>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-xs-6">
            <div className="header-options" id="Bowls-btn" onClick={props.changeCategory.bind(this,'Bowls')}>
              <img src={nachos} />
              <span>Bowl</span>
                </div>
            </div>
            <div className="col-md-3 col-xs-6">
            <div className="header-options" id="Nachos-btn" onClick={props.changeCategory.bind(this,'Nachos')}>
              <img src={nachos} />
              <span>Nachos</span>
                </div>
            </div>
            <div className="col-md-3 col-xs-6">
            <div className="header-options" id="Chips-btn" onClick={props.changeCategory.bind(this,'Chips')}>
              <img src={chipsDip} />
              <span>Chips and Dip</span>
                </div>
            </div>
            <div className="col-md-3 col-xs-6">
            <div className="header-options" id="Additional-btn" onClick={props.changeCategory.bind(this,'Additional')}>
              <img src={additional} />
              <span>Additional Ingredients</span>
            </div>
            </div>
          </div>
        </div>
}

function Footer(props){
  return <footer className="fixed-bottom container" id="totals-table">
  <table className="table table-striped table-bordered table-hover">
  <thead>
  <tr>
    <td></td>
    <td>Calories</td>
    <td>Calories from Fat (g)</td>
    <td>Total Fat (g)</td>
    <td>Trans Fat (g)</td>
    <td>Cholesterol</td>
    <td>Sodium</td>
    <td>Carbo-hydrates (g)</td>
    <td>Protein</td>
    <td>Dietary Fiber (g)</td>
    <td>Sugars(g)</td>
    </tr>
  </thead>
    <tbody className="">
    <tr>

    <td>TOTAL</td>
    <td>{props.calories}</td>
    <td>{props.calories}</td>
    <td>{props.totalFat}</td>
    <td>{props.transFat}</td>
    <td>{props.cholesterol}</td>
    <td>{props.sodium}</td>
    <td>{props.carbohydrates}</td>
    <td>{props.protein}</td>
    <td>{props.dietaryFiber}</td>
    <td>{props.sugars}</td>
    </tr>
    </tbody>
  </table>
        </footer>
}

function NutritionApp(props){
  return <div id="nut-facts-table" className="container">
            <div>
            <h1 className="nut-facts-title">Nutrition Information</h1>
            </div>
            <div className="row">
                <Header changeCategory={props.changeCategory} handleScroll={props.handleScroll}/>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <CurrentIngredients menuItems={props.menuItems} onChange={props.onChange}/>
                </div>
              </div>
            </div>
            <div className="row">

            </div>
            <Footer
              totalCalories={props.totalCalories}
              calories={props.calories}
              totalFat={props.totalFat}
              transFat={props.transFat}
              cholesterol={props.cholesterol}
              sodium={props.sodium}
              carbohydrates={props.carbohydrates}
              protein={props.protein}
              dietaryFiber={props.dietaryFiber}
              sugars={props.sugars}
              />
          </div>

}
class CurrentIngredients extends Component{
  componentDidUpdate(){
    if ( $('#footer-nav').offset().top > ($(window).scrollTop() + $(window).height() ) && $(window).scrollTop() < $('#ingredient-table').offset().top - 100 ){
     $('.fixed-bottom').css({'position':'fixed','bottom':'0px'})

    }
    else{
      $('.fixed-bottom').css({'position':'absolute','bottom':'-110px'});
    }

  }
  render(){
  return (<div className="col-sm-12">
              <table id="ingredient-table" className="table table-striped table-bordered table-hover table-responsive">
              <thead>
              <tr>
                <td></td>
                <td>Ingredient</td>
                <td>Serving Size</td>
                <td>Calories</td>
                <td>Calories from Fat(g)</td>
                <td>Total Fat(g)</td>
                <td>Trans Fat(g)</td>
                <td>Cholesterol</td>
                <td>Sodium</td>
                <td>Carbo-hydrates(g)</td>
                <td>Protein</td>
                <td>Dietary Fiber(g)</td>
                <td>Sugars(g)</td>
                </tr>
              </thead>
                <tbody className="">
                    {this.props.menuItems.map(function(item,index) {
                        return (
                          <Ingredient
                            onChange={this.props.onChange}
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            servingSize={item.ServingSize}
                            calories={item.Calories}
                            caloriesFromFat={item.CaloriesfromFat}
                            transFat={item.TransFat}
                            totalFat={item.TotalFat}
                            cholesterol={item.Cholesterol}
                            sodium={item.Sodium}
                            carbohydrates={item.Carbohydrates}
                            protein={item.Protein}
                            dietaryFiber={item.DietaryFiber}
                            sugars={item.Sugars}
                            />
                        );
                    },this)
                  }
                </tbody>
              </table>
          </div>
    );
  }
}
function Ingredient (props){
 var ingredientInfo = {
   id:props.id,
   calories:props.calories,
   caloriesfromFat:props.caloriesFromFat,
   totalFat:props.totalFat,
   transFat:props.transFat,
   cholesterol:props.cholesterol,
   sodium:props.sodium,
   carbohydrates:props.carbohydrates,
   protein:props.protein,
   dietaryFiber:props.dietaryFiber,
   sugars:props.sugars
 };
  return <tr>
            <td><div  id={'ingredient'+ props.id} onClick={props.onChange.bind(this,ingredientInfo)} className="ing-select-btn ing-selector"><i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i></div></td>
            <td>{props.name}</td>
            <td>{props.servingSize}</td>
            <td>{props.calories}</td>
            <td>{props.caloriesFromFat}</td>
            <td>{props.totalFat}</td>
            <td>{props.transFat}</td>
            <td>{props.cholesterol}</td>
            <td>{props.sodium}</td>
            <td>{props.carbohydrates}</td>
            <td>{props.protein}</td>
            <td>{props.dietaryFiber}</td>
            <td>{props.sugars}</td>
          </tr>
}
class App extends Component {

  componentDidMount(){
    $(document).scroll(this.handleScroll);
  }

  constructor(props) {
    super(props);
    this.state = {menuItems: nutritionObject.Burritos,
      totalCalories:0,
      calories:0,
      totalFat:0,
      transFat:0,
      cholesterol:0,
      sodium:0,
      carbohydrates:0,
      protein:0,
      dietaryFiber:0,
      sugars:0
    };
    this.changeCategory = this.changeCategory.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
  }
  handleScroll(){
    if ( $('#footer-nav').offset().top > ($(window).scrollTop() + $(window).height() )){
     $('.fixed-bottom').css({'position':'fixed','bottom':'0px'})

    }
    else{

      $('.fixed-bottom').css({'position':'absolute','bottom':'-110px'});
    }
    // if($(window).scrollTop() > $('#ingredient-table').offset().top - 100 ){
    //   $("#totals-table").css({
    //     height:"auto",
    //     opacity:"1"
    //     });
    // }
    // else{
    //   $("#totals-table").css({
    //     height:"0",
    //     opacity:"0"
    //     });
    // }
  }
  changeCategory(selectedCat){

    this.setState({menuItems: nutritionObject[selectedCat],
      totalCalories:0,
          calories:0,
          totalFat:0,
          transFat:0,
          cholesterol:0,
          sodium:0,
          carbohydrates:0,
          protein:0,
          dietaryFiber:0,
          sugars:0
          });

          $('.header-options').removeClass('active-item');
          $('.ing-selector').removeClass('active-ing');
          $('.ing-selector').find('i').removeClass('fa-minus-circle');
          $('.ing-selector').find('i').addClass('fa-plus-circle');
          $('#'+ selectedCat + '-btn').addClass('active-item');


}
  addIngredient(ingredientInfo){

    if($('#ingredient' + ingredientInfo.id).hasClass('active-ing')){
      $('#ingredient' + ingredientInfo.id).toggleClass('active-ing');
      $('#ingredient' + ingredientInfo.id).find('i').removeClass('fa-minus-circle');
      $('#ingredient' + ingredientInfo.id).find('i').addClass('fa-plus-circle');
    }
    else{
      $('#ingredient' + ingredientInfo.id).toggleClass('active-ing');
      $('#ingredient' + ingredientInfo.id).find('i').removeClass('fa-plus-circle');
      $('#ingredient' + ingredientInfo.id).find('i').addClass('fa-minus-circle');
    }
    var totalCalories
    var totalTotalFat
    var totalTransFat
    var totalCholesteral
    var totalSodium
    var totalCarbohydrates
    var totalProtein
    var totalFiber
    var totalSugar
    if($('#ingredient' + ingredientInfo.id).hasClass('active-ing')){
        totalCalories = this.state.calories + parseInt(ingredientInfo.calories,10);
        totalTotalFat = this.state.totalFat + parseInt(ingredientInfo.totalFat,10);
        totalTransFat = this.state.transFat + parseInt(ingredientInfo.transFat,10);
        totalCholesteral = this.state.cholesterol + parseInt(ingredientInfo.cholesterol,10);
        totalSodium = this.state.sodium + parseInt(ingredientInfo.sodium,10);
        totalCarbohydrates = this.state.carbohydrates + parseInt(ingredientInfo.carbohydrates,10);
        totalProtein = this.state.protein + parseInt(ingredientInfo.protein,10);
        totalFiber = this.state.dietaryFiber + parseInt(ingredientInfo.dietaryFiber,10);
        if(ingredientInfo.sugars == '<1'){
          totalSugar = this.state.sugars + parseInt(0);
        }
        else{
          totalSugar = this.state.sugars + parseInt(ingredientInfo.sugars,10);
        }

    }
    else{
      totalCalories = this.state.calories - parseInt(ingredientInfo.calories,10);
      totalTotalFat = this.state.totalFat - parseInt(ingredientInfo.totalFat,10);
      totalTransFat = this.state.transFat - parseInt(ingredientInfo.transFat,10);
      totalCholesteral = this.state.cholesterol - parseInt(ingredientInfo.cholesterol,10);
      totalSodium = this.state.sodium - parseInt(ingredientInfo.sodium,10);
      totalCarbohydrates = this.state.carbohydrates - parseInt(ingredientInfo.carbohydrates,10);
      totalProtein = this.state.protein - parseInt(ingredientInfo.protein,10);
      totalFiber = this.state.dietaryFiber - parseInt(ingredientInfo.dietaryFiber,10);
      if(ingredientInfo.sugars == '<1'){
        totalSugar = this.state.sugars - parseInt(0);
      }
      else{
        totalSugar = this.state.sugars - parseInt(ingredientInfo.sugars,10);
      }
    }
    this.setState({
      totalCalories:0,
      calories:totalCalories,
      totalFat:totalTotalFat,
      transFat:totalTransFat,
      cholesterol:totalCholesteral,
      sodium:totalSodium,
      carbohydrates:totalCarbohydrates,
      protein:totalProtein,
      dietaryFiber:totalFiber,
      sugars:totalSugar
    });

  }
  render() {
    return (
      <div className="App containerfluid">
        <NutritionApp
          menuItems={this.state.menuItems}
          totalCalories={this.state.totalCalories}
          calories={this.state.calories}
          totalFat={this.state.totalFat}
          transFat={this.state.transFat}
          cholesterol={this.state.cholesterol}
          sodium={this.state.sodium}
          carbohydrates={this.state.carbohydrates}
          protein={this.state.protein}
          dietaryFiber={this.state.dietaryFiber}
          sugars={this.state.sugars}
          onChange={this.addIngredient}
          changeCategory={this.changeCategory}
          handleScroll={this.handleScroll}
           />
           <div id="footer-nav"><p>This is a placeholder nav</p></div>
      </div>
    );
  }
}

export default App;
