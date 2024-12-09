$(document).ready(function () {
    // Initialize validation
    $("#tableForm").validate({
        rules: {
            multiplierStart: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            multiplierEnd: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            multiplicandStart: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            multiplicandEnd: {
                required: true,
                number: true,
                min: -50,
                max: 50
            }
        },
        messages: {
            multiplierStart: {
                required: "Minimum Row Value is required.",
                number: "Please enter a valid number.",
                min: "Value must be >= -50.",
                max: "Value must be <= 50."
            },
            multiplierEnd: {
                required: "Maximum Row Value is required.",
                number: "Please enter a valid number.",
                min: "Value must be >= -50.",
                max: "Value must be <= 50."
            },
            multiplicandStart: {
                required: "Minimum Column Value is required.",
                number: "Please enter a valid number.",
                min: "Value must be >= -50.",
                max: "Value must be <= 50."
            },
            multiplicandEnd: {
                required: "Maximum Column Value is required.",
                number: "Please enter a valid number.",
                min: "Value must be >= -50.",
                max: "Value must be <= 50."
            }
        },
        errorPlacement: function (error, element) {
            error.addClass("error-message");
            error.insertAfter(element); // Place error directly below the field
        },
        submitHandler: function () {
            generateTable(); // Call the function to generate the table
        }
    });

    function generateTable() {
        // Get the input values
        const multiplierStart = parseInt($("#multiplierStart").val());
        const multiplierEnd = parseInt($("#multiplierEnd").val());
        const multiplicandStart = parseInt($("#multiplicandStart").val());
        const multiplicandEnd = parseInt($("#multiplicandEnd").val());

        // Ensure range is valid
        if (multiplierEnd < multiplierStart || multiplicandEnd < multiplicandStart) {
            alert("Ensure start values are less than or equal to end values.");
            return;
        }

        // Clear the table before generating a new one
        const table = $("#multiplicationTable").empty();
        // Create the header row
        const headerRow = $("<tr>");
        headerRow.append($("<th>").addClass("corner-cell")); // Corner cell is empty
        for (let j = multiplicandStart; j <= multiplicandEnd; j++) {
            headerRow.append($("<th>").text(j)); // Add column headers
        }
        table.append(headerRow);

        // Generate the multiplication table rows
        for (let i = multiplierStart; i <= multiplierEnd; i++) {
            const row = $("<tr>");
            row.append($("<th>").text(i)); // Row header (multiplier)
            for (let j = multiplicandStart; j <= multiplicandEnd; j++) {
                row.append($("<td>").text(i * j)); // Table cells with multiplication results
            }
            table.append(row);
        }

        // Show the table container
        $("#tableContainer").show();
    }
});