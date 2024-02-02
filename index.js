// code your solution here

function saturdayFun(value = "roller-skate"){
    return `This Saturday, I want to ${value}!`
}

function mondayWork(value = 'go to the office'){
    return `This Monday, I will ${value}.`
}

function wrapAdjective(value1){
    return function inner(value2 = "special"){
        return `You are ${value1}${value2}${value1}!`
    }

}


