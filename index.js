register("chat", function(event) {
  var msg = ChatLib.getChatMessage(event, true).toString();
  if(msg.removeFormatting().startsWith("Guild > ")){
  	cancel(event)
    //msg = msg.replace("", "")
    msg = msg.replace("&r&2Guild > &a[VIP] IceEssenceBot &6[OFF]&f: ","§fIce§bEssence §8Dis§9cord §f> §b")
    msg = msg.replace(": ", "&f: ")
  	ChatLib.chat(new Message(msg))
  }
})