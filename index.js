function saturdayFun(activity1, activity2 = 'roller-skate') {
    return activity1 ? `This Saturday, I want to ${activity1}!` : `This Saturday, I want to ${activity2}!`;
}
function mondayWork(decision1, decision2 = 'go to the office.') {
    return decision1 ? `This Monday, I will ${decision1}.` : `This Monday, I will ${decision2}`;
}
function wrapAdjective(param2 = '*') {
    return function(param1 = 'special') {
        return `You are ${param2}${param1}${param2}!`;
    }
}