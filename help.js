
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam) => {
return`━━━❲ X7-Fizz ❳━━━
┏━━━━━━━━━━━━━
┣━( 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢 )
┃▤ ID : @${sender.split('@')[0]}
┃▤ Nama : ${namenya}
┃▤ Premium : ${premnya}
┣━━━━━━━━━━━━━━
┣━( 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 )
┃▤ Library : Baileys-MD
┃▤ Time : ${jam} WIB
┃▤ Date : ${tanggal}
┃▤ Terdaftar : ${usernya}
┃▤ Room Chat : ${romnya}
┃▤ Total Fitur : 600+
┣━━━━━━━━━━━━━
┣━❲ 𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}menu
┃▢ ${prefix}iklan
┃▢ ${prefix}rules
┃▢ ${prefix}owner
┃▢ ${prefix}infobot
┃▢ ${prefix}donasi
┃▢ ${prefix}donate
┃▢ ${prefix}sewabot
┃▢ ${prefix}groupbot
┃▢ ${prefix}ownerinfo
┃▢ ${prefix}infoowner
┣━━━━━━━━━━━━━━
┣━❲ 𝙐𝙎𝙀𝙍 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}verify
┃▢ ${prefix}report
┃▢ ${prefix}request
┃▢ ${prefix}transfer
┃▢ ${prefix}menfess
┃▢ ${prefix}buatroom
┃▢ ${prefix}secretchat
┃▢ ${prefix}cekprem
┃▢ ${prefix}daftarprem
┃▢ ${prefix}changename
┣━━━━━━━━━━━━━━
┣━❲ 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}error
┃▢ ${prefix}clearerr
┃▢ ${prefix}siaran
┃▢ ${prefix}session
┃▢ ${prefix}resetdb
┃▢ ${prefix}runtime
┃▢ ${prefix}setexif
┃▢ ${prefix}setwm
┃▢ ${prefix}setfooter
┃▢ ${prefix}setapikey
┃▢ ${prefix}setppbot
┃▢ ${prefix}addprem
┃▢ ${prefix}delprem
┃▢ ${prefix}bc
┃▢ ${prefix}bctext
┃▢ ${prefix}bcvideo
┃▢ ${prefix}bcaudio
┃▢ ${prefix}bcimage
┃▢ ${prefix}broadcast
┣━━━━━━━━━━━━━━
┣━❲ 𝙎𝙏𝙊𝙍𝙀 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}kali 1 2
┃▢ ${prefix}bagi 1 2
┃▢ ${prefix}kurang 1 2
┃▢ ${prefix}tambah 1 2
┃▢ ${prefix}dellist key
┃▢ ${prefix}addlist key@response
┃▢ ${prefix}update key@response
┃▢ ${prefix}done <reply orderan>
┃▢ ${prefix}proses <reply orderan>
┃▢ ${prefix}list <only group>
┃▢ ${prefix}shop <only group>
┣━━━━━━━━━━━━━━
┣━❲ 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}fitnah
┃▢ ${prefix}delete
┃▢ ${prefix}revoke
┃▢ ${prefix}tagall
┃▢ ${prefix}hidetag
┃▢ ${prefix}setdesc
┃▢ ${prefix}linkgrup
┃▢ ${prefix}infogroup
┃▢ ${prefix}setppgrup
┃▢ ${prefix}setnamegrup
┃▢ ${prefix}group open
┃▢ ${prefix}group close
┃▢ ${prefix}antilink on
┃▢ ${prefix}antilink off
┃▢ ${prefix}welcome on
┃▢ ${prefix}welcome off
┃▢ ${prefix}tiktokauto on
┃▢ ${prefix}tiktokauto off
┃▢ ${prefix}kick @tag
┃▢ ${prefix}demote @tag
┃▢ ${prefix}promote @tag
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙐𝙏𝙊𝘿𝙀𝘾𝙏 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}sadcat
┃▢ ${prefix}translate
┃▢ ${prefix}stalkff
┃▢ ${prefix}stalknpm
┃▢ ${prefix}stalkgithub
┃▢ ${prefix}balikhuruf
┃▢ ${prefix}balikangka
┃▢ ${prefix}besarkecil
┃▢ ${prefix}bilangangka
┣━━━━━━━━━━━━━━
┣━❲ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}tiktok
┃▢ ${prefix}ytmp3
┃▢ ${prefix}ytmp4
┃▢ ${prefix}pinterest
┃▢ ${prefix}playmp3
┃▢ ${prefix}playmp4
┃▢ ${prefix}gitclone
┃▢ ${prefix}mediafire
┃▢ ${prefix}wikimedia
┃▢ ${prefix}soundcloud
┃▢ ${prefix}infogempa
┣━━━━━━━━━━━━━━
┣━❲ 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}tts
┃▢ ${prefix}ttp
┃▢ ${prefix}ttp2
┃▢ ${prefix}attp
┃▢ ${prefix}attp2
┃▢ ${prefix}tourl
┃▢ ${prefix}upload
┃▢ ${prefix}toimg
┃▢ ${prefix}toimage
┃▢ ${prefix}tomp3
┃▢ ${prefix}toaudio
┃▢ ${prefix}tomp4
┃▢ ${prefix}tovideo
┃▢ ${prefix}emojimix
┃▢ ${prefix}emojmix
┃▢ ${prefix}emojinua
┃▢ ${prefix}mixemoji
┃▢ ${prefix}stiker
┃▢ ${prefix}sticker
┃▢ ${prefix}sgif
┃▢ ${prefix}stikergif
┃▢ ${prefix}stickergif
┃▢ ${prefix}swm
┃▢ ${prefix}stikerwm
┃▢ ${prefix}stickerwm
┃▢ ${prefix}smeme
┃▢ ${prefix}memestiker
┃▢ ${prefix}stikermeme
┃▢ ${prefix}stickermeme
┃▢ ${prefix}takesticker
┃▢ ${prefix}emojinua2
┃▢ ${prefix}mixemoji2
┃▢ ${prefix}emojmix2
┃▢ ${prefix}emojimix2
┣━━━━━━━━━━━━━━
┣━❲ 𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}spamcall
┃▢ ${prefix}translate
┃▢ ${prefix}ssweb-pc
┃▢ ${prefix}ssweb-hp
┃▢ ${prefix}bitly_short
┃▢ ${prefix}cuttly_short
┃▢ ${prefix}tinyurl_short
┃▢ ${prefix}base32
┃▢ ${prefix}base64
┃▢ ${prefix}debase32
┃▢ ${prefix}debase64
┣━━━━━━━━━━━━━━
┣━❲ 𝘽𝙐𝙂𝙑𝙄𝙋 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}sendbug 628xxx
┃▢ ${prefix}philips 628xxx
┃▢ ${prefix}philips2 628xxx
┃▢ ${prefix}philips3 628xxx
┃▢ ${prefix}santet @tag
┃▢ ${prefix}santet2 @tag
┃▢ ${prefix}santet3 @tag
┃▢ ${prefix}virtex 628xxx
┃▢ ${prefix}virtex2 628xxx
┃▢ ${prefix}virtex3 628xxx
┃▢ ${prefix}bug1 628xxx
┃▢ ${prefix}bug2 628xxx
┃▢ ${prefix}bug3 628xxx
┃▢ ${prefix}bug4 628xxx
┃▢ ${prefix}bug5 628xxx
┣━━━━━━━━━━━━━━
┣━❲ 𝙍𝘼𝙉𝘿𝙊𝙈 𝘾𝙀𝙆 ❳
┃▢ ${prefix}cekjelek
┃▢ ${prefix}cekcantik
┃▢ ${prefix}cekganteng
┃▢ ${prefix}ceksad
┃▢ ${prefix}cekharam
┃▢ ${prefix}cekhalal
┃▢ ${prefix}cekbego
┃▢ ${prefix}cekanjing
┃▢ ${prefix}cekbiadab
┃▢ ${prefix}cekramah
┃▢ ${prefix}ceksatir
┃▢ ${prefix}cekmanis
┃▢ ${prefix}cekpahit
┃▢ ${prefix}cekhitam
┃▢ ${prefix}cekrasis
┃▢ ${prefix}cekbaik
┃▢ ${prefix}cekjahat
┃▢ ${prefix}cekkaya
┃▢ ${prefix}cekmiskin
┃▢ ${prefix}cekpintar
┃▢ ${prefix}cekbodoh
┃▢ ${prefix}cekimut
┃▢ ${prefix}cekkocak
┃▢ ${prefix}cekkadang
┣━━━━━━━━━━━━━━
┣━❲ 𝙎𝙀𝙍𝙏𝙄𝙁𝙄𝙆𝘼𝙏 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}toloserti <nama>
┃▢ ${prefix}badgirlserti <nama>
┃▢ ${prefix}goodgirlserti <nama>
┃▢ ${prefix}fuckgirlserti <nama>
┃▢ ${prefix}bucinserti <nama>
┃
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}buatroom 628xxx
┃▢ ${prefix}room <only owner>
┃▢ ${prefix}stopchat <only room>
┃▢ ${prefix}menfess 628xx|bot|hai
┣━━━━━━━━━━━━━━
┣━❲ 𝙎𝙊𝙎𝙈𝙀𝘿 𝙎𝙃𝙊𝙋 ❳
┃▢ ${prefix}pricelist <layanan>
┃▢ ${prefix}order <cara order>
┃▢ ${prefix}like jumlah|target
┃▢ ${prefix}view jumlah|target
┃▢ ${prefix}follower jumlah|username
┃▢ ${prefix}cekstatus <idtrx>
┃▢ ${prefix}komisi <owner only>
┃▢ ${prefix}tarikkomisi <owner only>
┣━━━━━━━━━━━━━━
┣━❲ 𝙑𝙊𝙆𝘼𝙇 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}hilih <text>
┃▢ ${prefix}halah <text>
┃▢ ${prefix}huluh <text>
┃▢ ${prefix}heleh <text>
┃▢ ${prefix}holoh <text>
┣━━━━━━━━━━━━━━
┣━❲ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}cecan
┃▢ ${prefix}cogan
┃▢ ${prefix}mobil
┃▢ ${prefix}islamic
┃▢ ${prefix}darkjokes
┃▢ ${prefix}boneka
┃▢ ${prefix}wallhp
┃▢ ${prefix}tatasurya
┃▢ ${prefix}programing
┣━━━━━━━━━━━━━━
┣━❲ 𝙋𝙍𝙄𝙈𝘽𝙊𝙉 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}ramaljodoh
┃▢ ${prefix}ramalanjodoh
┃▢ ${prefix}nomorhoki
┃▢ ${prefix}artimimpi
┃▢ ${prefix}artinama
┃▢ ${prefix}sifatusaha
┃▢ ${prefix}tafsirmimpi
┃▢ ${prefix}pasangan
┃▢ ${prefix}suamiistri
┃▢ ${prefix}ramalcinta
┃▢ ${prefix}ramalancinta
┃▢ ${prefix}ramaljodohbali
┃▢ ${prefix}ramalanjodohbali
┃▢ ${prefix}cocoknama
┃▢ ${prefix}kecocokannama
┃▢ ${prefix}cocokpasangan
┃▢ ${prefix}kecocokanpasangan
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙐𝘿𝙄𝙊 𝘾𝙃𝘼𝙉𝙂𝙀𝙍 ❳
┃▢ ${prefix}fat
┃▢ ${prefix}fast
┃▢ ${prefix}slow
┃▢ ${prefix}bass
┃▢ ${prefix}deep
┃▢ ${prefix}tupai
┃▢ ${prefix}robot
┃▢ ${prefix}blown
┃▢ ${prefix}smooth
┃▢ ${prefix}earrape
┃▢ ${prefix}reverse
┃▢ ${prefix}nightcore
┣━━━━━━━━━━━━━━
┣━❲ 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}gempa
┃▢ ${prefix}jadwaltv
┃▢ ${prefix}gempanow
┃▢ ${prefix}bioskopnow
┃▢ ${prefix}latintoaksara
┃▢ ${prefix}aksaratolatin
┣━━━━━━━━━━━━━━
┣━❲ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 ❳
┃▢ ${prefix}dadu
┃▢ ${prefix}anjing
┃▢ ${prefix}patrick
┃▢ ${prefix}bucinstick
┃▢ ${prefix}gawrgura
┃▢ ${prefix}amongus
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙐𝘿𝙄𝙊 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┃▢ ${prefix}audio${ad++}
┣━━━━━━━━━━━━━━
┣━❲ 𝙁𝙐𝙉 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}goblokcek 
┃▢ ${prefix}jelekcek 
┃▢ ${prefix}gaycek
┃▢ ${prefix}lesbicek
┃▢ ${prefix}gantengcek 
┃▢ ${prefix}cantikcek
┃▢ ${prefix}begocek 
┃▢ ${prefix}suhucek
┃▢ ${prefix}pintercek
┃▢ ${prefix}jagocek
┃▢ ${prefix}nolepcek
┃▢ ${prefix}babicek
┃▢ ${prefix}bebancek
┃▢ ${prefix}baikcek
┃▢ ${prefix}jahatcek
┃▢ ${prefix}anjingcek
┃▢ ${prefix}haramcek
┃▢ ${prefix}pakboycek
┃▢ ${prefix}pakgirlcek
┃▢ ${prefix}sangecek 
┃▢ ${prefix}bapercek
┃▢ ${prefix}fakboycek
┃▢ ${prefix}alimcek
┃▢ ${prefix}suhucek
┃▢ ${prefix}fakgirlcek
┃▢ ${prefix}kerencek
┃▢ ${prefix}wibucek
┣━━━━━━━━━━━━━━
┣━❲ 𝘾𝙀𝙍𝙋𝙀𝙉 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}cerpen-sejarah
┃▢ ${prefix}cerpen-sedih
┃▢ ${prefix}cerpen-sastra
┃▢ ${prefix}cerpen-romantis
┃▢ ${prefix}cerpen-rohani
┃▢ ${prefix}cerpen-rindu
┃▢ ${prefix}cerpen-remaja
┃▢ ${prefix}cerpen-ramadhan
┃▢ ${prefix}cerpen-petualangan
┃▢ ${prefix}cerpen-persahabatan
┃▢ ${prefix}cerpen-perpisahan
┃▢ ${prefix}cerpen-perjuangan
┃▢ ${prefix}cerpen-penyesalan
┃▢ ${prefix}cerpen-pengorbanan
┃▢ ${prefix}cerpen-pengalaman
┃▢ ${prefix}cerpen-pendidikan
┃▢ ${prefix}cerpen-penantian
┃▢ ${prefix}cerpen-patahhati
┃▢ ${prefix}cerpen-olahraga
┃▢ ${prefix}cerpen-nasionalisme
┃▢ ${prefix}cerpen-nasihat
┃▢ ${prefix}cerpen-motivasi
┃▢ ${prefix}cerpen-misteri
┃▢ ${prefix}cerpen-mengharukan
┃▢ ${prefix}cerpen-malaysia
┃▢ ${prefix}cerpen-liburan
┃▢ ${prefix}cerpen-kristen
┃▢ ${prefix}cerpen-korea
┃▢ ${prefix}cerpen-kisahnyata
┃▢ ${prefix}cerpen-keluarga
┃▢ ${prefix}cerpen-kehidupan
┃▢ ${prefix}cerpen-jepang
┃▢ ${prefix}cerpen-inspiratif
┃▢ ${prefix}cerpen-gokil
┃▢ ${prefix}cerpen-galau
┃▢ ${prefix}cerpen-cintasejati
┃▢ ${prefix}cerpen-cintasegitiga
┃▢ ${prefix}cerpen-cintasedih
┃▢ ${prefix}cerpen-cintaromantis
┃▢ ${prefix}cerpen-cintapertama
┃▢ ${prefix}cerpen-cintaislami
┃▢ ${prefix}cerpen-cinta
┃▢ ${prefix}cerpen-budaya
┃▢ ${prefix}cerpen-bahasasunda
┃▢ ${prefix}cerpen-bahasajawa
┃▢ ${prefix}cerpen-bahasainggris
┃▢ ${prefix}cerpen-bahasadaerah
┃▢ ${prefix}cerpen-anak
┣━━━━━━━━━━━━━━
┣━❲ 𝙉𝙎𝙁𝙒 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}yuri
┃▢ ${prefix}ero
┃▢ ${prefix}foot
┃▢ ${prefix}ass
┃▢ ${prefix}cuckold
┃▢ ${prefix}cum
┃▢ ${prefix}hentai
┃▢ ${prefix}gangbang
┃▢ ${prefix}femdom
┃▢ ${prefix}ahegao
┃▢ ${prefix}glasses
┃▢ ${prefix}jahy
┃▢ ${prefix}orgy
┃▢ ${prefix}pussy
┃▢ ${prefix}thighs
┃▢ ${prefix}panties
┃▢ ${prefix}thighs
┃▢ ${prefix}masturbation
┃▢ ${prefix}chiisaihentai
┃▢ ${prefix}trap
┃▢ ${prefix}blowjob
┃▢ ${prefix}yaoi
┃▢ ${prefix}ecchi
┃▢ ${prefix}hentai
┃▢ ${prefix}ahegao
┃▢ ${prefix}hololewd
┃▢ ${prefix}sideoppai
┃▢ ${prefix}animefeets
┃▢ ${prefix}animebooty
┃▢ ${prefix}animethighss
┃▢ ${prefix}hentaiparadise
┃▢ ${prefix}animearmpits
┃▢ ${prefix}hentaifemdom
┃▢ ${prefix}lewdanimegirls
┃▢ ${prefix}biganimetiddies
┃▢ ${prefix}animebellybutton
┃▢ ${prefix}hentai4everyone
┣━━━━━━━━━━━━━━
┣━❲ 𝙎𝙊𝙐𝙉𝘿 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}sound1
┃▢ ${prefix}sound2
┃▢ ${prefix}sound3
┃▢ ${prefix}sound4
┃▢ ${prefix}sound5
┃▢ ${prefix}sound6
┃▢ ${prefix}sound7
┃▢ ${prefix}sound8
┃▢ ${prefix}sound9
┃▢ ${prefix}sound10
┃▢ ${prefix}sound11
┃▢ ${prefix}sound12
┃▢ ${prefix}sound13
┃▢ ${prefix}sound14
┃▢ ${prefix}sound15
┃▢ ${prefix}sound16
┃▢ ${prefix}sound17
┃▢ ${prefix}sound18
┃▢ ${prefix}sound19
┃▢ ${prefix}sound20
┃▢ ${prefix}sound21
┃▢ ${prefix}sound22
┃▢ ${prefix}sound23
┃▢ ${prefix}sound24
┃▢ ${prefix}sound25
┃▢ ${prefix}sound26
┃▢ ${prefix}sound27
┃▢ ${prefix}sound28
┃▢ ${prefix}sound29
┃▢ ${prefix}sound30
┃▢ ${prefix}sound31
┃▢ ${prefix}sound32
┃▢ ${prefix}sound33
┃▢ ${prefix}sound34
┃▢ ${prefix}sound35
┃▢ ${prefix}sound36
┃▢ ${prefix}sound37
┃▢ ${prefix}sound38
┃▢ ${prefix}sound39
┃▢ ${prefix}sound40
┃▢ ${prefix}sound41
┃▢ ${prefix}sound42
┃▢ ${prefix}sound43
┃▢ ${prefix}sound44
┃▢ ${prefix}sound45
┃▢ ${prefix}sound46
┃▢ ${prefix}sound47
┃▢ ${prefix}sound48
┃▢ ${prefix}sound49
┃▢ ${prefix}sound50
┃▢ ${prefix}sound51
┃▢ ${prefix}sound52
┃▢ ${prefix}sound53
┃▢ ${prefix}sound54
┃▢ ${prefix}sound55
┃▢ ${prefix}sound56
┃▢ ${prefix}sound57
┃▢ ${prefix}sound58
┃▢ ${prefix}sound59
┃▢ ${prefix}sound60
┃▢ ${prefix}sound61
┃▢ ${prefix}sound62
┃▢ ${prefix}sound63
┃▢ ${prefix}sound64
┃▢ ${prefix}sound65
┃▢ ${prefix}sound66
┃▢ ${prefix}sound67
┃▢ ${prefix}sound68
┃▢ ${prefix}sound69
┃▢ ${prefix}sound70
┃▢ ${prefix}sound71
┃▢ ${prefix}sound72
┃▢ ${prefix}sound73
┃▢ ${prefix}sound74
┣━━━━━━━━━━━━━━
┣━❲ 𝙔𝘼𝙉𝙂 𝙋𝙀𝙍𝙇𝙐 𝘿𝙄𝙋𝙀𝙍𝙃𝘼𝙏𝙄𝙆𝘼𝙉 ❳
┃▢ Jangan sering menggunakan bot selain store
┃▢ Boleh memakai bot tapi maksimal 5 Kali
┃▢ Kalau Pakai liat list harga no limit
┗━━━━━━━━━━━━`
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *Permanent BLOCK*

2. Jangan telepon bot.
Sanksi: *2 Hari BLOCK*

3. Sehari Pakai Bot Maksimal 15 Kali.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`──「 *MENU DONATE* 」──

Hi *${cekName}* ${ucapanWaktu} 👋🏻

*Payment Gopay*
Number: 0882019193147
A/N: Faizhal Najib

*Payment Dana*
Number: 0882019193147
A/N: Faizhal Najib

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

──「 *THX FOR YOU* 」──`
}

exports.infoOwner = () =>{
return`──「 *INFO OWNER* 」──

 *Data Profil*
 • *Nama:* Faizhal Najib
 • *Umur:* 14 tahun
 • *Hoby:* Turu/Game/Jualan
 • *Askot:* Makassar
 • *Konten:* Gamer

_iam developer bot whatsapp._

 *Sosial Media*
 • *Whatsapp:* 088019193147
 • *Youtube:* https://youtube.com/channel/UC9_O2af57C0arYRhtSrSM7w
 • *Github:* _*TIDAK ADA...*_
 `
}