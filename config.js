const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349040234698";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_36_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDc4LFxuICAgICAgICA5MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDkwLFxuICAgICAgICAxODUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc1LFxuICAgICAgICA1OCxcbiAgICAgICAgMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDk0LFxuICAgICAgICA4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDc3LFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNixcbiAgICAgICAgODUsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDg2LFxuICAgICAgICAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDc2LFxuICAgICAgICA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMVzJsVzZDRTl6SzRSZTJ4TW1LR0VOU2Y2YlVJT3AydFpxejh4ekdvWCtBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQaWcxckt6alE0S2IzMl9qQmpBdTdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJlMGUzNWI5LWUyNWYtNGViZi04NzQyLTY0NGY1MTFmM2Y0NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICAyMjAsXG4gICAgICAxMyxcbiAgICAgIDE0MyxcbiAgICAgIDE3OCxcbiAgICAgIDk5LFxuICAgICAgNzYsXG4gICAgICA1NyxcbiAgICAgIDQzLFxuICAgICAgMTc4LFxuICAgICAgMTgsXG4gICAgICAzNSxcbiAgICAgIDIxNyxcbiAgICAgIDI0MSxcbiAgICAgIDEzNyxcbiAgICAgIDI0NCxcbiAgICAgIDIzMyxcbiAgICAgIDE5NixcbiAgICAgIDE0OCxcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICAxMTAsXG4gICAgICAyMjAsXG4gICAgICAxMTEsXG4gICAgICA4NCxcbiAgICAgIDI2LFxuICAgICAgMTczLFxuICAgICAgNjQsXG4gICAgICAyNDAsXG4gICAgICAyNTMsXG4gICAgICAxNjEsXG4gICAgICAxMDcsXG4gICAgICAxNjMsXG4gICAgICAxMjksXG4gICAgICA2MixcbiAgICAgIDE3LFxuICAgICAgMzksXG4gICAgICAxMjksXG4gICAgICA0MSxcbiAgICAgIDIxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4QkFQMjQ5RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0MDIzNDY5ODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQG9mZmljaWFsR0doYWNrZXJz4oCi4oiaXlwiLFxuICAgIFwibGlkXCI6IFwiMjM4ODI2NDIxMjM5ODg2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSy9pdXQwQkVOWEErYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5bC9zQURRcHlsTGpyMnA1Z2Q2QzRnK3RvOHVuWFF5bkVzZC9oNWI3N1ZjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhsYjNUbk1qS3FEZHpLdkRHNitjYW5JbkY2QTlpWFk0TVhuR3kxYUhNMHRnYnI3b0JIZTJBVmNqYmZ2WW52ZElaeVc1TFBYRmhjS3ZuNVRQWW5MUkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZKUnZYV0FnNXkrdHJjV0ZyeEtrNHI2ckZVVVhOTkRyV3hSTHF1L0tsVmVTN1BUd3FhaG1zWmdsaEVxVTRSWnZxd1dRZDlYZW1yeExOcDhQREx3Z2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDAyMzQ2OTg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2NTUzODVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
