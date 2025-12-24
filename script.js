// For future interactivity
console.log("Portfolio Loaded Successfully");

function showEdu(id) {
  // Hide all education boxes
  document.querySelectorAll('.edu-box').forEach(box => {
    box.classList.add('hidden');
  });

  // Remove active class from all buttons
  document.querySelectorAll('.edu-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected education
  document.getElementById(id).classList.remove('hidden');

  // Activate clicked button
  event.target.classList.add('active');
}


