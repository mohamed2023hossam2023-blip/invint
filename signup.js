document.getElementById('signupForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      try {
        const response = await fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        });

        if (!response.ok) {
          throw new Error('Server not responding');
        }

        const data = await response.json();
        alert('✅ Account created successfully!');
        console.log(data);
      } catch (error) {
        alert('⚠️ No server connection. Please check your backend.');
        console.error(error);
      }
    });