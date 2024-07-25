const messages = [
    "Kau tau tidak? kamu itu.. hujan lebat yang selalu ku tunggu.",
    "Hujan yang tak pernah sedikitpun ku sesali datangnya.",
    "Hujan yang berteduhpun aku tak mau.",
    "Mendapatkan hatimu adalah kebahagiaanku.",
    "Memilikimu adalah pilihan ku yang selalu ku syukuri.",
    "Dengan segala hal yang kau punya, kau itu sempurna dimataku.",
    "Seperti matahari yang selalu menyinari bumi dikala siang hari.",
    "Dan bulan yang melengkapinya dimalam yang penuh dengan kesunyian.",
    "Kamu adalah bintang terang di malam yang gelap.",
    "Bintang yang selalu menjadi pelengkap dari indahnya langit malam.",
    "Babe... I just wanna say something for you..",
    "Maafkan aku yang belum bisa melengkapi kesempurnaanmu.",
    "Belum bisa menjadi indahnya pelangi hujan mu.",
    "Belum bisa menjadi seperti lelaki yang kau mau.",
    "Tapi selama jantungku masih berdetak, aku akan selalu berusaha.",
    "Menjadi rumah yang selalu kau jadikan tempat untukmu pulang.",
    "Menjadi sahabat yang kau jadikan tempat cerita.",
    "Menjadi sosok ayah yang selalu menjaga buah hati kecilnya.",
    "Menjadi ibu yang selalu memeluk erat anaknya.",
    "Kamu sepertinya tau, bahwa tempat pulang seorang lelaki hanya pasangannya saja.",
    "Walau lelaki mempunyai banyak teman dan sahabat untuk dia cerita.",
    "Punya hobi yang dapat mereka lakukan untuk menghilangkan masalahnya sejenak.",
    "Tetapi hanya dipasangannya seorang lelaki bisa menjadi dirinya sendiri.",
    "So.. please dont leave me if i make some mistake.",
    "Ajari aku menjadi seperti yang kau mau.",
    "Makasih udah baca isi hati yang tidak dapat ku sampaikan langsung dihadapanmu.",
    "Makasih karena mau menerima dan menemani lelaki yang sedang berproses ini.",
    "kalo kamu baca ini sampai selesai, dan kamu nangis lagi.",
    "Air matanya dihapus yah sayang, ngak boleh nangis.",
    "Kamu adalah wanita yang kuat, and i proud of you babe.",
    "apapun yang kau lakukan, ingat sekali lagi,I ALWAYS PROUD OF YOU.",
    "segala kegagalan yang kamu lakukan sekarang, tidak menjadikanmu seorang pecundang",
    "kamu hanya butuh waktu, waktu untuk buktikan segala mimpimu.",
    "So, apapun yang ingin kau lakukan, JUST DO IT BABE.",
    "Aku mau kamu ingat bahwa kamu tidak sendiri.",
    "I'M ALWAYS HERE FOR YOU.",
    "I LOVE YOU MORE THEN U KNOW BABE."
];

const backgrounds = [
    "url('img/1.jpg')",
    "url('img/2.jpg')",
    "url('img/3.jpg')",
    "url('img/5.jpg')",
    "url('img/6.jpg')",
    "url('img/7.jpg')",
    "url('img/8.jpg')",
    "url('img/9.jpg')",
];

let currentMessageIndex = 0;

function showMessage() {
    const messageElement = document.getElementById('message');

    messageElement.classList.remove('fade-in');
    messageElement.classList.add('fade-out');

    setTimeout(() => {
        messageElement.innerText = messages[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        messageElement.classList.remove('fade-out');
        messageElement.classList.add('fade-in');
    }, 1000);
}
