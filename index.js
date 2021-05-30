let ranks = JSON.parse(FileLib.getUrlContent("https://raw.githubusercontent.com/MaybeNotThomas/iebridge/main/ranks.json"))
let names = JSON.parse(FileLib.getUrlContent("https://raw.githubusercontent.com/MaybeNotThomas/iebridge/main/names.json"))
let alon_ranks = JSON.parse(FileLib.getUrlContent("https://raw.githubusercontent.com/alon1396/AlonAddons/main/chatreplace.json"))

register("chat", function(event) {
  let msg = ChatLib.getChatMessage(event, true).toString();
  if(msg.removeFormatting().startsWith("Guild > ")){
    cancel(event)
    if (msg.removeFormatting().startsWith("Guild > [MVP+] idkwhat2plus2is [SWEAT]: .update_name_list")) {
      ranks = JSON.parse(FileLib.getUrlContent("https://raw.githubusercontent.com/MaybeNotThomas/iebridge/main/ranks.json"))
      names = JSON.parse(FileLib.getUrlContent("https://raw.githubusercontent.com/MaybeNotThomas/iebridge/main/names.json"))
      alon_ranks = JSON.parse(FileLib.getUrlContent("https://raw.githubusercontent.com/alon1396/AlonAddons/main/chatreplace.json"))
    }
    msg = msg.replace("&r&2Guild > &a[VIP] IceEssenceBot &6[OFF]&f: &r","&2Guild Bridge > &7")
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
    for (let key in ranks) {
      if (ranks.hasOwnProperty(key)) {
        if (msg.includes(String(key))) {
          msg = msg.replace(String(key), String(ranks[String(key)]))
        }
      }
    }
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
  }
})

register("command", () => {
  ChatLib.simulateChat("&r&2Guild > &b[MVP&9+&b] idkwhat2plus2is &6[SWEAT]&f: .update_name_list")
}).setName("update_name_list")

