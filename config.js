const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JybXZLY1NiOVQwdit3RFNZWkdGSEtnZlAyUFpYWXdVMkNUVVM5VFJHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaG1ENjFiRm9MV2wvTk5aWmdMY1FnVk93N012YzcydFkxRFBoWWdrelVSUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRkRpcDR2NUZNMW1raHZIdUR3dDFSQ0RNT29JSTBYdTR4Q1F6bnVhckdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNVnI1eWR2UHZjMzNRQzRNQ1Y5RzJSV21ENHM5NFdWYTA1TVpOZ1JLR2pBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9QdnYwcmxSKzhNMklrczVJdU9EM1krN3JXU2dMR3pmMjBEM2hZbno5bTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRQRmt1V01ZQlJRZEZySWlOUzQ5blFuekl3YmZHa2sxU1RNVTlNR24vVlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU55dzVEZkVDb0dZNGNlTGUxR2hlMGVPdGg0ZkN6cytyR0FTUGRkciswWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2pUSzdPZUdlQmNWYWNJWmprdjd0UHJQUXdMSkJIZFkwTSsyQUl4MHBYYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklIaGhraG90NEliUmUrMThCTkhCMmhMa2NQOGIraFo2R3RkRnF6N2ZHV2xoNGVyaVcxOVdOc2tOUWpWVm1xYTR4SVloY3MrWW84cWhManpOQTVmOUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6IkkwL1A1YVZYRy82bFRRNnc2M21kdkpzM2o4WTBhQkJvc2FzcUZkUWVRYlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE5NDk3ODgzNDczQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1OEI0RUVERjk3NkY0NjgwMTFEQTVERUVCNkU2NEFFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk1NzkyNjd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IldQMkI3RUQ2IiwibWUiOnsiaWQiOiI5MTk0OTc4ODM0NzM6MjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiZ29kemUiLCJsaWQiOiIxNzgyNDE2OTY0NzcyMDc6MjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQL2Q0L1lERVB5WWhNY0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzQ0p4M3ZrQ1VYbGtCbDRvS3hwam1aa3BLSlh1MmQvM1Bqd0lRTWtuNUJjPSIsImFjY291bnRTaWduYXR1cmUiOiJaRk5uZ1EyK0hmTXdtRi91dnFIS2hLK1JWeVNScjkxUklQMnQzMmZnU21HeXhsQUJwOWFmQ2ZwOW12cVpvZG0vNjRDdDVhM3lCalFRM2d6c3dzakFCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ0N0blh5NVBNbk1kK0pVNk9xb0llQko4VGFpOHRwR1BQTFJraHdISHU1WHc4ZkRuQW04YzJSUy9lNm5DVlFDOXpSUGx3WWlvNnVWc1pZeXk4TXVEQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTk0OTc4ODM0NzM6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHdpY2Q3NUFsRjVaQVplS0NzYVk1bVpLU2lWN3RuZjl6NDhDRURKSitRWCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJUUF4QUEifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5NTc5MjY1LCJsYXN0UHJvcEhhc2giOiIyTUZLUFEiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFlLyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Godze💎*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/c6tn25.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐆𝐨𝐝𝐳𝐞𝐗𝐌𝐃",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "GODZEXMD FROM MALDINI EF GROUP",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "918304063560,919539722974",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Athul",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 GODZE XMD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/7upyfd.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> എന്റെ ഉള്ളിൽ ജീവന്റെ തുടിപ്പ് ഇപ്പോഴും ഉണ്ടെടാ.. നീ വിചാരിക്കുന്നത് ഞാൻ മരിച്ചു എന്നാണോ?? എന്തിനാടാ നീയും മരിക്കില്ലേ ഒരുനാൾ🥹",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "919497883473",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
