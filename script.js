const passwordInput = document.getElementById('password');
        const generateButton = document.querySelector('button');
        const copyIcon = document.querySelector('.display img');

        generateButton.addEventListener('click', () => {
            const length = 12;
            const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let password = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                password += charset[randomIndex];
            }
            passwordInput.value = password;
        });

        copyIcon.addEventListener('click', () => {
            navigator.clipboard.writeText(passwordInput.value)
                .then(() => {
                    alert("Password copied to clipboard!");
                })
                .catch(err => {
                    console.error("Failed to copy: ", err);
                });
        });