let handler = async ( m, { conn, text, usedPrefix, command }) =>
conn.sendMessage(m.chat, {
      text: ` *komari* ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍᴇɴᴜʜɪ ᴋᴇʙᴜᴛᴜʜᴀɴ ᴅɪɢɪᴛᴀʟ ᴀɴᴅᴀ. ᴀᴘᴀᴋᴀʜ ᴋᴀᴍᴜ ᴍᴇʀᴀꜱᴀ ʟᴇʟᴀʜ? *Komari* ꜱᴇʟᴀʟᴜ ᴅɪ ꜱɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴜᴀᴛ ʜᴀʀɪ ᴀɴᴅᴀ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ. ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ᴅᴀꜰᴛᴀʀᴋᴀɴ ᴅɪʀɪ ᴀɴᴅᴀ ᴅɪ *ᴅᴀᴛᴀʙᴀꜱᴇ* komari ᴀɢᴀʀ komari ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪɴɢᴀᴛ ᴀɴᴅᴀ ꜱᴇʟᴀᴍᴀ komari ᴍᴀꜱɪʜ ᴀᴋᴛɪꜰ.`,
      contextInfo: {
      externalAdReply: {
      title: `Terakomari`,
      body: `Hai kak, Saya Adalah Bot Komari`,
      thumbnailUrl: 'https://telegra.ph/file/b1467134174ecf9b03e82.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
handler.customPrefix = /^(komari|bot|P|p|komari|botz)$/i
handler.command = new RegExp()

export default handler