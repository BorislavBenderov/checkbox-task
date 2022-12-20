const passes = [
    {
        result: "incomplete",
        receiver: "Demaryius Thomas",
        distance: 0.7
    },
    {
        result: "complete",
        receiver: "Tim Patrick",
        distance: 0.9
    },
    {
        result: "complete",
        receiver: "Demaryius Thomas",
        distance: 0.3
    },
    {
        result: "incomplete",
        receiver: "Tim Patrick",
        distance: 0.9
    },
    {
        result: "incomplete",
        receiver: "Tim Patrick",
        distance: 0.8
    },
    {
        result: "complete",
        receiver: "Demaryius Thomas",
        distance: 0.1
    },
    {
        result: "interception",
        receiver: "Demaryius Thomas",
        distance: 0.4
    }
];

//Find the longest complete pass and its receiver
const maxDistancePass = Math.max(...passes.map(x => x.distance));
const maxDistanceCompletePass = passes.find(x => x.distance === maxDistancePass && x.result === 'complete');
console.log(`longDistancePass - ${maxDistanceCompletePass.receiver}: ${maxDistanceCompletePass.distance}`);


//Find percentage fore one pass
const percentOfOnePass = 100 / passes.length;

//Find percentage for completed passes
const completedPasses = passes.filter(pass => pass.result === 'complete');
const percentOfCompletedPasses = percentOfOnePass * completedPasses.length;


//Find percentage for incompleted passes
const incompletePasses = passes.filter(pass => pass.result === 'incomplete');
const percentOfIncompletePasses = percentOfOnePass * incompletePasses.length;

//Find percentage for interception passes
const interceptionPasses = passes.filter(pass => pass.result === 'interception');
const percentOfInterceptionPasses = percentOfOnePass * interceptionPasses.length;


//Find the receiver with the biggest percentage of caught passes
const receiversOfCompletedPass = [];
completedPasses.map(x => receiversOfCompletedPass.push(x.receiver));

let mf = 1;
let m = 0;
let item;

for (let i = 0; i < receiversOfCompletedPass.length; i++) {
    for (let j = i; j < receiversOfCompletedPass.length; j++) {
        if (receiversOfCompletedPass[i] == receiversOfCompletedPass[j])
            m++;
        if (mf < m) {
            mf = m;
            item = receiversOfCompletedPass[i];
        }
    }
    m = 0;
}

const mostCompletePerentace = percentOfOnePass * mf;

console.log(`mostCompletePercentage - ${item}: ${mostCompletePerentace}%`);