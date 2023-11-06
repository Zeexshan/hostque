 let data = ['Enter Username', 'Enter Password', 'Enter Mobile Number','Enter Email Address', 'Enter your profession',' '];
    let datase = [];
    var i = 0;
    function show() {
    document.getElementById('log').innerText = data[i];
    var inputField = document.getElementById('data');
    let inputValue = inputField.value;

    if (inputValue === '') {
        alert('Please fill in the input field before submitting.');
        return;
    }

    var emailR = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (i === 3 && !emailR.test(inputValue)) {
        alert('Please enter a valid email address.');
        return;
    }

    datase.push(inputValue);

    if (i < data.length - 1) {
        i++;
        document.getElementById('log').innerText = data[i];
    }

    if (i === 0) {
        inputField.type = 'text';
        name = inputValue;
    } else if (i === 1) {
        inputField.type = 'password';
        pass = inputValue;
    } else if (i === 2) {
        inputField.type = 'number';
    } else if (i === 3) {
        inputField.type = 'email';
    }
     else if (i === 4) {
        inputField.type = 'email';
    }

    if (i === 5) {
        document.getElementById('box').style.display = 'none';
        document.getElementById('dash').style.display = '';
        localStorage.setItem('datase', JSON.stringify(datase));
    }
    
    inputField.value = '';
    console.log(datase);
    var passd = datase[1];
    console.log(passd);
}


function logg() {
    var datase = JSON.parse(localStorage.getItem('datase'));
    var name = datase[0];
    var pass = datase[1];
    var username = document.getElementById('usern');
    var userna = username.value;
    var userpass = document.getElementById('userpa');
    var userpa = userpass.value;
    console.log(datase)
    if (userna === name && userpa === pass) {
        window.location.href = 'dash.html';
    } else {

        document.getElementById('box').style.display = 'none';
        document.getElementById('cp').style.display = '';
    }
}
