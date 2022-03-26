# soundboard-bot

#### Project Abstract
Discord bot for playing sound effects in voice channel.

#### Features
- Emoji-based soundboard buttons as primary user interface
- Built-in sound effects and categories
- Logs user button presses
  * Creates message thread for tracking user commands
  * Auto-archives and locks thread on leave
- Notes on using the bot
  * Bot requires all permissions listed on the invite
  * Bot will be added to the same Voice Channel (VC) as the user
  * User must be in a VC to add the bot to VC
  * User must be in the same VC as the bot to play sounds
  * User must have at least one of the required roles (specified on setup) to use the bot

#### Bot Invite Link
https://discord.com/oauth2/authorize?client_id=937583318604578867&scope=bot&permissions=397312797696

#### Example Screenshot
![soundboard-buttons.png](https://github.com/sabinach/soundboard-bot/blob/main/img/soundboard-buttons.png)

-----------------------------

## Overview

#### Specs
- NodeJS (>v16)
- Discord.js (v13)

#### Useful Links
- [Discord API](https://discord.com/developers/docs/intro)
- [Discord Permissions Calculator](https://discordapi.com/permissions.html)
- [Discord.js Docs](https://discord.js.org/#/docs/discord.js/stable/general/welcome)
- [Discord.js Guide](https://discordjs.guide/)

#### Useful Resources
- https://emojipedia.org/
  * emoji name = shortcode ie. `:emojiName:`
  * emoji unicode = click `COPY` on the website
- Sound Effects:
  * https://www.freesoundeffects.com/
  * https://mixkit.co/
- Sound Editing:
  * https://www.audacityteam.org/

#### Inspired By
- [Mini](https://tomspander.com/mini/) - for their seemless discord api message component design and user experience
- The many Discord Bot Calculators I've seen online

## Quick Start

#### To Setup
1. Git clone this repo
2. `npm ci`
3. Manual Configuration   
   - Use the `config/template.json` template to hardcode your desired guild settings. Note that:
      * Each new config file created will be named: `guildId.json`, where `guildId` (int) is the guild id. This can be found in your discord server under: Server Settings -> Widget -> Server ID
      * `guildName` (string) is the name of the discord server, when the bot first joins the server.
      * `rolesId` (string[]) is the numeric role id. This can be found by typing in `\@RoleName` in any discord channel. This will generate `<@&roleId>` on message send, where a newline `- "roleId"` (note the added tick and quotation marks!) is what you will put under `rolesIds` in the yaml file. Note that the bot can only be used by users with roles specified under `rolesIds` on the server.
4. Auto Configuration
   - Invite the bot to your desired server using the `Bot Invite Link` specified above, and type `~settings` wen the bot has joined the server. This should generate all the necessary config files described under `3. Manual Configuration`.
 
#### To Run Locally
- Make sure that `.env` file exists in the root directory and add the following to the file:    
  * `TOKEN="value"` where `value` can be found in the [Developer's Portal](https://discord.com/developers/applications) under `Applications` -> `SoundboardBot` -> `Bot` -> `Token` 
- `npm run dev`

#### To Deploy
- Git push to this repo
- `git push heroku main`

## Required Bot Permissions
- View Channels
- Send Messages
- Send Messages in Threads
- Create Public Threads
- Create Private Threads
- Manage Messages
- Manage Threads
- Use Application Commands
- Connect
- Speak
- Deafen Members
- Move Members
