let ranks = JSON.parse(FileLib.getUrlContent("https://raw.githubusercontent.com/MaybeNotThomas/iebridge/main/ranks.json"))
let names = JSON.parse(FileLib.getUrlContent("https://raw.githubusercontent.com/MaybeNotThomas/iebridge/main/names.json"))
let alon_ranks = JSON.parse(FileLib.getUrlContent("https://raw.githubusercontent.com/alon1396/AlonAddons/main/chatreplace.json"))

register("chat", function(event) {
  let msg = ChatLib.getChatMessage(event, true).toString();
  if(msg.removeFormatting().startsWith("Guild > ")){
    cancel(event)
    //update name list
    if (msg.removeFormatting().startsWith("Guild > [MVP+] idkwhat2plus2is [SWEAT]: .update_name_list") | msg.removeFormatting().startsWith("Guild > [VIP+] KlaasNiphaas [OFF]: .update_name_list")) {
      ranks = JSON.parse(FileLib.getUrlContent("https://raw.githubusercontent.com/MaybeNotThomas/iebridge/main/ranks.json"))
      names = JSON.parse(FileLib.getUrlContent("https://raw.githubusercontent.com/MaybeNotThomas/iebridge/main/names.json"))
      alon_ranks = JSON.parse(FileLib.getUrlContent("https://raw.githubusercontent.com/alon1396/AlonAddons/main/chatreplace.json"))
    }
    //guild bridge replace
    msg = msg.replace("&r&2Guild > &a[VIP] IceEssenceBot &6[OFF]&f: &r","&2Guild Bridge > &7")
    //replace dc name with in game name
    if (msg.removeFormatting().startsWith("Guild Bridge >")) {
      for (let key in names) {
        if (names.hasOwnProperty(key)) {
          if (msg.includes(String(key))) {
            msg = msg.replace(String(key), String(names[String(key)]))
          }
        }
      }
    }
    msg = msg.replace(": ", "&f: ")
    //replace in game name with custom names
    for (let key in ranks) {
      if (ranks.hasOwnProperty(key)) {
        if (msg.includes(String(key))) {
          msg = msg.replace(String(key), String(ranks[String(key)]))
        }
      }
    }
    //stop double msg when it stacks with alonaddons
    //un-comment if u are having double msgs
    //if (!msg.removeFormatting().startsWith("Guild Bridge >")) {
    //  for (let key in alon_ranks) {
    //    if (alon_ranks.hasOwnProperty(key)) {
    //      if (msg.removeFormatting().includes(String(key))) {
    //        return
    //      }
    //    }
    //  }
    //}
    ChatLib.chat(msg)
  } else if (msg.includes("&ejoined the guild!")) {
    ChatLib.say("/gc Hello! Welcome to the Guild! We have a custom ct module (/ct import IEBridge) and a Guild only fragbot. You can use the fragbot by partying the bot and typing i!fr in Guild chat. Enjoy your stay! Also simp for Klaas :D")
  }
})

//simulate update msg
register("command", () => {
  ChatLib.simulateChat("&r&2Guild > &b[MVP&9+&b] idkwhat2plus2is &6[SWEAT]&f: .update_name_list")
}).setName("update_name_list")

register("command", (...args) => {
  ChatLib.simulateChat(args.slice(0, args.length).join(" ")+" &r&ejoined the guild!&r")
}).setName("guild_join")

register("command", () => {
  ChatLib.say("/party IceEssenceBot")
  setTimeout(() => {
    ChatLib.say("/gc i!fr")
  }, 500)
}).setName("icefrag")

register("command", () => {
  ChatLib.say("/party IceEssenceBot")
  setTimeout(() => {
    ChatLib.say("/gc i!fr Simp")
  }, 500)
}).setName("icefrag1")

register("command", () => {
  ChatLib.say("/party IceEssenceBot")
  setTimeout(() => {
    ChatLib.say("/gc i!fr Simp 4 Klaas :D")
  }, 500)
}).setName("icefrag2")

register("command", () => {
  ChatLib.say("/party IceEssenceBot")
  setTimeout(() => {
    ChatLib.say("/gc i!fr / / / / /")
  }, 500)
}).setName("icefrag3")

register("command", () => {
  ChatLib.say("/party IceEssenceBot")
  setTimeout(() => {
    ChatLib.say("/gc i!fr Simping for Klaas rn very pog")
  }, 500)
}).setName("icefrag4")
