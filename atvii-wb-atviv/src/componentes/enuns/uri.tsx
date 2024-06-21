const BASE_URL = "http://localhost:32832";

export const listarClientes = async () => {
    const response = await fetch(`${BASE_URL}/clientes`);
    if (!response.ok) {
        throw new Error("Failed to fetch clients");
    }
    return response.json();
};



export const buscarCliente = async (id: string) => {
    const response = await fetch(`${BASE_URL}/cliente/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch client with id: ${id}`);
    }
    return response.json();
};

export const cadastrarCliente = async (cliente: Object) => {
    const response = await fetch(`${BASE_URL}/cliente/cadastrar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
    });
    if (!response.ok) {
        throw new Error("Failed to create client");
    }
    return response.json();
};

export const excluirCliente = async (id: string) => {
    const response = await fetch(`${BASE_URL}/cliente/excluir`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
    });
    if (!response.ok) {
        throw new Error(`Failed to delete client with id: ${id}`);
    }
    return response.json();
};

export const atualizarCliente = async (cliente: Object) => {
    const response = await fetch(`${BASE_URL}/cliente/atualizar`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
    });
    if (!response.ok) {
        throw new Error("Failed to update client");
    }
    return response.json();
};
