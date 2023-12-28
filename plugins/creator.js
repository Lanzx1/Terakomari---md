import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `Developer Bot `, `ɴᴏᴛ ғᴀᴍᴏᴜs ᴊᴜsᴛ ᴀʟᴏɴᴇ ʙᴏʏ`, `arknDEV@gmail.com`, `🇮🇩 Indonesia`, ` https://github.com/ArknDEV`, `👤 ᴏᴡɴᴇʀ Terakomari`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, ` ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ`, ` ᴅᴏɴᴛ sᴘᴀᴍ/ᴄᴀʟʟ ᴍᴇ `, `ɴᴏᴛʜɪɴɢ`, `🇮🇩Indonesia`, `📍 `, `ʜᴀɴʏᴀ ʙᴏᴛ ʙɪᴀsᴀ ʏᴀɴɢ ᴋᴀᴅᴀɴɢ sᴜᴋᴀ ᴇʀᴏʀ `]
  ], fkontak)
  await m.reply(`ʜᴇʟʟᴏ @${m.sender.split(`@`)[0]} ᴛʜᴀᴛs ᴍʏ ᴏᴡɴᴇʀ ᴅᴏɴᴛ sᴘᴀᴍ ᴏʀ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʙʟᴏᴄᴋᴇᴅ`)
  } 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler