// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Animation Section
function animateCanvas() {
    const canvas = document.getElementById('my_canvas');
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        let x = 0;
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'blue';
            ctx.fillRect(x, 100, 50, 50);
            x = (x + 2) % canvas.width; // Move rectangle across the canvas
            requestAnimationFrame(draw);
        }
        draw();
    }
}
animateCanvas();

// Reservation Form Submission (API Integration)
document.getElementById('reservationForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!enhanceFormValidation()) {
        alert('Lütfen zorunlu alanları doldurun!');
        return; 
    }

    const formData = new FormData(event.target);
    const reservationData = {
        date: formData.get('booking_date'),
        people: formData.get('booking_people'),
        location: formData.get('booking_location'),
        tableSize: formData.get('size'),
        area: formData.get('location'),
    };

    // Simulate table availability (e.g., if table size is 4 and it's fully booked)
    const isTableAvailable = reservationData.tableSize !== "4"; // Simulate table availability logic
    if (!isTableAvailable) {
        alert("Sorry, the table you selected is fully booked. Please choose another table size.");
        return; // Prevent further processing if table is unavailable
    }

    try {
        const response = await fetch('https://api.example.com/reservations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reservationData),
        });

        if (response.ok) {
            document.getElementById('apiResponseMessage').innerText = 'Reservation successfully submitted!';
        } else {
            document.getElementById('apiResponseMessage').innerText = 'Failed to submit reservation.';
        }
        document.getElementById('apiResponseMessage').classList.remove('hidden');
    } catch (error) {
        console.error('Error:', error);
    }
});


function enhanceFormValidation() {
    const form = document.getElementById('reservationForm');
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let valid = true;


    inputs.forEach((input) => {
        const label = input.previousElementSibling; 
        if (!input.value.trim() && input.type !== "radio") {
            input.style.border = '2px solid red';
            if (label && label.querySelector('.required')) {
                label.querySelector('.required').style.color = 'red'; 
            }
            valid = false;
        } else if (input.type === "radio" && !form.querySelector('input[name="size"]:checked')) {
            valid = false;
            const radios = form.querySelectorAll('input[name="size"]');
            radios.forEach((radio) => {
                radio.style.border = '2px solid red'; 
            });
        } else {
            input.style.border = ''; 
            if (label && label.querySelector('.required')) {
                label.querySelector('.required').style.color = ''; 
            }
        }
    });

    return valid;
}

let totalPrice = 0; 
const orderList = document.getElementById('order-list');
const totalPriceElement = document.getElementById('total-price');

document.querySelectorAll('.add-to-order').forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseFloat(this.getAttribute('data-price'));
        const status = this.getAttribute('data-status');

        if (status === "Mevcut") {
            const listItem = document.createElement('li');
            listItem.textContent = `${name} - ${price} TL`;
            orderList.appendChild(listItem);

            totalPrice += price;
            totalPriceElement.textContent = `Toplam Fiyat: ${totalPrice} TL`;
        }
    });
});

document.getElementById('checkout-btn').addEventListener('click', function() {
    const selectedPaymentMethod = document.querySelector('input[name="payment"]:checked');

    if (!selectedPaymentMethod) {
        alert('Lütfen bir ödeme yöntemi seçin.');
        return;
    }

    const paymentMethod = selectedPaymentMethod.value;

    if (paymentMethod === 'kart') {
        window.location.href = 'payment-card.html'; 
    } else {
        alert('Kapıda ödeme seçtiniz. Siparişiniz hazırlanıyor.');
    }
});

document.getElementById('payment-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ödeme başarıyla tamamlandı!');
    window.location.href = 'index.html'; // Ödeme tamamlandıktan sonra ana sayfaya dön
});

// Add smooth scrolling for "Read More" links (optional)
const readMoreLinks = document.querySelectorAll('.read-more');
readMoreLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Read more functionality will be added here!');
    });
});
