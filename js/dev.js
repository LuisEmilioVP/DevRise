// toggle the visibility of ecosystem content
function toggleEcosystem(ecosystemNum) {
	const content = document.getElementById(`content${ecosystemNum}`);
	const icon = document.getElementById(`toggle${ecosystemNum}`);

	if (content.classList.contains('active')) {
		content.classList.remove('active');
		icon.classList.remove('rotated');
	} else {
		content.classList.add('active');
		icon.classList.add('rotated');
	}
}

function updateProgress() {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
	const percentage = Math.round((checkedBoxes.length / checkboxes.length) * 100);

	const progressFill = document.getElementById('overall-progress');
	const progressText = document.getElementById('progress-text');

	progressFill.style.width = percentage + '%';

	let message = `${percentage}% Completado`;
	if (percentage === 0) message += ' - ¡Comienza tu transformación!';
	else if (percentage < 20) message += ' - ¡Excelente inicio!';
	else if (percentage < 40) message += ' - ¡Progreso sólido!';
	else if (percentage < 60) message += ' - ¡A mitad de camino!';
	else if (percentage < 80) message += ' - ¡Casi empleable!';
	else if (percentage < 100) message += ' - ¡Listo para aplicar!';
	else message = '🎉 ¡Empleabilidad conseguida!';

	progressText.textContent = message;
}

// Auto-save progress to localStorage if available
function saveProgress() {
	try {
		const checkboxes = document.querySelectorAll('input[type="checkbox"]');
		const progress = Array.from(checkboxes).map((cb) => cb.checked);
		localStorage.setItem('programmingProgress', JSON.stringify(progress));
	} catch (e) {
		// LocalStorage not available, continue without saving
	}
}

function loadProgress() {
	try {
		const saved = localStorage.getItem('programmingProgress');
		if (saved) {
			const progress = JSON.parse(saved);
			const checkboxes = document.querySelectorAll('input[type="checkbox"]');
			progress.forEach((checked, index) => {
				if (checkboxes[index]) {
					checkboxes[index].checked = checked;
				}
			});
			updateProgress();
		}
	} catch (e) {
		// LocalStorage not available, continue without loading
	}
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function () {
	loadProgress();

	// Initialize with first ecosystem (English) open by default
	toggleEcosystem(1);

	document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
		checkbox.addEventListener('change', function () {
			updateProgress();
			saveProgress();
		});
	});
});
