function previewImage(event, imgId) {
    const reader = new FileReader();
    reader.onload = function () {
        const img = document.getElementById(imgId);
        img.src = reader.result;
        img.style.display = "block";
    };
    reader.readAsDataURL(event.target.files[0]);
}

function viewMembers() {
    const display = document.getElementById("memberDisplay");
    display.innerHTML = "";

    for (let i = 1; i <= 3; i++) {
        const name = document.getElementById(`name${i}`).value;
        const img = document.getElementById(`img${i}`);

        if (name && img.src && img.src.includes("data:image")) {
            const memberCard = document.createElement("div");
            memberCard.className = "member-card";

            const memberImg = document.createElement("img");
            memberImg.src = img.src;
            memberImg.className = "member-photo";

            const memberName = document.createElement("p");
            memberName.textContent = name;

            memberCard.appendChild(memberImg);
            memberCard.appendChild(memberName);
            display.appendChild(memberCard);
        }
    }
}