const historico = [];

document.getElementById("calcular").addEventListener("click", function () {
    let areas = [
        { nota: parseFloat(document.getElementById("humanas").value), peso: parseFloat(document.getElementById("peso-humanas").value) },
        { nota: parseFloat(document.getElementById("natureza").value), peso: parseFloat(document.getElementById("peso-natureza").value) },
        { nota: parseFloat(document.getElementById("linguagens").value), peso: parseFloat(document.getElementById("peso-linguagens").value) },
        { nota: parseFloat(document.getElementById("matematica").value), peso: parseFloat(document.getElementById("peso-matematica").value) },
        { nota: parseFloat(document.getElementById("redacao").value), peso: parseFloat(document.getElementById("peso-redacao").value) }
    ];

    let usaPonderada = areas.some(a => !isNaN(a.peso) && a.peso > 0);
    let media;

    if (usaPonderada) {
        let somaPesos = 0, somaNotas = 0;
        areas.forEach(a => { if(!isNaN(a.nota)&&!isNaN(a.peso)){ somaNotas += a.nota*a.peso; somaPesos += a.peso; }});
        media = somaPesos>0 ? (somaNotas/somaPesos) : 0;
    } else {
        let somaNotas = 0, count = 0;
        areas.forEach(a => { if(!isNaN(a.nota)){ somaNotas += a.nota; count++; } });
        media = count>0 ? (somaNotas/count) : 0;
    }

    historico.push(media.toFixed(2)); // adiciona ao histórico
    atualizarHistorico();
});

function atualizarHistorico() {
    const div = document.getElementById("resultado");
    div.innerHTML = "<h3 class='text-lg font-bold mb-2'>Histórico de Notas:</h3>";
    const ul = document.createElement("ul");
    ul.classList.add("list-disc", "pl-5");
    historico.forEach((nota, i) => {
        const li = document.createElement("li");
        li.textContent = `Cálculo ${i+1}: ${nota}`;
        ul.appendChild(li);
    });
    div.appendChild(ul);
}
