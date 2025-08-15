import React, {Component, use, useState} from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json";


const BaristaForm = () => {
    const [drinks] = useState(drinksJson);
    const [currentDrink, setCurrentDrink] = useState(null);
    const [trueRecipe, setTrueRecipe] = useState(null);
    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });
    const [correctTemperature, setCorrectTemperature] = useState("");
    const [correctSyrup, setCorrectSyrup] = useState("");
    const [correctMilk, setCorrectMilk] = useState("");
    const [correctBlended, setCorrectBlended] = useState("");

    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'], 
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }
    const onCheckAnswer = (e) => {
        e?.preventDefault?.();

    if (!trueRecipe) return;

    // normalize recipe keys: your JSON may use "temp"
    const recipe = {
        temperature: trueRecipe.temperature ?? trueRecipe.temp ?? "",
        syrup: trueRecipe.syrup ?? "",
        milk: trueRecipe.milk ?? "",
        blended: trueRecipe.blended ?? "",
        };

setCorrectTemperature(inputs.temperature === recipe.temperature ? "correct" : "wrong");
  setCorrectSyrup(inputs.syrup === recipe.syrup ? "correct" : "wrong");
  setCorrectMilk(inputs.milk === recipe.milk ? "correct" : "wrong");
  setCorrectBlended(inputs.blended === recipe.blended ? "correct" : "wrong");
};
    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        });
        setCorrectTemperature("");
        setCorrectSyrup("");
        setCorrectMilk("");
        setCorrectBlended("");
        getNextDrink();
    };
    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    };

    return(
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="mini-header">
                <h2>{currentDrink}</h2>
                <button type="new-drink-button" className="button newdrink" onClick={onNewDrink}>🔁</button>
            </div>
            <form action=""></form>
            <button type="submit" className="submit button" onClick={onCheckAnswer}>Check Answer</button>
            <button type="submit" className="submit button" onClick={onNewDrink}>New Drink</button>
            <h3>Temperature</h3>
                <div className="answer-space" id={correctTemperature}>
                    {inputs["temperature"]}
                </div>
                <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="temperature"
                choices={ingredients["temperature"]}
                checked={inputs["temperature"]} />

            <h3>Syrup</h3>
                <div className="answer-space" id = {correctSyrup}>
                    {inputs["syrup"]}
                </div>
                <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="syrup"
                choices={ingredients["syrup"]}
                checked={inputs["syrup"]} />

            <h3>Milk</h3>
                <div className="answer-space" id={correctMilk}>
                    {inputs["milk"]}
                </div>
                <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="milk"
                choices={ingredients["milk"]}
                checked={inputs["milk"]} />

            <h3>Blended</h3>
                <div className="answer-space" id={correctBlended}>
                    {inputs["blended"]}
                    </div>
                    <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="blended"
                    choices={ingredients["blended"]}
                    checked={inputs["blended"]} />
        </div>
    );
};

export default BaristaForm;