$(document).ready(function() {
    $('#taxForm').submit(function(event) {
        event.preventDefault();
        
        // Get user inputs
        var age = $('#age').val();
        var income = parseFloat($('#income').val());
        var deductions = parseFloat($('#deductions').val());
        
        // Calculate gross annual income after deductions
        var grossAnnualIncome = income - deductions;
        
        // Calculate tax based on age and gross annual income
        var tax = 0;
        if (grossAnnualIncome > 8) {
            if (age === '<40') {
                tax = (grossAnnualIncome - 8) * 0.3;
            } else if (age === '>=40 <60') {
                tax = (grossAnnualIncome - 8) * 0.4;
            } else {
                tax = (grossAnnualIncome - 8) * 0.1;
            }
        }
        
        // Display result in the modal
        $('#resultBody').html('<p>Gross Annual Income (after deductions): ' + grossAnnualIncome.toFixed(2) + ' Lakhs</p>' +
                             '<p>Tax: ' + tax.toFixed(2) + ' Lakhs</p>');
        
        // Show the result modal
        $('#resultModal').modal('show');
    });
});