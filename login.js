document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
          throw new Error('Server not responding');
        }

        const data = await response.json();
        alert('✅ Logged in successfully!');
        console.log(data);
      } catch (error) {
        alert('⚠️ No server connection. Please check your backend.');
        console.error(error);
      }
    });