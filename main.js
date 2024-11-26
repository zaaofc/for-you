setInterval(rang,0)
var page = '0' 
function rang(){
var range_value = document.getElementById('love_range').value;
  document.getElementById('txt_range').innerText = range_value + '%'
    if(kick == '1'){
        alert('Alasan Kamu Nggak Marah Sama Aku ?')
        kick = '0'
        var msg = prompt('Alasan Kamu')
        alert('Alasannya kirim ke aku yaa.. jangan membuat aku penasaran..')
        alert('jangan Pernah berbohong meskipun hanya untuk melindungi perasaan aku :)')
        window.location.href = 'https://wa.me/?text=' + msg;
    }
    if(kick == '2'){
        alert('Yahh Kok Masih Marah Sih :(')
        kick = '0'
        var msg = prompt('Alasan Kamu')
        alert('Alasannya Kirim Ke Aku Yaa.. jangan membuat aku penasaran..')
        alert('jangan Pernah berbohong meskipun hanya untuk melindungi perasaan aku :)')
        window.location.href = 'https://wa.me/?text='
    }
    if(kick == '3'){
        alert('Yahh Kok Nggak Sih :(')
        kick = '0'
        var msg = prompt('Alasan Kamu')
        alert('Alasannya Kirim Ke Aku Yaa.. jangan membuat aku penasaran..')
        alert('jangan Pernah berbohong meskipun hanya untuk melindungi perasaan aku :)')
        window.location.href = 'https://wa.me/?text=' + msg;
    }
}

var kick = '0'

function no(){
 document.querySelector('.slash').style.animation = 'side_dark1 0.5s'
    setTimeout(move,10);
    kick ++
}

function yes(){
document.querySelector('.slash').style.animation = 'side_dark1 0.5s'
    setTimeout(move,10);
    page ++
document.querySelector('.slash').style.animation = 'side_dark1 0.5s'
    setTimeout(move,10);
}

function next_page(){
document.querySelector('.slash').style.animation = 'side_dark 0.5s'
    page ++
    setTimeout(move,10);
}
function move(){
    if(page == '1'){
        document.getElementById('panda--image').src = 'cute-panda.gif'
        document.getElementById('message').innerText = 'Hai Giaa, Ada sesuatu nih buat kamu tapi maaf yaa kalo kurang bagus, Dan semoga kamu suka yaa, Selamat membaca...'
        document.getElementById('next_btn').style.display = 'none'
        document.getElementById('yes').style.display = 'block'
        document.getElementById('no').style.display = 'block'
    }
    if(page == '2'){
        document.getElementById('panda--image').src = 'cute-panda.gif'
        document.getElementById('message').innerText = 'Meski aku bukan orang pertama, kedua, dan ketiga dalam hatimu, aku harap bisa menjadi yang terakhir dalam hati dan hidupmu'
        document.getElementById('next_btn').style.display = 'block'
        document.getElementById('yes').style.display = 'none'
    }
    if(page == '3'){
        document.getElementById('panda--image').src = 'tkthao219-bubududu.gif'
        document.getElementById('message').innerText = 'Semoga dengan adanya ucapan ini aku bisa meluapkan rasa sayang ku ke kamu'
       document.getElementById('love_range').style.display = 'none'
        document.getElementById('next_btn').style.display = 'block'
        document.getElementById('yes').style.display = 'none'
        document.getElementById('txt_range').style.display = 'none'
    }
    if(page == '4'){
        document.getElementById('panda--image').src = 'dudububu-kiss.gif'
        document.getElementById('message').innerText = 'Aku tahu hidup ini memiliki rasa sakit dan masalah. Namun, saat aku bersamamu, aku melupakan semua pengalaman buruk itu. Aku ingin berjalan denganmu di pantai memegang tanganmu. Aku ingin menjalani kehidupan bak dongeng bersamamu. Aku cuma ingin kamu selalu ada di sisiku."'
       document.getElementById('love_range').style.display = 'none'
        document.getElementById('next_btn').style.display = 'none'
        document.getElementById('yes').style.display = 'block'
        document.getElementById('txt_range').style.display = 'none'
    }
    if(page == '5'){
        document.getElementById('panda--image').src = 'frog-run.gif'
        document.getElementById('message').innerText = 'Makasi buat kamu yang mau menerima aku apa adannya..'
        document.getElementById('next_btn').style.display = 'none'
        document.getElementById('yes').style.display = 'none'
        document.getElementById('msg').style.display = 'block'
}
}
