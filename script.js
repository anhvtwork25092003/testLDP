document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Thay YOUR_SCRIPT_URL bằng URL từ Google Apps Script
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbydMqA4yK1O1uwFwp09cUFR-0G5WYkPAwRrpzaUQdY2uIglMpf8EFDsGRHOwGsuvRNN/exec"; // Ví dụ: https://script.google.com/macros/s/your-script-id/exec

    console.log("Sending data:", data); // Debug: Xem dữ liệu gửi đi

    fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors", // Thêm mode no-cors để tránh lỗi CORS (lưu ý: sẽ không nhận được response chi tiết)
    })
      .then(() => {
        // Vì dùng mode: 'no-cors', không thể đọc response, nên giả định thành công
        alert("Thông tin đã được gửi thành công!");
        form.reset();
      })
      .catch((error) => {
        console.error("Fetch error:", error); // Debug: Xem lỗi chi tiết
        alert("Có lỗi xảy ra: " + error.message);
      });
  });
