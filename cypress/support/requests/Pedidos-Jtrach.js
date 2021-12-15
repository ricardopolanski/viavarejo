/// <reference types="cypress"/>

function getPedidos(idPedido){
    return cy.request({
        
        method: 'GET', 
        url: `http://atendimento-api.cnova.net/pedidos/{IdPedido}?idPedido=${idPedido}`,
        failOnStatusCode: false, // não retorna erro se retornar status diferente de 200
        headers: {
            'Accept': 'application/json',
            'Authorization': 'yv4YaUbopwKJXvffWy8uH3uZduYuxb6a/1kCV7W0YueD7OWOyK6oFR9SwbJKRb7+lmOXMuzipIhpaqbV9xmupkcd5lK+yjIYU5p3BTvUXuhEzO9S52CUe0Sd9MxZd0TI',
            'X-SecurityAccess': 'External',
            'X-UnidadesNegocio': '1',
        },
    })
}

export { getPedidos }