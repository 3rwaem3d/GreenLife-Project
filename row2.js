const symptoms = document.querySelectorAll(".symptom-card");
const checkButton = document.querySelector(".check-button");
const plantName = document.querySelector("#plant-name");

let selectedSymptoms = [];

// اختيار الأعراض
symptoms.forEach(function (symptom) {

    symptom.addEventListener("click", function () {

        const symptomName =
            symptom.querySelector("h4").textContent;

        if (selectedSymptoms.includes(symptomName)) {

            selectedSymptoms = selectedSymptoms.filter(function (item) {
                return item !== symptomName;
            });

            symptom.classList.remove("selected");

        } else {

            selectedSymptoms.push(symptomName);
            symptom.classList.add("selected");
        }
    });
});


// زر Check My Plant
checkButton.addEventListener("click", function () {

    const name = plantName.value.trim();

    if (selectedSymptoms.length === 0) {

        alert("Please select at least one symptom.");

        return;
    }
    localStorage.setItem("plantName", name);
    localStorage.setItem("plantSymptoms", JSON.stringify(selectedSymptoms));
    let message = "";


    if (selectedSymptoms.includes("Yellow Leaves")) {

        message +=
            "Your plant may have a watering or drainage problem.\n";
    }


    if (selectedSymptoms.includes("Brown Spots")) {

        message +=
            "Your plant may be getting too much sunlight or inconsistent watering.\n";
    }


    if (selectedSymptoms.includes("Drooping")) {

        message +=
            "Your plant may need better watering or a more suitable environment.\n";
    }


    if (selectedSymptoms.includes("Pests")) {

        message +=
            "Your plant may have pests. Check the leaves and stems carefully.\n";
    }


    if (name !== "") {

        alert(
            "Plant: " + name +
            "\n\n" +
            message
        );

    } else {

        alert(message);
    }

});
