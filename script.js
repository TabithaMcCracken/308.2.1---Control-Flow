const radius =5;
const PI = 3.1415;
const gardenArea = PI * radius * radius; //78.5375 m sqaured
const spaceNeededPerPlant = 0.8;
const gardenPlantCompacity = gardenArea/spaceNeededPerPlant; // 98.1718
const pruningRate = .8 * gardenPlantCompacity // 78.5374
const plantingRate = .5 * gardenPlantCompacity //49.0859
const commonChangeRatio = 2; //The number doubles each week, so 2 is the ratio of this week to last week
let startingNumOfPlants = 20;
let numWeeks = 1;
let numberPlants = 0;

//After 1 week
numWeeks = 1;
numberPlants = startingNumOfPlants * (commonChangeRatio ** (numWeeks))
console.log(`At the end of week ${numWeeks}, we have ${numberPlants} plants.`)
if (numberPlants>pruningRate){
    console.log("We're above 80% capacity, so it's time to prune the plants.")
}
else if ((numberPlants>=plantingRate) && (numberPlants<=pruningRate)) {
    console.log("We're at less than 80% capacity but more than 50% capacity, so we should monitor the growth.")
}
else {
    console.log("We're below 50% capactiy, so it's time to plant.")
}

//After 2 weeks
numWeeks = 2;
numberPlants = startingNumOfPlants * (commonChangeRatio ** (numWeeks))
console.log(`At the end of week ${numWeeks}, we have ${numberPlants} plants.`)
if (numberPlants>pruningRate){
    console.log("We're above 80% capacity, so it's time to prune the plants.")
}
else if ((numberPlants>=plantingRate) && (numberPlants<=pruningRate)) {
    console.log("We're at less than 80% capacity but more than 50% capacity, so we should monitor the growth.")
}
else {
    console.log("We're below 50% capactiy, so it's time to plant.")
}

//After 3 weeks
numWeeks = 3;
numberPlants = startingNumOfPlants * (commonChangeRatio ** (numWeeks))
console.log(`At the end of week ${numWeeks}, we have ${numberPlants} plants.`)
if (numberPlants>pruningRate){
    console.log("We're above 80% capacity, so it's time to prune the plants.")
}
else if ((numberPlants>=plantingRate) && (numberPlants<=pruningRate)) {
    console.log("We're at less than 80% capacity but more than 50% capacity, so we should monitor the growth.")
}
else {
    console.log("We're below 50% capactiy, so it's time to plant.")
}

//Part 2
numWeeks = 10;
startingNumOfPlants = 100;
numberPlants = startingNumOfPlants * (commonChangeRatio ** (numWeeks));
console.log(`Starting with 100 plants, after ten weeks we would have ${numberPlants}.`);
let spaceNeededAfterWeeks = numberPlants * spaceNeededPerPlant;
console.log(`With this many plants, we will need ${spaceNeededAfterWeeks} sq meters of land.`);
let radiusNeededForTheGarden = (Math.sqrt(spaceNeededAfterWeeks/Math.PI)).toFixed(2); // Rounds the decimal to 2 places
console.log(`If we needed a garden of this size, we would need a circle with a radius of ${radiusNeededForTheGarden}`);

//Part 3

numWeeks = 1;
startingNumOfPlants = 100;
numberPlants = startingNumOfPlants * (commonChangeRatio ** (numWeeks));
let spaceNeeded = startingNumOfPlants * spaceNeededPerPlant
try {
    if (spaceNeeded > gardenArea) {
        throw new Error('Space needed exceeds available space.');
    }
    if ((numberPlants>=plantingRate) && (numberPlants<=pruningRate)) {
        console.log("We're at less than 80% capacity but more than 50% capacity, so we should monitor the growth.")
    } else if ((numberPlants>pruningRate) && (numberPlants<=gardenPlantCompacity)){
        console.log("We're above 80% capacity, so it's time to prune the plants.")
    } else {
        console.log("We're below 50% capactiy, so it's time to plant.")
    }
} catch (error){
    console.error('An error occurred.', error.message);
}
