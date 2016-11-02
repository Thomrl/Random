
        $('#getResult').click(function() {
        var inputHere = $('#uInput').val();
        var result = inputHere.split(",");
        var resultHere = result[Math.floor(Math.random() * result.length)];
        $('#resultHere').html(resultHere)
        });

        $(document).keypress(function(e){
        if (e.which == 13){
        $("#getResult").click();
        }
    });

console.log("Program loaded");