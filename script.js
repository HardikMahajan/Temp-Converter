const calculateTemp = () => {
    const numberTemp = document.querySelector('#temp').value; // render the input part
    // console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value; // this gonna help us to select the initial index

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }

    const fahToCel = (feh) => {
        let celsius = Math.round((feh - 32) * 5/9);
        return celsius;
    }

    let result;
    
    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.querySelector('#resultContainer').innerHTML = `${result}° Fahrenheit`;
    } else {
        result = fahToCel(numberTemp);
        document.querySelector('#resultContainer').innerHTML = `${result}° Celsius`;
    }
}