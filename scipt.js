$(document).ready(function () {
    $("#submitBtn").click(function () {
        // Collect form values
        const name = $("#fullName").val();
        const dob = $("#dob").val();
        const address = $("#address").val();
        const gender = $("#gender").val();
        const phone = $("#phone").val();

        // Simple validation
        if (!name || !dob || !address || !gender || !phone) {
            alert("Please fill in all the fields.");
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Display the data
        $("#outputName").text(name);
        $("#outputDob").text(dob);
        $("#outputAddress").text(address);
        $("#outputGender").text(gender);
        $("#outputPhone").text(phone);
        $("#output").fadeIn();
    });
});
