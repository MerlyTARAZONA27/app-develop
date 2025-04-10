document.getElementById("formLogin").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("Password1").value;

    let message = ''
    let alerType = ''
    if (email === '' || password === '') {
        alerType = 'warning'
        message = 'Por favor contesta todos los campos'
    }
    else if (email === 'mytarazonas@ufpso.edu.co' && password === '123456') {
        alerType = 'success';
        message = 'Inicio de sesión exitosa';

    }
    else {
        alerType = 'danger';
        message = 'correo o contraseña incorrectos.';

    }
    let alert = `
     <div class="alert alert-${alerType} alert-dismissible fade show" role="alert">
         ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
     `;
    document.getElementById('alert').innerHTML = alert;
})