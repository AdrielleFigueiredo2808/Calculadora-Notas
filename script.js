// Função para verificar se o número inserido está dentro do limite
function verificanumber() {
    const inputs = document.querySelectorAll('input[type="number"]');
    let alerta = document.getElementById('alerta');
    
    inputs.forEach(input => {
        if (input.value < 0 || input.value > 10) {
            alerta.textContent = 'As notas devem estar entre 0 e 10!';
        } else {
            alerta.textContent = '';
        }
    });
}

// Função para calcular a média e exibir resultados
document.getElementById('enviar').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    // Coletando as notas
    let nota1 = parseFloat(document.getElementById('cxnota1').value);
    let nota2 = parseFloat(document.getElementById('cxnota2').value);
    let nota3 = parseFloat(document.getElementById('cxnota3').value);
    let nota4 = parseFloat(document.getElementById('cxnota4').value);
    let nota5 = parseFloat(document.getElementById('cxnota5').value);
    let nota6 = parseFloat(document.getElementById('cxnota6').value);
    let nota7 = parseFloat(document.getElementById('cxnota7').value);
    let nota8 = parseFloat(document.getElementById('cxnota8').value);

    // Calculando a média e a nota final
    let media = ((nota1 + nota3 + nota5 + nota7) / 4).toFixed(1);
    let notaFinal = ((nota2 + nota4 + nota6 + nota8) / 4).toFixed(1);
    
    // Exibindo a média e a nota final
    document.getElementById('media').textContent = `Média: ${media}`;
    document.getElementById('notaFinal').textContent = `Nota Final: ${notaFinal}`;
    
    // Verificando o status de aprovação
    let status;
    if (media >= 6.5 && notaFinal >= 6.5) { // Ajuste para 6.5
        status = 'Aprovado';
        document.getElementById('status').style.color = 'green';
    } else {
        status = 'Reprovado';
        document.getElementById('status').style.color = 'red';
    }
    
    // Exibindo o status de aprovação
    document.getElementById('status').textContent = `Status: ${status}`;
});











