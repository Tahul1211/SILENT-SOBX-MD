const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({

    pattern: "menu1",

    react: "🛸",

    alias: ["panel","list","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu1',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
const config = await readEnv();
let madeMenu = `❁ ════ ❃•◯•❃ ════ ❁

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*
     
❁ ════ ❃•◯•❃ ════ ❁


*┝⇆SILENT-SOBX-MD⇆┥*

> SILENT-SOBX-MD ALL MENU💗

🧬◦ *ɴᴀᴍᴇ ʙᴏᴛ* : ❖sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ❖
🧬◦ *ᴄʀᴇᴀᴛᴏʀ* : ➺ѕเℓεɳƭ_ℓσѵε૨࿐⚡
🧬◦ *ᴠᴇʀsɪᴏɴs* : ᴠ.2.0.0⚡
🧬◦ *ᴍᴇɴᴜ ᴄᴍᴅ* : ᴍᴇɴᴜ⚡
🧬◦ *ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴛ ᴄʜᴀɴɴᴇʟ* :  https://youtube.com/@silentlover432 ⚡
🧬◦ *ᴊᴏɪɴ ᴍʏ ᴄʜᴀɴɴᴇʟ* :  https://whatsapp.com/channel/0029VaHO5B0G3R3cWkZN970s ⚡
🧬◦ *ᴄᴏɴᴛᴀᴄᴛ* : http://wa.me/+923096287432 ⚡

*┌ 乂📥 ＤＯＷＮＬＯＡＤＥＲ📥 乂*
*│◦ .ғʙ <ᴜʀʟ>*
*│◦ .ɪɴꜱᴛᴀ <ᴜʀʟ>*
*│◦ .ᴠɪᴅᴇᴏ <ᴜʀʟ>*
*│◦ .ɢᴅʀɪᴠᴇ <ᴜʀʟ>*
*│◦ .ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*
*│◦ .ᴛᴛ<ᴜʀʟ>*
*│◦ .ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*
*│◦ .ꜱᴏɴɢ <ϙᴜᴇʀʏ>*
*│◦ .ꜱᴏɴɢ <ᴜʀʟ>*
*│◦ .ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*
*│◦ .ᴠɪᴅᴇᴏ <ᴜʀʟ>*
*│◦ .ɪᴍɢ <ϙᴜᴇʀʏ>*
*└◦ .ᴀᴘᴋ <ɴᴀᴍᴇ>*

*┌ 乂 🔎 S E A R C H 🔍乂*
*│◦ .ʏᴛꜱ  <ᴛᴇxᴛ>*
*│◦ .ʏᴛꜱ1 <ᴛᴇxᴛ>*
*│◦ .ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
*└◦ .ɪᴍɢ <ᴛᴇxᴛ>*

*┌ 乂 🧠 ＡＩ 🧠*
*│◦ .ɢᴘᴛ <ᴛᴇxᴛ>*
*└◦ .ᴀɪ <ᴛᴇxᴛ>*

*┌ 乂 👨‍💻ＯＷＮＥＲ 👨‍💻*
*│◦ .ꜱᴜᴘᴘᴏʀᴛ*
*│◦ .ꜱᴇᴛᴀᴜᴛᴏʙɪᴏ*
*│◦ .ᴍᴜᴛᴇ*
*│◦ .ᴜɴᴍᴜᴛᴇ*
*│◦ .ᴏᴡɴᴇʀ*
*│◦ .ʀᴇᴘᴏ*
*│◦ .ꜱʏꜱᴛᴇᴍ*
*│◦ .ꜱᴛᴀᴛᴜꜱ*
*│◦ .ʙᴏᴛɪɴꜰᴏ*
*└◦ .ʀᴇꜱᴛᴀʀᴛ*

*┌ 乂 👥 ＧＲＯＵＰ 👥*
*│◦ .ʀᴇᴍᴏᴠᴇ <ʀᴇᴘʟʏ ᴛᴏ ᴛʜᴇ ᴍsɢ ᴜ ᴡᴀɴᴛ ᴛᴏ ᴅᴇʟᴇᴛᴇ>*
*│◦ .ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ᴛᴏ ᴛʜᴇ ᴍsɢ ᴜ ᴡᴀɴᴛ ᴛᴏ ᴅᴇʟᴇᴛᴇ>*
*│◦ .ᴀᴅᴅ*
*│◦ .ᴋɪᴄᴋ*
*│◦ .sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*
*│◦ .sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*
*│◦ .ᴘʀᴏᴍᴏᴛᴇ*
*│◦ .ᴅᴇᴍᴏᴛᴇ*
*│◦ .ꜱᴜᴘᴘᴏʀᴛ*
*│◦ ɢᴇᴛᴘɪᴄ*
*└◦ .ʟɪɴᴋ*

*┌ 乂 📃 ＩＮＦＯ 📃*
*│◦ .ᴍᴇɴᴜ*
*│◦ .ᴀʟɪᴠᴇ*
*│◦ .ʀᴇʙᴏᴛ*
*│◦ .ʀᴇꜱᴛᴀʀᴛ*
*│◦ .ʙᴏᴛɪɴꜰᴏ*
*│◦ .ꜱᴛᴀᴛᴜꜱ*
*│◦ .ꜱᴜᴘᴘᴏʀᴛ*
*│◦ .ᴘɪɴɢ*
*└◦ .ꜱʏꜱᴛᴇᴍ*

*┌ 乂 🎡ＣＯＮＶＥＲＴＥＲ 🎡*
*└ ◦ .sᴛɪᴄᴋᴇʀ*

*┌ 乂 ⛱️ R A N D O M ⛱️*
*│◦ .ᴋɪɴɢ*
*│◦ .ᴅᴏɢ*
*│◦ .ᴀɴɪᴍᴇ*
*│◦ .ᴀɴɪᴍᴇɢɪʀʟ*
*│◦ .ᴀɴɪᴍᴇɢɪʀʟ1*
*│◦ .ᴀɴɪᴍᴇɢɪʀʟ2*
*│◦ .ᴀɴɪᴍᴇɢɪʀʟ3*
*│◦ .ᴀɴɪᴍᴇɢɪʀʟ4*
*└◦ .ᴀɴɪᴍᴇɢɪʀʟ5*

*┌ 乂 🏝️W A L L P A P E R🏖️*
*└◦ .ɪᴍɢ*

*┌ 乂 🔥 O Ｔ H E Ｒ 🔥*
*│◦ .ɴᴇᴡꜱ*
*│◦ .ᴡᴇᴀᴛʜᴇʀ*
*│◦ .ᴛʀᴛ*
*│◦ .ᴍᴏᴠɪᴇ*
*│◦ .ꜰᴀᴄᴛ*
*│◦ .ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
*│◦ .ɢᴘᴀꜱꜱ*
*│◦ .ʜᴀᴄᴋ*
*│◦ .ǫᴜᴏᴛᴇ*
*│◦ .ꜱʀᴇᴘᴏ*
*└◦ .ᴅᴇꜰɪɴᴇ*

> *POWERED BY SILENTLOVER432*
╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
