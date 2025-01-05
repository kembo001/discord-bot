# Discord Music Bot 🎵

This Discord Music Bot is a fun and interactive tool designed to enhance user engagement in Discord servers by playing songs whenever specific keywords are sent in the chat. Built using **Node.js**, the bot listens for predefined keywords and responds by playing the corresponding song, making it ideal for gaming communities, social groups, or any server looking for a unique, music-driven experience.

---

## 🚀 Features

- **Keyword-Based Music Playback**: Plays songs when specific keywords are detected in chat.
- **Customizable Keyword-Song Mapping**: Easily update the bot to respond to new keywords.
- **Efficient Real-Time Performance**: Built with Node.js for fast and responsive interactions.
- **Seamless Discord Integration**: Simple setup for Discord servers.

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/discord-music-bot.git
   cd discord-music-bot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

    
3. Create a `.env` file in the root directory and add your Discord bot token:
   ```env
   DISCORD_TOKEN=your_discord_bot_token
   ```
    
4.  Run the bot:
Install dependencies:
   ```bash
   node index.js
   ```

## 🛠️ Setup

1.  **Discord Developer Portal**:
    
    *   Go to the Discord Developer Portal.
    *   Create a new application and generate a bot token.
    *   Invite the bot to your server using its OAuth2 URL.
2.  **Audio Files**:
    
    *   Place your audio files in the `Songs` folder.
    *   Update the `SONG_PATH` in `index.js` to point to the correct file.


## 🤖 Usage

*   Start the bot using `node index.js`.
*   When a user sends a message containing the keyword (e.g., "green"), the bot will:
    *   Reply with a message.
    *   Join the user's voice channel.
    *   Play the corresponding song.



## 📝 License

This project is licensed under the MIT License.


## 🙌 Acknowledgments

*   discord.js for making Discord bot development easy.
*   [@discordjs/voice](https://github.com/discordjs/voice) for voice channel integration.

