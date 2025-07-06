window.addEventListener("DOMContentLoaded", () => {
    const skillElement = document.getElementById("skill");
    const messages = ["I am student", "Engineer Backend"];
    let index = 0;

    function typeMessage(text, callback) {
        let charIndex = 0;
        skillElement.textContent = "";

        const typing = setInterval(() => {
            skillElement.textContent += text[charIndex];
            charIndex++;

            if (charIndex === text.length) {
                clearInterval(typing);
                setTimeout(callback, 2000); // chờ 2s rồi đổi text
            }
        }, 100); // tốc độ gõ từng ký tự
    }

    function cycleMessages() {
        typeMessage(messages[index], () => {
            index = (index + 1) % messages.length;
            cycleMessages();
        });
    }

    cycleMessages();
});
