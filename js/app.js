function girisYap() {
  const sifre = document.getElementById('sifreKutusu');
  const mesaj = document.getElementById('mesajAlani');
  const menu = document.getElementById('gizliMenu');

  if (!sifre || !mesaj || !menu) {
    return;
  }

  if (sifre.value.trim() === '2025') {
    mesaj.textContent = 'Giriş başarılı! Ana kontrol menüsü açıldı.';
    mesaj.style.color = '#7af7c5';
    menu.style.display = 'block';
  } else {
    mesaj.textContent = 'HATALI KOD! Kaptan erişimi reddedildi.';
    mesaj.style.color = '#ff9999';
    menu.style.display = 'none';
  }
}

function kalkanYonet(komut) {
  const kutu = document.getElementById('kalkanDurumu');

  if (!kutu) {
    return;
  }

  if (komut === 'ac') {
    kutu.textContent = 'KALKANLAR AKTİF';
    kutu.classList.remove('kirmizi');
    kutu.classList.add('yesil');
  } else if (komut === 'kapat') {
    kutu.textContent = 'KALKANLAR DEVRE DIŞI';
    kutu.classList.remove('yesil');
    kutu.classList.add('kirmizi');
  }
}

function oksijenHesapla() {
  const secim = document.getElementById('rutbeSecim');
  const sonucAlani = document.getElementById('sonucAlani');

  if (!secim || !sonucAlani) {
    return;
  }

  let sonuc = 0;

  switch (secim.value) {
    case 'kaptan':
      sonuc = 12 * 7.5;
      sonucAlani.textContent = 'Kaptan: 12 saatlik görev için 90 L oksijen gerekiyor.';
      break;
    case 'muhendis':
      sonuc = 10 * 6.5;
      sonucAlani.textContent = 'Mühendis: 10 saatlik görev için 65 L oksijen gerekiyor.';
      break;
    case 'bilim':
      sonuc = 9 * 5.5;
      sonucAlani.textContent = 'Bilim insanı: 9 saatlik görev için 49.5 L oksijen gerekiyor.';
      break;
    default:
      sonucAlani.textContent = 'Geçersiz rütbe seçimi.';
      return;
  }

  console.log('Oksijen hesaplaması: ' + sonuc + ' L');
}
