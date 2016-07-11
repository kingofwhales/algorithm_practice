//insertion sort
// sample input format
// 5
// 53264
// https://www.hackerrank.com/challenges/insertionsort1



function processData(input) {
    //Enter your code here
    var input_array = input.split("\n") 
   
    var target_array = input_array[1].split("")
    console.log(target_array)
    var array;
    var temp_array = target_array;
    
    for (var n=1;n<target_array.length;n ++ ){
        for (var m = 0; m <= n-1; m ++){
            
            if (target_array[n] < target_array[m]){
                
                
                moved_element = target_array.splice(n,1)
               
                target_array.splice(m,0,moved_element)
                
                break;
            }
            
    
            
        }
        
        array = target_array.toString().split(",").join(" ")
        console.log(array)
        console.log("where is the output>")
    }



} 