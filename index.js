register("chat", function(event) {
  var msg = ChatLib.getChatMessage(event, true).toString();
  if(msg.removeFormatting().startsWith("Guild > ")){
  	cancel(event)
    //msg = msg.replace("", "")
    msg = msg.replace("&b[MVP&9+&b] idkwhat2plus2is", "&5[&dMath&0+++&5] &ci&6d&ek&aw&9h&5a&ct&62&ep&al&9u&5s&c2&6i&es")
    msg = msg.replace("&6[MVP&9++&6] Necron1sBad", "&6[&1Rat&0+++&6] &eN&ae&9c&5r&do&cn&6I&es&aB&9a&5d")
    msg = msg.replace("&a[VIP&6+&a] KlaasNiphaas", "&f[&4Cat&0+++&f] &2KlaasNiphaas")
    msg = msg.replace("&r&2Guild > &a[VIP] IceEssenceBot &6[OFF]&f: ","§fIce§bEssence §8Dis§9cord §f> §b")
    msg = msg.replace(": ", "&f: ")
  	ChatLib.chat(new Message(msg))
  }
})