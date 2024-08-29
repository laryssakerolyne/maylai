document.addEventListener('DOMContentLoaded', function() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetContainer = document.getElementById('alphabet');
    let index = 0;

    function typeLetter() {
        if (index < alphabet.length) {
            alphabetContainer.textContent += alphabet[index];
            index++;
            setTimeout(typeLetter, 100); // Ajuste o tempo para alterar a velocidade de digitação
        }
    }

    typeLetter();
});
