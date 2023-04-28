function addAndRemoveElements(commands) {

    let result = [];
    let currentIteration = 0;

    for (let command of commands) {
        currentIteration++;

        if (command === 'remove') {
            result.pop();
            continue;
        }

        result.push(currentIteration)
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addAndRemoveElements(['add',
    'add',
    'add',
    'add']
)
console.log('-------')
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
)
console.log('-------')
addAndRemoveElements(['remove',
    'remove',
    'remove']

)