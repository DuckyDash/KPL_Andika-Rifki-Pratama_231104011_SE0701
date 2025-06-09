import readline from 'readline';
import { loadUsers, saveUsers } from './data.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function validateUsername(username) {
  const asciiRegex = /^[A-Za-z]+$/;
  return asciiRegex.test(username) && username.length >= 3 && username.length <= 20;
}

function validatePassword(password, username) {
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*]/.test(password);
  const isLongEnough = password.length >= 8 && password.length <= 20;
  const containsUsername = password.toLowerCase().includes(username.toLowerCase());

  return hasNumber && hasSymbol && isLongEnough && !containsUsername;
}

function register() {
  rl.question('Masukkan username: ', (username) => {
    if (!validateUsername(username)) {
      console.log('Username harus 3-20 karakter alfabet ASCII.');
      return rl.close();
    }

    const users = loadUsers();
    if (users.find(u => u.username === username)) {
      console.log('Username sudah terdaftar.');
      return rl.close();
    }

    rl.question('Masukkan password: ', (password) => {
      if (!validatePassword(password, username)) {
        console.log('Password harus 8-20 karakter, mengandung angka, simbol (!@#$%^&*), dan tidak boleh mengandung username.');
        return rl.close();
      }

      users.push({ username, password });
      saveUsers(users);
      console.log('Registrasi berhasil.');
      rl.close();
    });
  });
}

function login() {
  rl.question('Username: ', (username) => {
    rl.question('Password: ', (password) => {
      const users = loadUsers();
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        console.log(`Login berhasil. Selamat datang, ${username}.`);
      } else {
        console.log('Login gagal. Username atau password salah.');
      }
      rl.close();
    });
  });
}

rl.question('Ketik "register" untuk registrasi atau "login" untuk masuk: ', (choice) => {
  if (choice === 'register') {
    register();
  } else if (choice === 'login') {
    login();
  } else {
    console.log('Perintah tidak dikenali.');
    rl.close();
  }
});
