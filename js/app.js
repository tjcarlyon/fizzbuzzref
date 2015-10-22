$(document).ready(function () {

	//# is what links to my htnml correct?
	//I had to research the 2nd alert, and still confused by it
	//to start over is a page refresh the easiest way to clear the page?

    $('#click').click(function (event) {
        var input = $('#txt').val();

        if (input % 1 !== 0) {
            alert("Please use a whole number");
        } else if (input < 0) {
            input = Math.abs(input);
			event(input);
		    alert("Change to positive number");
        }
        else {
            event(input);
        }

        //base code from previous fizzbuzz below with a break<br> to add(append) to end of each line
        //My code was origignally printing all the numbers on the same line and I had to research the <br>
        
function event() {
        for (var i = 1; i <= input; i++) {

            if (i % 3 && 1 % 5 === 0) {
                $('#list').append('FizzBuzz <br>');
            } else if (i % 3 === 0) {
                $('#list').append('Fizz <br>');
            } else if (i % 5 === 0) {
                $('#list').append('Buzz <br>');
            } else {
                $('#list').append(i + '<br>' );
            }
        }
}
    });
});
