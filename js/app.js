function showNotification() {
	// Simulate email subscription
	const btn = document.querySelector('.notify-btn');
	const originalText = btn.innerHTML;

	btn.innerHTML = '✅ ¡Te notificaremos!';
	btn.style.background = 'linear-gradient(45deg, #00b894, #00cec9)';

	setTimeout(() => {
		btn.innerHTML = originalText;
		btn.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
	}, 3000);

	// You can integrate with your email service here
	console.log('User subscribed to notifications');
}

// Add some dynamic interaction
document.addEventListener('DOMContentLoaded', function () {
	// Random floating elements positioning
	const floatingElements = document.querySelectorAll('.floating-element');
	floatingElements.forEach((element, index) => {
		element.style.left = Math.random() * 90 + '%';
		element.style.animationDelay = Math.random() * 20 + 's';
	});

	// Progress bar animation on scroll
	const progressBar = document.querySelector('.progress-fill');
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				progressBar.style.animation = 'progressFill 2s ease-out';
			}
		});
	});

	observer.observe(document.querySelector('.progress-container'));
});

// Easter egg: Konami code
let konamiCode = [];
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function (e) {
	konamiCode.push(e.keyCode);
	if (konamiCode.length > konami.length) {
		konamiCode.shift();
	}

	if (konamiCode.toString() === konami.toString()) {
		document.body.style.animation = 'rainbow 2s infinite';
		setTimeout(() => {
			document.body.style.animation = '';
		}, 4000);
	}
});

// Rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
document.head.appendChild(style);
