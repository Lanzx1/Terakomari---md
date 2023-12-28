// S C R I P T  O R I  B Y  Bochilgaming 🔭

// - - THANKS TO - -
// • Allah SWT
// • Nurutomo
// • Bochilgaming
// • Rominaru
// • Kannachann
// • FahriAdison
// • The.Sad.Boy01
// • Rlxfly
// • Rasel comel
// • ImYanXiao
// • Xtreshe (Beban)
// • Dll

//[!] Jangan Lupa Ganti Bagian global.owner

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// kalo ga punya biarin aja biar ada creditsnya :v
global.sig = 'https://instagram.com/Xiao_yan_21' //Link Instagrammu
global.sgh = 'https://github.com/ImYanXiao' //Link Githubmu
global.sgc = 'https://chat.whatsapp.com/DyBMXDw1IshFM9z0ZHZNlR'
global.sdc = '-' //Isi Pake Link Discordmu Kalo Gada Biarin aja
global.snh = 'https://nhentai.net/' //Hmmm, Ini boleh kalian isi terserah :v

/*============== PAYMENT ==============*/
global.pdana = '085736178354' //Nomor Danamu
global.ppulsa = '085736178354' //Nomor SimCard Yang Kamu Pake
global.psaweria = 'https://saweria.com/XiaoYan021' //Link Saweriamu Kalo Nggada Ketik - aja

/*============== NOMOR ==============*/
global.nomorbot = '6281231079387' //Nomor Bot
global.nomorown = '6288802101736' //Nomor Owner
global.namebot = 'Terakomari' //Nama Bot
global.nameown = 'arknDEV' // Nama Owner


/*============== STAFF ==============*/
global.owner = [
  ['6288802101736', 'arknDEV', true] //Ganti jd nomormu sama Namamu
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


global.lolkey = 'apikeymu'
global.xkey = 'APIKEYMU'
/*============== API ==============*/
// Tambahin Rest Apinya Sendiri Krn yg saya hapus apinya sudah Mati
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.lolhuman.xyz': 'Apikeymu'
}
// Kata APIKEY itu isi dengan apikeymu, dengan beli ke website itu

/*============== WATERMARK ==============*/
global.wm = 'Terakomari' //Main Watermark
global.wm2 = 'Terakomari'
global.wm3 = 'Terakomari'
global.namedoc = 'Terakomari' //Main Name Menu Document
global.botdate = `⫹⫺ Day's: ${week} ${date}`
global.bottime = `ᴛɪᴍᴇ: ${wktuwib}`
global.titlebot = 'Terakomari'
global.author = global.wm


/*============== LOGO ==============*/
global.thumb = 'https://telegra.ph/file/cce9ab4551f7150f1970d.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/26b515d170f1e599f78a7.jpg'
global.thumbbc = 'https://telegra.ph/file/05f874dc87f7e27fa8127.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'
global.thumblvlup = 'https://telegra.ph/file/a3e66e0fa840b08236c75.jpg'
global.hwaifu = ['https://telegra.ph/file/a5545d0fa0b263f0f6a4a.jpg', 'https://telegra.ph/file/5a9ec4ba3079aa657cd03.jpg', 'https://telegra.ph/file/93131f4d62918247bd3cc.jpg', 'https://telegra.ph/file/377150b43bf58a0c74b55.jpg', 'https://telegra.ph/file/2aa7bee2aac7204972e3d.jpg']


/*============== FlamingText ===========*/
global.flaaa = [
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='] 

/*============== TEXT ==============*/
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」Loading...```'
global.eror = '```404 error```'
global.dtu = 'Terakomari'
global.dtc = 'Terakomari'
global.phn = '+62 888-0210-1736'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.djson = 'application/json'

global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = '┅━━━═┅═❏ *ღ 𝘿𝘼𝙎𝙃𝘽𝙊𝘼𝙍𝘿 ღ* ❏═┅═━━━┅'
global.cmenut = '❏––––––『'                       //top
global.cmenuh = '』––––––'                        //header
global.cmenub = '┊❀'                            //body
global.cmenuf = '┗━═┅═━––––––๑\n'                //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '┊'                              //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*============== STICKER WM ==============*/
global.stickpack = '.'
global.stickauth = `☂︎\n𝗘\nl\na\ni\nn\na\n-\n𝗕\n𝗢\n𝗧\n✦\n\n⫹⫺ Whatsapp BOT\nwa.me/${global.nomorbot}`
global.packname = 'Sticker Request By '
global.packname2 = 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴇʟᴀɪɴᴀ ʙᴏᴛᴢ'

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
