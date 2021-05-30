let ranks = JSON.parse(FileLib.getUrlContent("https://raw.githubusercontent.com/MaybeNotThomas/iebridge/main/ranks.json"))

register("chat", function(event) {
  var msg = ChatLib.getChatMessage(event, true).toString();
  if(msg.removeFormatting().startsWith("Guild > ")){
  	cancel(event)
    for (let key in ranks) {
      if (ranks.hasOwnProperty(key)) {
        if (msg.includes(String(key))) {
          msg = msg.replace(String(key), String(ranks[String(key)]))
        }
      }
    }
    msg = msg.replace("&r&2Guild > &a[VIP] IceEssenceBot &6[OFF]&f: &r","&fIce&bEssence &8Dis&9cord &f> &b")
    msg = msg.replace(": ", "&f: ")
    ChatLib.chat(msg)
  }
})

register("command", () => {
  let ranks = JSON.parse(FileLib.getUrlContent("https://raw.githubusercontent.com/MaybeNotThomas/iebridge/main/ranks.json"))
  ChatLib.chat(JSON.stringify(ranks))
}).setName("reload_name_list")

register("command", () => {
  ChatLib.chat(new Message("&r&2Guild > &b[MVP&9+&b] idkwhat2plus2is&f: asd").setRecursive(true))
}).setName("test_msg")