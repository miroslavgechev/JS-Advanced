function rotateArray(input, numberOfRotations){

    for(let rotation = 0; rotation < numberOfRotations; rotation++){
        input.unshift(input.pop())
    }

    console.log(input.join(' '));
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2
)