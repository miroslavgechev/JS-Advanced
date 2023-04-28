function pieceOfPie(flavors, startingFlavor, endingFlavor) {

    let startIndex = flavors.indexOf(startingFlavor);
    let endIndex = flavors.indexOf(endingFlavor);

    return flavors.slice(startIndex, endIndex + 1);
}

pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
)