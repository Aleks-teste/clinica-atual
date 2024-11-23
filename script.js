document.addEventListener('DOMContentLoaded', function () {
    // Função para alternar a exibição das seções
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    // Função para carregar os produtos dinamicamente
    function loadProducts() {
        const productsContainer = document.getElementById('products-container');

        const products = [
            { name: "Cadeira de Descanso", image: "imagens/cadeira.jpg", description: "Conforto para o seu dia." },
            { name: "Fitoterápicos", image: "imagens/fitoterápicos.jpg", description: "Produtos naturais para saúde." },
            { name: "Relógios Médicos", image: "imagens/relógio.jpg", description: "Praticidade e controle." },
            { name: "Pacotes de Passeios", image: "imagens/passeios.jpg", description: "Atividades externas para lazer." }
        ];

        // Limpar o container antes de adicionar os produtos
        productsContainer.innerHTML = '';

        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
            `;

            productsContainer.appendChild(productItem);
        });
    }

    // Carregar os produtos
    loadProducts();

    // Adicionar funcionalidade de navegação para o menu hamburguer
    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.addEventListener('click', () => {
        document.querySelector('nav ul').classList.toggle('show');
    });
});

