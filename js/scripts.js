var anagram = function(input1, input2) {

    var input1_sorted = input1.toUpperCase().split("").sort().join();
    var input2_sorted = input2.toUpperCase().split("").sort().join();

    var partial = input1_sorted.split(",").filter(function(element, index, array) {
        return input2_sorted.split(",").indexOf(element) != -1;
    });

    if ((input1 === input2) || (input1_sorted === input2_sorted)) {
        return "is a match";
    } else if (partial.length >= 3) {
        console.log(partial);
        return "is a partial match";
    } else {
        return "is not a match";
    }
};

$(document).ready(function() {
    $("form#anagram").submit(function(event) {
        var input1 = $("input#input1").val();
        var input2 = $("input#input2").val();
        var input3 = $("input#input3").val();
        var input4 = $("input#input4").val();
        var input5 = $("input#input5").val();

        var result = anagram(input1, input2);
        var result2 = anagram(input1, input3);
        var result3 = anagram(input1, input4);
        var result4 = anagram(input1, input5);

        $("#match").text(result);
        $("#match2").text(result2);
        $("#match3").text(result3);
        $("#match4").text(result4);

        $(".input1").text(input1);
        $(".input2").text(input2);
        $(".input3").text(input3);
        $(".input4").text(input4);
        $(".input5").text(input5);


        $("#result").show();
        event.preventDefault();
    });
});
