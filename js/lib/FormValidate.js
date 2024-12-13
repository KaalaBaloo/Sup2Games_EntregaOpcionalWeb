const telefono = document.getElementById('telefono')

formulario.addEventListener('submit', (e) => {
    let messages = []
    if (telefono.value === '' || telefono.value == null){
        messages.push('Introduce tu número de teléfono')
    }
    e.preventDefault()

} )