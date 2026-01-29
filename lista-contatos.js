(function () {
    const tbody = document.getElementById("lista-contatos");
    const emptyState = document.getElementById("empty-state");

    if (!tbody) {
        return;
    }

    const STORAGE_KEY = "contatos";

    const raw = localStorage.getItem(STORAGE_KEY);
    const contatos = raw ? JSON.parse(raw) : [];

    if (contatos.length === 0) {
        if (emptyState) {
            emptyState.classList.remove("d-none");
        }
        return;
    }

    const formatter = new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
    });

    contatos.forEach((contato) => {
        const row = document.createElement("tr");

        const data = contato.criadoEm ? formatter.format(new Date(contato.criadoEm)) : "-";

        row.innerHTML = `
            <td>${contato.nome || ""}</td>
            <td>${contato.email || ""}</td>
            <td>${contato.assunto || ""}</td>
            <td>${contato.mensagem || ""}</td>
            <td>${data}</td>
        `;

        tbody.appendChild(row);
    });
})();
