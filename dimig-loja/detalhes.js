window.onload = function() {
    var productId = new URLSearchParams(window.location.search).get('id');
    var product = getProductById(productId);
    
    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-img').src = product.img;
    }
};

function getProductById(id) {
    const products = [
        { id: 1, name: "Nike Drifit", description: "Camiseta esportiva para alta performance.", img: "imagens/drifit.jpg" },
        { id: 2, name: "Tracksuit", description: "Conjunto completo para treino.", img: "imagens/trcksuit.jpg" },
        { id: 3, name: "Atletics", description: "Tênis esportivo para alta performance.", img: "imagens/atletics.jpg" },
        { id: 4, name: "Bolsa de Couro", description: "Elegante bolsa de couro.", img: "imagens/produto4.jpg" }
    ];

    return products.find(product => product.id == id);
}
