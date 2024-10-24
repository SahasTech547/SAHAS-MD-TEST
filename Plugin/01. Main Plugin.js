const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../DATABASE/functions')
const { checkAccess, isPremiumUser, blacklistedJIDs, premiumJIDs, dataLoaded } = require('../DATABASE/accessControl');
const mono = "```"

    function detectPlatform() {
      if (process.env.REPL_ID) return 'Replit';
      if (process.env.HEROKU_APP_NAME) return 'Heroku';
      if (process.env.KOYEB_PROJECT_ID) return 'Koyeb';
      if (process.env.AWS_LAMBDA_FUNCTION_NAME) return 'AWS Lambda';
      if (process.env.VERCEL) return 'Vercel';
      if (process.env.RENDER) return 'Render';
      if (process.env.NETLIFY) return 'Netlify';
      if (process.env.WORKFLOW) return 'Workflow';
      if (process.env.FLYIO_APP_NAME) return 'Fly.io';
      return 'Unknown Platform';
    }
    const platformName = detectPlatform();

    

cmd({
      pattern: "runtime",
      desc: "Chek Bot Runtime",
      category: "main",
      react: "⏰",
      filename: __filename
    }, async (conn, mek, m, { from, reply }) => {
      try {
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*🚀 𝖱𝗎𝗇𝗍𝗂𝗆𝖾 : ${uptime}*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `Runtime ⏰`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/ubmlj5a.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


        




cmd({
      pattern: "alive",
      alias: ["online"],
      desc: "Chek Bot Alive",
      category: "main",
      react: "🧚🏻‍♀️",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*

𝖳𝗒𝗉𝖾 .𝗆𝖾𝗇𝗎 𝖦𝖾𝗍 𝖬𝗒 𝖢𝗈𝗆𝗆𝖺𝗇𝖽 𝖫𝗂𝗌𝗍. 𝖲𝖠𝖧𝖠𝖲 𝖬𝖣 𝗂𝗌 𝖺 𝖲𝗂𝗆𝗉𝗅𝗒 𝖵𝖾𝗋𝗒 𝖯𝗈𝗐𝖾𝗋𝖿𝗎𝗅𝗅 𝖶𝗁𝗍𝗌𝖺𝗉𝗉 𝖡𝗈𝗍. 𝖡𝖺𝗌𝖾 𝖱𝗎𝗇𝗂𝗇𝗀 𝖮𝗇 𝖡𝖺𝗅𝗂𝖾𝗒𝗌 𝖠𝗇𝖽 𝖵𝖺𝗋𝗂𝗈𝗎𝗌 𝖠𝖯𝖨𝗌. 𝖨𝗍 𝖮𝖿𝖿𝖾𝗋  𝖲𝖾𝖺𝗆𝗅𝖾𝗌𝗌 𝖥𝗎𝗇𝖼𝗍𝗂𝗈𝗇𝖺𝗅𝗂𝗍𝗒 𝖶𝗂𝗍𝗁𝗈𝗎𝗍 𝖡𝗎𝗍𝗍𝗈𝗇𝗌. 𝖣𝖾𝗅𝗂𝗏𝖾𝗋𝗂𝗇𝗀 𝖰𝗎𝗂𝖼𝗄 𝖠𝗇𝖽 𝖤𝖿𝖿𝗂𝖼𝗂𝖾𝗇𝗍 𝖯𝖾𝗋𝖿𝗈𝗋𝗆𝖺𝗇𝖼𝖾 𝖥𝗈𝗋 𝖠𝗎𝗍𝗈𝗆𝖺𝗍𝖾𝖽 𝖳𝖺𝗌𝗄𝗌 𝖠𝗇𝖽 𝖢𝗈𝗆𝗆𝖺𝗇𝖽𝗌. 𝖭𝗈𝗐 𝖸𝗈𝗎 𝖢𝖺𝗇 𝖦𝖾𝗍 𝖬𝗒 𝖲𝗒𝗌𝗍𝖾𝗆 𝖨𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇 𝖳𝗒𝗉𝖾 .𝗌𝗒𝗌𝗍𝖾𝗆 𝖠𝗇𝖽 𝖲𝖾𝗇𝖽 𝖨𝗍. 

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `I'm Alive Now 👨‍💻`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/ubmlj5a.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });

















cmd({
      pattern: "menu",
      alias: ["panel"],
      desc: "Get Bot Menu",
      category: "main",
      react: "📁",
      filename: __filename
},
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
   
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*
          
✨ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝐒𝐀𝐇𝐀𝐒 𝐌𝐃! ✨ 
*╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」*
*│◈ 𝖱𝗎𝗇𝗍𝗂𝗆𝖾 : ${uptime}*
*│◈ 𝖱𝖺𝗆 𝖴𝗌𝖺𝗀𝖾 : ${memoryUsage} MB / ${totalMemory} MB*
*│◈ 𝖯𝗅𝖺𝗍𝖿𝗈𝗋𝗆 : ${os.hostname()}*
*│◈ 𝖮𝗐𝗇𝖾𝗋 𝖭𝖺𝗆𝖾 : 𝐒𝐀𝐇𝐀𝐒 𝐍𝐄𝐓𝐇𝐒𝐀𝐑𝐀*
*│◈ 𝖮𝗐𝗇𝖾𝗋 𝖭𝗎𝗆𝖻𝖾𝗋 : 94718913389*
*╰──────────●●►*
*╭──────────●●►*
 📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
  *───────*
*.apk*
*.twitter*
*.gdrive*
*.mediafire*
*.fb*
*.img*
*.play*
*.song*
*.video*
*.tiktok*
*.xvideo*
*.xnxx*
*.mvdl or cinerurl*

*╰───────────●●►*
*╭──────────●●►*
 👾 *𝐀𝐢 𝐌𝐞𝐧𝐮*
  *───────*
*.ai*

*╰───────────●●►*
*╭──────────●●►*
 🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
  *───────*
*.alive*
*.menu*
*.system*
*.ping*
*.runtime*
*.about*
*.support*
*.allmenu*
*.owner*
*.repo*
*.settings*

*╰───────────●●►*
*╭──────────●●►*
 🎉 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮*
  *───────*
*.animegirl*
*.dog*
*.fact*
*.hack*
*.joke*
*.quote*

*╰───────────●●►*
*╭──────────●●►*
 🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
  *───────*
*.sticker*
*.convert*
*.currency*
*.url*

*╰───────────●●►*
*╭──────────●●►*
 🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
  *───────*
*.srepo*
*.yts*

*╰───────────●●►*
*╭──────────●●►*
 👥 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
  *───────*
*.mute*
*.unmute*
*.promote*
*.demote*
*.del*
*.add*
*.setgoodbye*
*.setwelcome*
*.admins*
*.groupdesc*
*.groupinfo*
*.grouplink*
*.gname*
*.setsubject*
*.tagall*
*.requests*
*.accept*
*.reject*
*.hidetag*
*.kick*
*.unlock*
*.lock*
*.approve*
*.poll*
*.getpic*

*╰───────────●●►*
*╭──────────●●►*
 🔒 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
  *───────*
*.shutdown*
*.broadcast*
*.setpp*
*.block*
*.unblock*
*.clearchats*
*.jid*
*.gjid*
*.restart*
*.setautobio
*.update*

*╰───────────●●►*
*╭──────────●●►*
 ⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
  *───────
*.movie*
*.anime1*
*.anime2*
*.anime3*
*.anime4*
*.anime5*
*.define*
*.githubstalk*
*.gpass*
*.trt*
*.weather*

*╰───────────●●►*
*╭──────────●●►*
 🛠️ *𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮*
  *───────*
*.calc*
*.translate*
*.reverse*
*.tempmail*
*.checkmail*
*.delmail*
*.encode*
*.decode*
*.npmstalk*
*.iplookup*
*.instastalk*
*.githubuser*
*.password*
*.hijact*

*╰───────────●●►*
*╭──────────●●►*
 📰 *𝐍𝐞𝐰𝐬 𝐌𝐞𝐧𝐮*
  *───────*
*.hirunews*
*.sirasanews*
*.derananews*
*.news*
*.lankadeepanews*
*.bbcnews*

*╰───────────●●►*


> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD Menu List`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "owner",
      desc: "Chek Bot Owner",
      category: "main",
      react: "👨‍💻",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*

*👾 ＳＡＨＡＳ-ＭＤ 👨‍💻💗*

> *𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ꜱᴀʜᴀꜱ ɴᴇᴛʜꜱᴀʀᴀ (ꜱᴀʜᴀꜱ ᴛᴇᴄʜ)*
*⚡ɴᴜᴍʙᴇʀ* -: 94718913389
*⚡ʏᴏᴜᴛᴜʙᴇ -:* https://www.youtube.com/@Sahas_Tech
*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD Owner Information`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "support",
      desc: "To get the bot informations.",
      category: "main",
      react: "⛓",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*

*👨‍💻SAHAS-MD Support Channels💗*

*Youtube Channel Link:* https://www.youtube.com/@Sahas_Tech

*Whatsapp Channel Link:* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD Support Channels`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "support",
      desc: "To get the bot informations.",
      category: "main",
      react: "⛓",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*
          
📍𝖱𝖾𝗉𝗈 𝖫𝗂𝗇𝗄 ❤️‍🔥👇

👨‍💻◦https://github.com/QUEEN-KYLIE-MD-01/QUEEN-KYLIE-MD/tree/main

📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖲𝗎𝖻𝗌𝖼𝗋𝗂𝖻𝖾 𝖬𝗒 𝖸𝗈𝗎𝗍𝗎𝖻𝖾 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 👇

👨‍💻◦ https://www.youtube.com/@Sahas_Tech

📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖥𝗈𝗅𝗅𝗈𝗐 𝖬𝗒 𝖶𝗁𝖺𝗍𝗌𝖺𝗉𝗉 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 👇

👨‍💻◦ https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD Support Channels`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "about",
      desc: "To get the bot informations.",
      category: "main",
      react: "ℹ️",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `👋 𝐇𝐄𝐋𝐋𝐎𝐖 𝐓𝐇𝐄𝐈𝐑 ${senderNumber}

𝐈 𝐀𝐌 𝐒𝐀𝐇𝐀𝐒-𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓

𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐒𝐀𝐇𝐀𝐒 𝐓𝐄𝐂𝐇 (𝐒𝐀𝐇𝐀𝐒 𝐍𝐄𝐓𝐇𝐒𝐀𝐑𝐀)..
           
ɢɪᴛʜᴜʙ :    
             
ʏᴏᴜᴛᴜʙᴇ : https://www.youtube.com/@Sahas_Tech
      
ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ : https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

тнαηкѕ ƒσя υѕιηg ʂαԋαʂ-м∂ ωнαтѕαρρ вσт м∂`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD About`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "system",
      alias: ["status", "botinfo"],
      desc: "Check uptime, RAM usage, CPU info, and more",
      category: "main",
      react: "🧬",
      filename: __filename
    }, async (conn, mek, m, { from, reply }) => {
      try {
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent
        
          
          let desc = `*乂 SAHAS-MD SYSTEM INFORMATION*

*⏰𝖱𝗎𝗇𝗍𝗂𝗆𝖾:-  ${runtime(process.uptime())}*    
*📟𝖱𝖺𝗆 𝖴𝗌𝖺𝗀𝖾:- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*⚙️𝖯𝗅𝖺𝗍𝖿𝗈𝗋𝗆:- ${os.hostname()}*
*👨‍💻𝖮𝗐𝗇𝖾𝗋:- 𝖲𝖺𝗁𝖺𝗌 𝖭𝖾𝗍𝗁𝗌𝖺𝗋𝖺*   
*👾𝖵𝖾𝗋𝗌𝗂𝗈𝗇:- 1.0.0*
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`

       

          

          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD System Information`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "menu",
      alias: ["panel"],
      desc: "Get Bot Menu",
      category: "main",
      react: "📁",
      filename: __filename
},
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
   
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*

╭─「 ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ」
│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}
│◈ ᴠᴇʀꜱɪᴏɴ : 1.0.0
╰──────────●●►

╭╼╼╼╼╼╼╼╼╼╼
├ 1 • OWNER
├ 2 • CONVERT
├ 3 • AI
├ 4 • SEARCH
├ 5 • DOWNLOAD
├ 6 • MAIN
├ 7 • GROUP
├ 8 • FUN
├ 9 • TOOLS
├ 10 • OTHER
╰╼╼╼╼╼╼╼╼╼╼

🌟 Reply with the Number you want to select

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ`;

          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD Menu List`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`◈╾──────OWNER COMMAND LIST──────╼◈

╭────────●●►
│ • restart 
╰────────────────────●●►

⭓ Total Commands List OWNER: 1

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ`);
                        break;
                    case '2':               
                        reply(`◈╾──────CONVERT COMMAND LIST──────╼◈

╭────────●●►
│ • convert 
╰────────────────────●●►

⭓ Total Commands List CONVERT: 1

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ`);
                        break;
                    case '3':               
                        reply(`◈╾──────AI COMMAND LIST──────╼◈

╭────────●●►
│ • ai 
╰────────────────────●●►

⭓ Total Commands List AI: 1

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ`);
                        break;
                    case '4':               
                        reply(`◈╾──────SEARCH COMMAND LIST──────╼◈

╭────────●●►
│ • yts 
╰────────────────────●●►
╭────────●●►
│ • srepo 
╰────────────────────●●►

⭓ Total Commands List SEARCH: 2

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ`);
                        break;
                    case '5':               
                        reply(`◈╾──────DOWNLOAD COMMAND LIST──────╼◈

╭────────●●►
│ • apk 
╰────────────────────●●►
╭────────●●►
│ • twitter 
╰────────────────────●●►
╭────────●●►
│ • gdrive 
╰────────────────────●●►
╭────────●●►
│ • mediafire 
╰────────────────────●●►
╭────────●●►
│ • fb 
╰────────────────────●●►
╭────────●●►
│ • ig 
╰────────────────────●●►
╭────────●●►
│ • movie 
╰────────────────────●●►
╭────────●●►
│ • song 
╰────────────────────●●►
╭────────●●►
│ • video 
╰────────────────────●●►
╭────────●●►
│ • play/yt 
╰────────────────────●●►
╭────────●●►
│ • song2 
╰────────────────────●●►
╭────────●●►
│ • video2 
╰────────────────────●●►
╭────────●●►
│ • tiktok 
╰────────────────────●●►
╭────────●●►
│ • img 
╰────────────────────●●►

⭓ Total Commands List DOWNLOAD: 14

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ`);
                        break;
                    case '6':               
                        reply(`◈╾──────MAIN COMMAND LIST──────╼◈

╭────────●●►
│ • alive 
╰────────────────────●●►
╭────────●●►
│ • about 
╰────────────────────●●►
╭────────●●►
│ • menu 
╰────────────────────●●►
╭────────●●►
│ • allmenu 
╰────────────────────●●►
╭────────●●►
│ • support 
╰────────────────────●●►
╭────────●●►
│ • system 
╰────────────────────●●►
╭────────●●►
│ • ping 
╰────────────────────●●►
╭────────●●►
│ • runtime 
╰────────────────────●●►

⭓ Total Commands List MAIN: 8

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ`);
                        break;
                    case '7':               
                        reply(`◈╾──────GROUP COMMAND LIST──────╼◈

╭────────●●►
│ • promote 
╰────────────────────●●►
╭────────●●►
│ • demote 
╰────────────────────●●►
╭────────●●►
│ • kick 
╰────────────────────●●►
╭────────●●►
│ • add 
╰────────────────────●●►
╭────────●●►
│ • admins 
╰────────────────────●●►
╭────────●●►
│ • tagall 
╰────────────────────●●►
╭────────●●►
│ • getpic 
╰────────────────────●●►
╭────────●●►
│ • setwelcome 
╰────────────────────●●►
╭────────●●►
│ • setgoodbye 
╰────────────────────●●►
╭────────●●►
│ • admins 
╰────────────────────●●►
╭────────●●►
│ • gname 
╰────────────────────●●►

⭓ Total Commands List GROUP: 11

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ`);
                       break;
                    case '8':               
                        reply(`◈╾──────FUN COMMAND LIST──────╼◈

╭────────●●►
│ • dog 
╰────────────────────●●►
╭────────●●►
│ • fact 
╰────────────────────●●►
╭────────●●►
│ • hack 
╰────────────────────●●►
╭────────●●►
│ • quote 
╰────────────────────●●►

⭓ Total Commands List FUN: 4

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ`);

                        break;
                    case '10':               
                        reply(`◈╾──────OTHER COMMAND LIST──────╼◈

╭────────●●►
│ • githubstalk 
╰────────────────────●●►
╭────────●●►
│ • trt 
╰────────────────────●●►
╭────────●●►
│ • weather 
╰────────────────────●●►

⭓ Total Commands List OTHER: 3

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
