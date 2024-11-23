document.addEventListener('DOMContentLoaded', function () {
    // Função para alternar a exibição das seções
    function showSection(sectionId) {
        // Remove a classe 'active' de todas as seções
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Adiciona a classe 'active' apenas à seção solicitada
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    // Adicionar listeners de evento para as opções de navegação
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Previne o comportamento padrão de links
            event.preventDefault();

            // Obtenha o ID da seção a ser exibida a partir do atributo 'onclick'
            const targetSectionId = link.getAttribute('onclick').match(/showSection\('([^']+)'\)/)[1];
            showSection(targetSectionId);
        });
    });

    // Definir a seção inicial como 'home'
    showSection('home');
});
