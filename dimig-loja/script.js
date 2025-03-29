// Função para pesquisa de produtos
function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    let found = false;

    products.forEach(function(product) {
        const productName = product.querySelector('p').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
            found = true;
        } else {
            product.style.display = 'none';
        }
    });

    // Mostrar a mensagem de produto indisponível
    const noResultsMessage = document.getElementById('noResultsMessage');
    if (!found && searchTerm.length > 0) {
        if (!noResultsMessage) {
            const message = document.createElement('div');
            message.id = 'noResultsMessage';
            message.textContent = 'Produto Indisponível';
            document.querySelector('main').appendChild(message);
        }
    } else {
        if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }
}
