const { cmd, commands } = require('../command');
const scraper = require("../DATABASE/scraper");
const axios = require('axios');
const fetch = require('node-fetch');
const { fetchJson, getBuffer } = require('../DATABASE/functions');
const { lookup } = require('mime-types');
const fs = require('fs');
const path = require('path');

//Apk Download
cmd({
    pattern: "apk",
    desc: "Downloads Apk",
    use: ".apk <app_name>",
    react: "📥",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, q, reply }) => {
    
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

    const appId = q.trim();
    if (!appId) return reply(`Please provide an app name`);

    
    reply("_Downloading " + appId + "_");
    
    try {
        const apkData = data.data;
        const apkIcon = apkData.icon;
        const apkName = apkData.name;
        const apkPackage = apkData.package;
        const apkLastUpdate = apkData.lastup;
        const apkSize = apkData.size;
        const apkDownloadLink = apkData.dllink;
        
        if (!buff || !appInfo.appname) {
            return await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        }
        
        await conn.sendMessage(
            from,
            { document: buff, caption: `> *ꜱᴀʜᴀꜱ-ᴍᴅ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛*`, mimetype: "application/vnd.android.package-archive", filename: `${appInfo.appname}.apk` },
            { quoted: mek }
        );
        
        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
        reply("*_Download Success_*");
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply(`Error: ${e.message}`);
    }
});
