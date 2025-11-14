<!DOCTYPE html>

<script> 

function ans(input){
    // the line below creates an array of numeric values from an input string
    let testScores = input.trim().split(" ").map(Number);
    
    // type your answer inside this function.  
    // please use testScores array variable
    
    for (let i=0; i<(testScores.length); i++) {
        for (let j=0; j<(testScores.length-1); j++) {
            if (testScores[j]<testScores[j+1]) {
                let temp = testScores[j];
                testScores[j] = testScores[j+1];
                testScores[j+1] = temp;
            }
        }
        
    }
    
    
    console.log(testScores.slice(0,3));

 

// DO NOT REMOVE CODE FROM THIS POINT ON
} // closes the ans function

// this is responsible for getting a stream of input from the console
// and placed them inside the input variable.
input =""
process.stdin.on("data", d => input += d ).on('end', () => ans(input))

    
</script>