const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
    pattern: "srepo",
    desc: "Fetch information about a GitHub repository.",
    category: "search",
    react: "📁",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const repo = args.join(' ');
        if (!repo) {
            return reply("Please provide a GitHub repository name in the format `owner/repo`.");
        }

        const apiUrl = `https://api.github.com/repos/${repo}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        let repoInfo = `📁_*GitHub Repository Info*_📁\n\n`;
        repoInfo += `📌 *Name*: ${data.name}\n`;
        repoInfo += `🔗 *URL*: ${data.html_url}\n`;
        repoInfo += `📝 *Description*: ${data.description}\n`;
        repoInfo += `⭐ *Stars*: ${data.stargazers_count}\n`;
        repoInfo += `🍴 *Forks*: ${data.forks_count}\n`;
        repoInfo += `\n`;
        repoInfo += `> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*\n`;

         // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: repoInfo,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD Github Repository Information`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`єяяσя ƒєт¢нιηg яєρσѕιтσяу ιηƒσ: ${e.message}`);
    }
});
