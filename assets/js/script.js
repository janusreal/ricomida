function enviaMsg() {
    alert("Email enviado con éxito");
}

$("#email").on("click", enviaMsg)

$('#title1').on('dblclick', function () {
    $('#title1').toggleClass('text-danger')
});

$('#title2').on('dblclick', function () {
    $('#title2').toggleClass('text-danger')
});

$('.card-title').on('click', function () {
    $('.card-text').toggle('d-none')
})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))