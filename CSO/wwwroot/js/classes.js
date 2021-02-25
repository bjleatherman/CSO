//TODO: ensure that getters for arrays have overloads that allow for the return of specfic entries
class ProgressBarData {
    constructor(name, maxValue, increaseOnIncrement, addProgressBarClass, progressBarId, buttonClass, buttonId){
        this.name = name;
        this.maxValue = maxValue;
        this.increaseOnIncrement = increaseOnIncrement; //bool
        this.addProgressBarClass = addProgressBarClass;
        this.progressBarId = progressBarId;
        this.buttonClass = buttonClass;
        this.buttonId = buttonId;

        console.log("ProgressBarObj: "+this.name+" created");
    }

    getName(){return this.name;}
    setName(x){this.name = x;}

    getMaxValue(){return this.maxValue;}
    setMaxValue(x){this.maxValue = x;}

    getIncreaseOnIncrement(){return this.increaseOnIncrement;}
    setIncreaseOnIncrement(x){this.increaseOnIncrement = x;} //TODO: ensure mutations are bool

    getAddProgressBarClass(){return this.addProgressBarClass;}
    setAddProgressBarClass(x){this.addProgressBarClass = x;} //Use setter to change color of full bars?

    getProgressBarId(){return this.progressBarId;}
    setProgressBarId(x){this.name = progressBarId;} //probably dont need this

    getButtonClass(){return this.buttonClass;}
    setButtonClass(x){this.name = buttonClass;} //Use setter to change color when full bars?
    
    getButtonId(){return this.buttonId;}
    setButtonId(x){this.name = buttonId;} //probably dont need this
}

class Terrain{
    constructor(doGenerateTerrrain, terrainMap, innerTerrainSeeds, outerTerrainSeeds, innerIslandGenerationThreshold, outerIslandGenerationThreshold){
        this.doGenerateTerrrain = doGenerateTerrrain; //bool
        this.terrainMap = terrainMap;
        this.outerTerrainSeeds = outerTerrainSeeds;
        this.innerTerrainSeeds = innerTerrainSeeds;
        this.outerIslandGenerationThreshold = outerIslandGenerationThreshold;
        this.innerIslandGenerationThreshold = innerIslandGenerationThreshold;

        console.log("Terrain Obj Created");
    }

    getDoGenerateTerrrain(){return this.doGenerateTerrrain;}
    setDoGenerateTerrrain(x){this.doGenerateTerrrain = x;} //ensure that mutations are bool

    getTerrainMap(){return this.terrainMap;}
    setTerrainMap(x){this.terrainMap = x;} //should have overload for .push() and whole []

    getOuterTerrainSeeds(){return this.outerTerrainSeeds;}
    setOuterTerrainSeeds(x){this.outerTerrainSeeds = x;} //should have overload for .push() and whole []

    getInnerTerrainSeeds(){return this.innerTerrainSeeds;}
    setInnerTerrainSeeds(x){this.innerTerrainSeeds = x;} //should have overload for .push() and whole []

    getOuterIslandGenerationThreshold(){return this.outerIslandGenerationThreshold;}
    setOuterIslandGenerationThreshold(x){this.outerIslandGenerationThreshold = x;}

    getInnerIslandGenerationThreshold(){return this.innerIslandGenerationThreshold;}
    setInnerIslandGenerationThreshold(x){this.innerIslandGenerationThreshold = x;}
}

class Gameboard{ 
    constructor(gameboardLength, gameboardHeight, divisionLength, minimumDivisions, minimumDivisionLength/*, laidMinesMap*/){

        console.log("Gameboard Obj Created");

        this.gameboardLength = gameboardLength;
        this.gameboardHeight = gameboardHeight;
        this.divisionLength = divisionLength;
        this.minimumDivisions = minimumDivisions;
        this.minimumDivisionLength = minimumDivisionLength;
    }

    getGameboardLength(){return this.gameboardLength;}
    setGameboardLength(x){this.gameboardLength = x;} //used if implementing a generate new size button

    getGameboardHeight(){return this.gameboardHeight;}
    setGameboardHeight(x){this.gameboardHeight = x;} //used if implementing a generate new size button

    getDivisionLength(){return this.divisionLength;}
    setDivisionLength(x){this.divisionLength = x;}

    getMinimumDivisions(){return this.minimumDivisions;}
    setMinimumDivisions(x){this.minimumDivisions = x;}

    getMinimumDivisionLength(){return this.minimumDivisionLength;}
    setMinimumDivisionLength(x){this.minimumDivisionLength = x;}

    getNumberOfLengthDivisions(){return this.numberOfLengthDivisions;}
    setNumberOfLengthDivisions(x){this.numberOfLengthDivisions = x;}

    getNumberOfHeightDivisions(){return this.numberOfHeightDivisions;}
    setNumberOfHeightDivisions(x){this.numberOfHeightDivisions = x;}

    getNumberOfBoxesInLengthDivision(){return this.numberOfBoxesInLengthDivision;}
    setNumberOfBoxesInLengthDivision(x){this.numberOfBoxesInLengthDivision = x;}
    
    getNumberOfBoxesInHeightDivision(){return this.numberOfBoxesInHeightDivision;}
    setNumberOfBoxesInHeightDivision(x){this.numberOfBoxesInHeightDivision = x;}
}

//TODO: create static jagged divisions array
class Box{
    constructor(id){
        this.id = id
        this.boxType = 'ocean';
        this.isTopBorder = false;
        this.isLeftBorder = false;
        this.isRightBorder = false;
        this.isBottomBorder = false;
        this.inDivision = null;
    }

    //public methods
    getId(){return this.id;}
    setId(x){this.id = x;}

    getBoxType(){return this.boxType;}
    setBoxType(x){this.boxType = x;}

    getIsTopBorder(){return this.isTopBorder;}
    setIsTopBorder(x){
        if(x === true || x === false){
            this.isTopBorder = x;
            Box.setTopBorderArray(this.id);
        } else {console.log('Change Failed, was not === t/f');}
    }

    getIsLeftBorder(){return this.isLeftBorder;}
    setIsLeftBorder(x){
        if(x === true || x === false){
            this.isLeftBorder = x;
            Box.setLeftBorderArray(this.id);
        } else {console.log('Change Failed, was not === t/f');}
    }

    getIsRightBorder(){return this.isRightBorder;}
    setIsRightBorder(x){
        if(x === true || x === false){
            this.isRightBorder = x;
            Box.setRightBorderArray(this.id);
        } else {console.log('Change Failed, was not === t/f');}
    }

    getIsBottomBorder(){return this.isBottomBorder;}
    setIsBottomBorder(x){
        if(x === true || x === false){
            this.isBottomBorder = x;
            Box.setBottomBorderArray(this.id);
        } else {console.log('Change Failed, was not === t/f');}
    }

    getInDivision(){return this.inDivision;}
    setInDivision(x){
        if (Number.isInteger(x)){
            this.inDivision = x;
        }
    }

    //static properties and methods

    static BoxArray = [];

    static topBorderArray = [];
    static leftBorderArray = [];
    static rightBorderArray = [];
    static bottomBorderArray = [];

    static getTopBorderArray(){return this.topBorderArray;}
    static setTopBorderArray(x){
        if(Number.isInteger(x)){
            Box.topBorderArray.push(x);
        } else {
            this.topBorderArray = x;
        }
    }

    static getLeftBorderArray(){return this.leftBorderArray;}
    static setLeftBorderArray(x){
        if(Number.isInteger(x)){
            this.leftBorderArray.push(x);
        } else {
            this.leftBorderArray = x;
        }
    }

    static getRightBorderArray(){return this.rightBorderArray;}
    static setRightBorderArray(x){
        if(Number.isInteger(x)){
            this.rightBorderArray.push(x);
        } else {
            this.rightBorderArray = x;
        }
    }
    static getBottomBorderArray(){return this.bottomBorderArray;}
    static setBottomBorderArray(x){
        if(Number.isInteger(x)){
            this.bottomBorderArray.push(x);
        } else {
            this.bottomBorderArray = x;            
        }
    }

    static clearBorderArrays(){
        this.topBorderArray = [];
        this.leftBorderArray = [];
        this.rightBorderArray = [];
        this.bottomBorderArray = [];
    }
}

class Player{
    constructor(currentLocation, directionHistory, currentHealth, currentMines, currentDrones, currentSneak, currentTorpedo, currentSonar){
        this.currentLocation = currentLocation;
        this.directionHistory = directionHistory;
        this.currentHealth = currentHealth;
        this.currentMines = currentMines;
        this.currentDrones = currentDrones;
        this.currentSneak = currentSneak;
        this.currentTorpedo = currentTorpedo;
        this.currentSonar = currentSonar;

        console.log("Player Obj Created");
    }

    getCurrentLocation(){return this.currentLocation;}
    //if new location is valid, call setDirectionHistory and update from here
    setCurrentLocation(x){this.currentLocation = x;} //TODO: ensure that value is on the currentLocation //NOTE: check move integrity elsewhere?

    getDirectionHistory(){return this.directionHistory;}
    //should have overload for .push() and whole []
    setDirectionHistory(x){this.directionHistory = x;} //TODO: ensure that value == N,S,E,W

    getCurrentHealth(){return this.currentHealth;}
    setCurrentHealth(x){this.currentHealth = x;} //TODO: check value against max

    getCurrentMines(){return this.currentMines;}
    setCurrentMines(x){this.currentMines = x;} //TODO: check value against max

    getCurrentDrones(){return this.currentDrones;}
    setCurrentDrones(x){this.currentDrones = x;} //TODO: check value against max

    getCurrentSneak(){return this.currentSneak;}
    setCurrentSneak(x){this.currentSneak = x;} //TODO: check value against max

    getCurrentTorpedo(){return this.currentTorpedo;}
    setCurrentTorpedo(x){this.currentTorpedo = x;} //TODO: check value against max

    getCurrentSonar(){return this.currentSonar;}
    setCurrentSonar(x){this.currentSonar = x;} //TODO: check value against max
}

//TODO: make this into a list, location = id, who laid = value
class Mines{
    constructor(location, shownToUser){
        this.location = location; //probs const
        this.shownToUser = shownToUser; //bool //probs const
        Mines.placeMine(this);
    }

    getLocation(){return this.location;}
    setLocation(x){this.location = x;} //probs dont need this

    getShownToUser(){return this.shownToUser;}
    setShownToUser(x){this.shownToUser = x;} //bool //probs dont need this

    //statics
    static laidMinesMap = [];

    static placeMine(x){
        Mines.laidMinesMap.push(x)
    }
}