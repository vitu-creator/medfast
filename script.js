const prescriptions = [
    { id: 1, title: "Afta / Estomatite", details: "Lidocaína 50mg/g creme. Aplicar 2 a 3 vezes ao dia." },
    { id: 2, title: "Dor de Garganta", details: "Paracetamol 500mg. Tomar 1 comprimido de 8/8h." },
    { id: 3, title: "Dengue sem sinais de alarme", details: "Hidratação oral abundante. Acompanhar sintomas." },
];

function renderPrescriptions(filter = "") {
    const container = document.getElementById("prescriptions");
    container.innerHTML = "";

    prescriptions
        .filter(p => p.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach(prescription => {
            const div = document.createElement("div");
            div.className = "prescription";
            div.innerHTML = `<h3>${prescription.title}</h3><p>${prescription.details}</p>`;
            container.appendChild(div);
        });
}

document.getElementById("search").addEventListener("input", (e) => {
    renderPrescriptions(e.target.value);
});

// Render all prescriptions on page load
renderPrescriptions();
