const Dlang = require("discordbot-script");
const discordScript = require("discordbot-script");

const bot = new discordScript({
  token: "vrmB4GvQ8NS3QA5xlO275mecLW_frwCs",
  prefix: ["$getServerVar[prefix]"]
});

bot.Variables({
  prefix: "."
});

bot.MessageEvent();

bot.Command({
  name: "ping",
  code: `
$description[
$addField[CPU usage:;
<:clydebot:715659353981452379> $cpu]
]

$addField[Ping:;<:PING:712265061166481448> $replaceText[$ping;-;]ms, $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[true;$checkCondition[$replaceText[$ping;-;]>350];Okey, contact my developer. He probably needs to get me on a virtual server lol];$checkCondition[$replaceText[$ping;-;]>250];Not very good];$checkCondition[$replaceText[$ping;-;]>150];Eh...];$checkCondition[$replaceText[$ping;-;]>100];Not bad];$checkCondition[$replaceText[$ping;-;]>50];Pretty good!];$checkCondition[$replaceText[$ping;-;]<50];Excellent!]
]
  `
});

bot.Command({
  name: "prefix",
  code: `
 $setServerVar[prefix;$message[]]
Set prefix to \`$message[]\`
$onlyAdmin[You need admin silly]
  `
});

bot.Command({
  name: "botinfo",
  code: `
$title[Deluxe Bot Info]


$addField[Ping;$pingms]

$addField[RAM;$memoryMB/12GB]

$addField[Language;DBS.js]

$addField[Member Count;$allMembersCount]

$addField[Server Count;$serverCount]

$addField[Developers;Kory#6969
Speshul#0420]

$addField[Uptime;$uptime]

$addField[Bot Name;Deluxe#7741
742851130354303027]
`
});

bot.Command({
  name: "dog",
  code: ` $api[https://dog.ceo/api/breeds/image/random/;message] 
`
});

bot.Command({
  name: "invite",
  code: `
 $title[invite me to your server]
 $description[{hyper:Click here:https://discord.com/api/oauth2/authorize?client_id=742851130354303027&permissions=8&scope=bot}]
  `
});

bot.Status(
  {
    1: {
      description: "MineCraft :D",
      type: "STREAMING"
    },
    1: {
      description: "MineCraft",
      type: "STREAMING"
    }
  },
  13000
);

bot.Command({
  name: "clear",
  code: `
Cleared $message[] messages!
$onlyPerms[managemessages;You Don't Have Manage Message Permission]
$deletecommand
$deleteIn[3s]
$clear[$message[]]
$cooldown[3s;Don't Spam That Command]
`
});

bot.Command({
  name: "whois",
  code: `
$title[Who is]
  $description[
  
**Username/ID**
$username[$findUser[$message[]]]#$discriminator[$findUser[$message[]]]
$findUser[$message[]]
 **User's Platform**
$platform[$findUser[$message[]]]
**Activity**
$activity[$findUser[$message[]]]
**Status**
$status[$findUser[$message[]]]
**Created**
$creationTime[$findUser[$message[]]]
**Creation Date**
$creationDate[$findUser[$message[]]]
**Highest role**
<@&$highestRole[$findUser[$message[]]]>
  ]
`
});

bot.Command({
  name: "roleall",
  code: `
$massRole[add;$mentionedRoles[1]]
Done! The role <@&$mentionedRoles[1]> has been given to all members!]
`
});

bot.Command({
  name: "meme",
  code: `
$title[$api[https://meme-api.herokuapp.com/gimme;title]]
$description[{hyper:Source:$api[https://meme-api.herokuapp.com/gimme;postLink]}]
$image[$api[https://meme-api.herokuapp.com/gimme;url]]
`
});

bot.Command({
  name: "poll",
  code: `
$title[Poll!]
$onlyAdmin[Only admins/moderators can use this command]
$addReactions[✅;🤷;❌]
$description[$message[]]
`
});

bot.Command({
  name: "fact",
  code: `
$title[$message[1]]
$description[$api[https://some-random-api.ml/facts/$message[1];fact]]
    $image[$api[https://some-random-api.ml/img/$message[1];link]]


      $onlyIfMessageContains[$toLowercase[$message[1]];cat;dog;fox;bird;panda;koala;racoon;{title:Usage:} {description:$getServerVar[prefix]fact \`animal\`} {footer:Types: cat ,dog, fox, bird, panda, racoon, koala} {color:RED}]
            
        $onlyIf[$message[1]!=;{title:Usage:} {description:$getServerVar[prefix]fact \`animal\`} {footer:Types: cat ,dog, fox, bird, panda, racoon, koala} {color:RED}]
`
});

bot.Command({
  name: "wink",
  code: `
$api[https://some-random-api.ml/animu/wink;link]
`
});

bot.Command({
  name: "hug",
  code: `
$title[AWW $username[] hugged $username[$mentioned[1]]]
$image[$api[https://some-random-api.ml/animu/hug;link]]
`
});

bot.Command({
  name: "pikachu",
  code: `
$title[here's a random pikachu gif/pic <3]
$image[$api[https://some-random-api.ml/img/pikachu;link]]
`
});

bot.SpaceCommand({
  name: "de",
  code: `
$description[You can ping me to use me as a prefix like:**\<@!742851130354303027>help**\
Or you can just use my set prefix: \`$getServerVar[prefix]\`]
    $onlyIfMessageContains[$mentioned[1];742851130354303027;]
    `
});

//this shit is annoying as

bot.Command({
  name: "help",
  code: `
$title[Help | Commands]
$description[
Prefix:  $getServerVar[prefix]




$addField[__**Waifu**__;
<all have $getServerVar[prefix]waifu before>
bite, blush, bully, cringe, cry, dance, highfive, hug, kiss, lick, nom, pat, poke, slap, smug, wink




$addField[__**Fun Commands**__;
fact <animalName>, meme, hug, wink, pikachu




$addField[__**Utilities**__;
ping, invite, whois, botinfo, prefix]]]]
`
});

bot.Command({
  name: "kick",
  code: `
$kick[$mentioned[1]]
<@$mentioned[1]> kicked by $username[$authorID]#$discriminator[$authorID]]
$onlyPerms[admin;You're not a admin, if you want to submit a kick report dm an admin]
 `
});

bot.Command({
  name: "ban",
  code: `
$ban[$mentioned[1]]
<@$mentioned[1]> banned by $username[$authorID]#$discriminator[$authorID]]
$onlyPerms[admin;You're not a admin, if you want to submit a ban report dm an admin]
 `
});

bot.Command({
  name: "guildnames",
  code: `
$guildNames[]
 `
});

bot.Command({
  name: "waifu",
  code: `
      $color[#00FFFF]
      $title[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowercase[$message[1]];bite;$username[] bit $username[$findUser[$message[2]]]];bully;$username[] is bullying $username[$findUser[$message[2]]]];highfive;$username[] gave $username[$findUser[$message[2]]] a highfive!];hug;$username[] gave $username[$findUser[$message[2]]] a hug];kiss;$username[] gave $username[$findUser[$message[2]]] a kiss];lick;$username[] licked $username[$findUser[$message[2]]]];pat;$username[] gave $username[$findUser[$message[2]]] a little pat];poke;$username[] poked $username[$findUser[$message[2]]]];slap;$username[] slapped tf out of $username[$findUser[$message[2]]]];wink;$username[] winked at $username[$findUser[$message[2]]]]]
        $image[$api[https://waifu.pics/api/$toLowercase[$message[1]];url]]

          $onlyIfMessageContains[$toLowercase[$message[1]];bully;cry;hug;kiss;lick;pat;smug;highfive;nom;bite;wink;slap;poke;dance;cringe;blush;{title:Usage:} {description:$getServerVar[prefix]waifu \`type\`} {footer:Types: bite, blush, bully, cringe, cry, dance, highfive, hug, kiss, lick, nom, pat, poke, slap, smug, wink} {color:RED}]
            
             $onlyIf[$message[1]!=;{title:Usage:} {description:$getServerVar[prefix]waifu \`type\`} {footer:Types: bite, blush, bully, cringe, cry, dance, highfive, hug, kiss, lick, nom, pat, poke, slap, smug, wink} {color:RED}]
      `
});
