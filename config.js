// to understand how to use app id and image keys, follow https://github.com/slowwdev/Discord-Selfbot-RPC/wiki/Installation

module.exports = {
    // spotify/game/twitch
    "mode": "twitch", 
    // dnd/online/idle
    "status": "online",

    "game": {
        "applicationID": "1214827514481090570",

        "name": "DemonKing", // title
        "details": "Working ON", // first row below title
        "state": "Demon-Tools", // row below first row

        "largeImageKey": "demon", // Large Image
        "largeImageText": "DemonKing", // the text when img surrounded (default is largeimage name in dev portal)

        "smallImageKey": "fd", // Small Image
        "smallImageText": "FD Ai",
        
        // Date.now() Epoch timestamps
        "startTimestamp": "", // time elapsed since this timestamp (increase ++)
        "endTimestamp": "" // time left since this timestamp (decrease --)
    },
    "twitch": {
        "applicationID": "1214827514481090570",
        "url": "https://twitch.tv/discord", // twitch channel link

        "details": "ShadowStriker", // title
        "state": "myprofile.darkdemon.tech", // first row below title (playing ...)

        "largeImageKey": "ss", // in dev portal, upload img then name it with the name you want to appear with image is surrounded
        "largeImageText": "ShadowStriker", // use this to replace text when img surrounded it will also be second row below title, if you dont want the row dont use it and setup text via dev portal (img name)
        
        "smallImageKey": "fd",
        "smallImageText": "FD Ai",

        "startTimestamp": "",
        "endTimestamp": ""
    },
    "spotify": {
        "name": "", // for exemple listening to {name} instead of listening to spotify
        "details": "", // title
        "state": "", // row below title

        "largeImageKey": "", // https://github.com/mewzax/Discord-RPC-Selfbot/wiki/Spotify-API
        "largeImageText": "", // will also be second row below title
        
        "smallImageKey": "",
        "smallImageText": "",
        
        "startTimestamp": "",
        "endTimestamp": "",
    }
}
