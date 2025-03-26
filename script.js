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
      "https://script.google.com/macros/s/AKfycbylQHNxdfV6nQ-d3j-MSZ6KDcI_NXsHrpPAYdto1NPOn9QVgc3iL0DiqajYDcnyCu1w/exec";

    fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "success") {
          alert("Thông tin đã được gửi thành công!");
          form.reset();
        } else {
          alert("Có lỗi xảy ra: " + result.message);
        }
      })
      .catch((error) => {
        alert("Có lỗi xảy ra: " + error.message);
      });
  });
