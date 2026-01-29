(function () {
    const form = document.getElementById("contato-form");
    const alertBox = document.getElementById("form-alert");

    if (!form) {
        return;
    }

    const STORAGE_KEY = "contatos";

    const getContatos = () => {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    };

    const saveContatos = (contatos) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(contatos));
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            return;
        }

        const contato = {
            nome: document.getElementById("nome").value.trim(),
            email: document.getElementById("email").value.trim(),
            senha: document.getElementById("senha").value,
            assunto: document.getElementById("assunto").value.trim(),
            mensagem: document.getElementById("mensagem").value.trim(),
            criadoEm: new Date().toISOString()
        };

        const contatos = getContatos();
        contatos.push(contato);
        saveContatos(contatos);

        form.reset();
        form.classList.remove("was-validated");

        if (alertBox) {
            alertBox.classList.remove("d-none");
            setTimeout(() => {
                alertBox.classList.add("d-none");
            }, 3000);
        }
    });
})();
