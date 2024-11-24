// Đặt ngày Tết là 29/01/2025
const tetDate = new Date("2025-01-29T00:00:00");

// Cập nhật đếm ngược mỗi giây
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const timeRemaining = tetDate - now; // Thời gian còn lại (miligiây)

  // Kiểm tra nếu thời gian còn lại nhỏ hơn hoặc bằng 0, nghĩa là Tết đã đến
  if (timeRemaining <= 0) {
    countdown.innerHTML = "Tết đã đến rồi!";
  } else {
    // Tính toán số ngày, giờ, phút, giây
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }
}

// Cập nhật đếm ngược mỗi giây
setInterval(updateCountdown, 1000);

// Gọi hàm ban đầu khi tải trang
updateCountdown();
