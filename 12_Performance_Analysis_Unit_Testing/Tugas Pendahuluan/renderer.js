function cekTanda() {
  const input = document.getElementById('inputAngka').value;
  const hasil = window.api.cariTandaBilangan(input);
  document.getElementById('hasil').innerText = hasil;
}
