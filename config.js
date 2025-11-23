import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'
import fs from 'fs'
import * as cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import { dirname } from 'path' 

global.__dirname = (url) => dirname(fileURLToPath(url));

// Configuraciones principales
global.roowner = ['573212042172'] // Solo el root owner (dueño principal)
global.owner = [
   
   ['573212042172', '𝙅𝙪𝙡𝙞𝙤 - 𝙎𝙚𝙩𝙝𝙜𝙭9  🦇🩸', true],
  
// son pndjos todos menos David y Leo por poco también son
   
   ['573224770981', '𝙎𝙚𝙩𝙝𝙜𝙭9', true]
];

global.mods = ['573212042172', '573224770981']
global.suittag = ['573212042172', '573224770981']
global.prems = ['573212042172', '573224770981']

// Información del bot 
global.libreria = 'Baileys'
global.baileys = 'V 6.7.9'
global.languaje = 'Español'
global.vs = '4.3.1'
global.vsJB = '5.0'
global.nameqr = 'Itsukiqr'
global.namebot = 'Itsuki-IA'
global.sessions = 'Itsuki-sessions'
global.jadi = 'jadibts'
global.ItsukiJadibts = true
global.Choso = true
global.prefix = ['.', '!', '/' , '#', '%']
global.apikey = 'ItsukiNakanoIA'
global.botNumber = '573224770981'// Números y settings globales para varios códigos
global.packname = 'La Mejor Bot De WhatsApp'
global.botname = 'ᴀɢɢ x ꜱᴇᴛʜɢx9 👑✨'
global.wm = '© 𝘼𝙂𝙂 𝙭 𝙎𝙀𝙏𝙃𝙂𝙓9'
global.wm3 = '⫹⫺  multi-device'
global.author = 'made by @𝘼𝙂𝙂 𝙭 𝙎𝙀𝙏𝙃𝙂𝙓9'
global.dev = '© powered by 𝘼𝙂𝙂 𝙭 𝙎𝙀𝙏𝙃𝙂𝙓9'
global.textbot = 'AGG|IA- 𝘼𝙂𝙂 𝙭 𝙎𝙀𝙏𝙃𝙂𝙓9'
global.etiqueta = '@𝘼𝙂𝙂 𝙭 𝙎𝙀𝙏𝙃𝙂𝙓9'
global.gt = '© creado Por 𝘼𝙂𝙂 𝙭 𝙎𝙀𝙏𝙃𝙂𝙓9'
global.me = 'ᴀɢɢ x ꜱᴇᴛʜɢx9'
global.listo = '*Aqui tiene*'
global.moneda = 'Yenes'
global.multiplier = 69
global.maxwarn = 3
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

// Enlaces oficiales del bot
global.gp1 = 'https://chat.whatsapp.com/CT8JP1E0JshDtdVz2yaEKy?mode=hqrt2'
global.comunidad1 = 'https://chat.whatsapp.com/CT8JP1E0JshDtdVz2yaEKy?mode=hqrt2'
global.channel = 'https://whatsapp.com/channel/0029VbBc97b2ZjCtQ6FSCe1h'
global.channel2 = 'https://whatsapp.com/channel/0029VbBc97b2ZjCtQ6FSCe1h'
global.md = 'https://github.com/xzzys26/Itsuki-Nakano'
global.correo = 'amjulio496@gmail.com'

// Apis para las descargas y más
global.APIs = {
  ryzen: 'https://api.ryzendesu.vip',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  delirius: 'https://delirius-apiofc.vercel.app',
  siputzx: 'https://api.siputzx.my.id', // usado como fallback para sugerencias IA
  mayapi: 'https://mayapi.ooguy.com'
}

global.APIKeys = {
  'https://api.xteam.xyz': 'YOUR_XTEAM_KEY',
  'https://api.lolhuman.xyz': 'API_KEY',
  'https://api.betabotz.eu.org': 'API_KEY',
  'https://mayapi.ooguy.com': 'may-f53d1d49'
}

// Endpoints de IA
global.SIPUTZX_AI = {
  base: global.APIs?.siputzx || 'https://api.siputzx.my.id',
  bardPath: '/api/ai/bard',
  queryParam: 'query',
  headers: { accept: '*/*' }
}


global.chatDefaults = {
  isBanned: false,
  sAutoresponder: '',
  welcome: true,
  autolevelup: false,
  autoAceptar: false,
  autosticker: false,
  autoRechazar: false,
  autoresponder: false,
  detect: true,
  antiBot: false,
  antiBot2: false,
  modoadmin: false,
  antiLink: true,
  antiImg: false,
  reaction: false,
  nsfw: false,
  antifake: false,
  delete: false,
  expired: 0,
  antiLag: false,
  per: [],
  antitoxic: false
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  try { import(pathToFileURL(file).href + `?update=${Date.now()}`) } catch {}
})

// Configuraciones finales
export default {
  prefix: global.prefix,
  owner: global.owner,
  sessionDirName: global.sessions,
  sessionName: global.sessions,
  botNumber: global.botNumber,
  chatDefaults: global.chatDefaults
}