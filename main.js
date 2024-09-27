// display content in display/screen

function displayContent(content){
    result.value += content
}

// clear screen
function calcScreenClear(){
    result.value = ""
}

// Output
function calcOutput(){
    result.value = eval(result.value)
}

// del

function calcLastValue(){
    result.value = result.value.slice(0, -1)
}

