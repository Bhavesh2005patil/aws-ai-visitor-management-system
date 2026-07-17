const API_URL =
"https://cpfrj52p65.execute-api.ap-south-1.amazonaws.com/om/register";

const imageInput = document.getElementById("image");
const preview = document.getElementById("preview");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

let totalVisitors = 0;
let verifiedVisitors = 0;
let totalConfidence = 0;

imageInput.addEventListener("change", function (e) {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (event) {
        preview.src = event.target.result;
        preview.hidden = false;
    };

    reader.readAsDataURL(file);
});

async function registerVisitor() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const purpose = document.getElementById("purpose").value.trim();
    const department = document.getElementById("department").value;
    const host = document.getElementById("host").value.trim();
    const file = imageInput.files[0];

    if (!name) {
        alert("Please enter visitor name");
        return;
    }

    if (!file) {
        alert("Please select an image");
        return;
    }

    loading.hidden = false;
    result.innerHTML = "";

    const reader = new FileReader();

    reader.onload = async function () {

        const base64Image = reader.result.split(",")[1];

        const payload = {
            name: name,
            email: email,
            mobile: mobile,
            purpose: purpose,
            department: department,
            host: host,
            image: base64Image
        };

        try {

            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            loading.hidden = true;

            if (response.ok) {

                const confidence =
                    parseFloat(data.confidence || 0).toFixed(2);

                totalVisitors++;
                verifiedVisitors++;

                totalConfidence += parseFloat(confidence);

                updateDashboard(confidence);

                result.innerHTML = `
                <div class="success-card">
                    <h2>✅ Registration Successful</h2>

                    <p><strong>Visitor:</strong> ${name}</p>

                    <p><strong>Email:</strong> ${email}</p>

                    <p><strong>Mobile:</strong> ${mobile}</p>

                    <p><strong>Purpose:</strong> ${purpose}</p>

                    <p><strong>Department:</strong> ${department}</p>

                    <p><strong>Host:</strong> ${host}</p>

                    <p><strong>Face Detected:</strong> Yes</p>

                    <p><strong>Confidence:</strong>
                    ${confidence}%</p>

                    <audio controls>
                        <source src="${data.audio_url}"
                        type="audio/mpeg">
                    </audio>

                    <br><br>

                    <a href="${data.image_url}"
                    target="_blank">
                    View Uploaded Image
                    </a>

                </div>
                `;

                clearForm();

            } else {

                showError(
                    data.message ||
                    "Registration failed."
                );

            }

        } catch (error) {

            loading.hidden = true;

            showError(
                "Unable to connect to API Gateway."
            );

            console.error(error);

        }

    };

    reader.readAsDataURL(file);
}

function showError(message) {

    result.innerHTML = `
    <div class="error-card">
        <h2>❌ Error</h2>
        <p>${message}</p>
    </div>
    `;
}

function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("purpose").value = "";
    document.getElementById("host").value = "";
    document.getElementById("department").selectedIndex = 0;

    imageInput.value = "";

    preview.hidden = true;
    preview.src = "";
}

function updateDashboard(confidence) {

    document.getElementById("totalVisitors").innerText =
        totalVisitors;

    document.getElementById("verifiedVisitors").innerText =
        verifiedVisitors;

    document.getElementById("todayVisitors").innerText =
        totalVisitors;

    const average =
        totalConfidence / verifiedVisitors;

    document.getElementById("avgConfidence").innerText =
        average.toFixed(2) + "%";
}

window.onload = function () {

    document.getElementById("totalVisitors").innerText = "0";
    document.getElementById("verifiedVisitors").innerText = "0";
    document.getElementById("avgConfidence").innerText = "0%";
    document.getElementById("todayVisitors").innerText = "0";

};

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        registerVisitor();
    }

});

function playWelcomeSound() {

    const audio =
        document.querySelector("audio");

    if (audio) {
        audio.play();
    }

}

function resetStatistics() {

    totalVisitors = 0;
    verifiedVisitors = 0;
    totalConfidence = 0;

    updateDashboard(0);

}

function showLoadingText() {

    loading.innerHTML =
        "Processing image with Amazon Rekognition...";

}

function hideLoadingText() {

    loading.innerHTML = "";

}