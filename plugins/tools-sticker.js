import { Sticker, StickerTypes } from 'wa-sticker-formatter'

let handler = async (m, { conn, args, command }) => {
  try {
    const q = m.quoted ? m.quoted : m
    const mime = (q.msg || q).mimetype || q.mediaType || ''

    if (!/image|video|webp/.test(mime) && !args[0]) {
      return conn.reply(
        m.chat,
        `🍙 *Crea un sticker*\n\n👉 Responde una imagen/video o usa:\n• *${command} <url>*`,
        m
      )
    }

    await conn.reply(m.chat, '⏳ Procesando tu sticker...', m)

    let buffer

    // Imagen o video
    if (/image|video|webp/.test(mime)) {
      buffer = await q.download()
      if (!buffer) return conn.reply(m.chat, '❌ No pude descargar el archivo', m)
    }

    // URL
    else if (args[0]) {
      if (!isUrl(args[0])) return conn.reply(m.chat, '❌ URL inválida', m)
      buffer = args[0]
    }

    // Crear Sticker
    const sticker = new Sticker(buffer, {
      pack: 'AGG x SETHGX9',
      author: 'Sticker Bot',
      type: StickerTypes.FULL,
      quality: 50
    })

    const stc = await sticker.build()

    await conn.sendMessage(m.chat, { sticker: stc }, { quoted: m })

  } catch (e) {
    console.log('Sticker error:', e)
    conn.reply(m.chat, '❌ Error creando el sticker', m)
  }
}
handler.help = ['sticker', 's', 'stiker']
handler.tags = ['tools']
handler.command = ['s', 'sticker']
export default handler

function isUrl(url) {
  return /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(url)
}
