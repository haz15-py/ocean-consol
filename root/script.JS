document.addEventListener("DOMContentLoaded", function() {
    // إضافة فقاعات بشكل ديناميكي أكثر
    const bubbleContainer = document.querySelector(".bubbles");
    const createBubbles = () => {
        for (let i = 0; i < 20; i++) {  // زيادة عدد الفقاعات
            const bubble = document.createElement("span");
            const size = Math.random() * 40 + 20; // حجم الفقاعات بين 20px و 60px
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;  // مدة الحركة عشوائية بين 5 إلى 10 ثواني
            bubble.style.animationDelay = `${Math.random() * 3}s`;  // تأخير عشوائي بين 0 إلى 3 ثواني
            bubbleContainer.appendChild(bubble);
        }
    };

    // تنفيذ الفقاعات
    createBubbles();

    // إضافة حركة الشعب المرجانية
    const coralContainer = document.createElement("div");
    coralContainer.classList.add("corals");
    coralContainer.innerHTML = `<img src="coral.png" alt="شعب مرجانية">`; // تأكد من أن لديك صورة الشعب المرجانية
    document.body.appendChild(coralContainer);

    // التعامل مع الأزرار الانتقالية
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetPage = link.getAttribute("data-target");

            // الانتقال إلى الصفحة الفعلية
            window.location.href = targetPage;
        });
    });

    // تحسين تأثيرات الأزرار
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.style.transform = "scale(1.05)";
        });
        button.addEventListener("mouseout", function() {
            button.style.transform = "scale(1)";
        });
    });
});
