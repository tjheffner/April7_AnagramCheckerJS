var anagram = function(input1, input2) {
    
    var input1_sorted = input1.toUpperCase().split("").sort().join();
    var input2_sorted = input2.toUpperCase().split("").sort().join();

    if ((input1 === input2) || (input1_sorted === input2_sorted)) {
        return "is a match";
    } else {
        return "is not a match";
    }
}
