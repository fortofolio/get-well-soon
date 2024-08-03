let cardAll = document.querySelectorAll('.card');
let greeting = document.getElementById('greeting');


cardAll.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.add('active');
    });
});

// Ambil URL saat ini
const url = new URL(window.location.href);

// Ambil parameter dari URL
const params = new URLSearchParams(url.search);

// Ambil nilai dari parameter 'name'
const name = params.get('name');

console.log(name);

if (name == null) {
    greeting.innerHTML = `Hallo`;
} else {
    greeting.innerHTML = `Hallo ${name} <i class="em em-upside_down_face" aria-role="presentation" aria-label="UPSIDE-DOWN FACE"></i>`;    
}

;