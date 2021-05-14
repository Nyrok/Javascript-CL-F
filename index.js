const functionsFile = require("./functions.js");
const {
    Client,
    MessageEmbed
} = require("discord.js");
require("colors");
const figlet = require("figlet");
const client = new Client();
const config = require("./config.json");
const token = config.token;
const prefix = config.prefix;
const color = config.color;
const statutType = config.statut.type;
client.login(token);
const top_citations = ["Un problème sans solution est un problème mal posé.", "Une personne qui n’a jamais commis d’erreurs n’a jamais tenté d’innover.", "Ce n’est pas que je suis si intelligent, c’est que je reste plus longtemps avec les problèmes.", "Rien n’est plus proche du vrai que le faux.", "Si les faits ne correspondent pas à la théorie, changez les faits.", "Ce n’est pas à cause de l’attraction terrestre que des gens tombent… amoureux !", "Le problème aujourd’hui n’est pas l’énergie atomique, mais le coeur des hommes.", "Si vous ne pouvez expliquer un concept à un enfant de six ans, c’est que vous ne le comprenez pas complètement.", "L’Etat est notre serviteur et nous n’avons pas à en être les esclaves.", "Il n’existe que deux choses infinies, l’univers et la bêtise humaine… mais pour l’univers, je n’ai pas de certitude absolue."];

client.on("ready", () => {
    console.log(figlet.textSync("<CL-F>\nBY NYROK").rainbow);
    if (config.citations === true) {
        if (!(statutType === "PLAYING" || statutType === "WATCHING" || statutType === "LISTENING" || statutType === "STREAMING")) statutType = "LISTENING";
        if (statutType === "STREAMING") {
            setInterval(function () {
                let random_top_citations = top_citations[Math.floor(Math.random() * top_citations.length)];
                client.user.setActivity(random_top_citations, {
                    type: statutType,
                    url: "https://www.twitch.tv/nyrok_le_streamer_zebi"
                });
            }, 10000)
        }
        setInterval(function () {
            let random_top_citations = top_citations[Math.floor(Math.random() * top_citations.length)];
            client.user.setActivity(random_top_citations, {
                type: statutType
            });
        }, 10000)
    } else if (config.citations === false) {
        if (!(statutType === "PLAYING" || statutType === "WATCHING" || statutType === "LISTENING" || statutType === "STREAMING")) statutType = "LISTENING"
        setInterval(function () {
            client.user.setActivity(config.statut.message, {
                type: statutType
            });
        }, 10000)
    }
})

client.on("message", message => {
    let menu = new MessageEmbed()
    if (message.content.startsWith(prefix + "menu") || message.content.startsWith(prefix + "help")) {
        return message.channel.send(menu.setTitle("(MENU)").setURL("https://github.com/Nyrok")
            .addField("Commandes disponibles :", `
\`${prefix}crédits\` - Afficher les crédits.
\`${prefix}calcul\` - Calculer via une formule de mathématique.
\`${prefix}hypothénuse-pythagore\` - Calculer l'hypothénuse d'un triangle rectangle grâce au théorème de Pythagore.
\`${prefix}côté-pythagore\` - Calculer le côté d'un triangle rectangle grâce au théorème de Pythagore.
\`${prefix}réciproque-pythagore\` - Savoir si un triangle est rectangle grâce à la réciproque du théorème de Pythagore.
\`${prefix}aire-triangle\` - Calculer l'aire d'un triangle.
\`${prefix}aire-trapèze\` - Calculer l'aire d'un trapèze.
\`${prefix}aire-cercle\` - Calculer l'aire d'un cercle.
\`${prefix}aire-parallèlogramme\` - Calculer l'aire d'un parallèlogramme.
\`${prefix}aire-rectangle\` - Calculer l'aire d'un rectangle.
**[INFO] - Pour savoir comment utiliser la commande tapez juste la commande.**
`)
            .setColor(color)
            .setFooter("@Nyrok10 on Twitter", "https://cdn.discordapp.com/emojis/590848931852713984.png?v=1"))
    }

    if (message.content.startsWith(prefix + "calcul")) {
        let args = message.content.split(" ").slice(1)
        if (!args[0]) return message.reply(`Utilisation de la commande : **${prefix}calcul <premier_nombre> <signe> <deuxième_nombre>**`)
        let first = parseInt(args[0])
        let signe = args[1]
        let second = parseInt(args[2])
        if (isNaN(first) || isNaN(second) || !(first && second)) return message.reply("Veuillez respecter le format de la commande : \n**" + prefix + "calcul <premier_nombre> <signe> <deuxième_nombre>**")
        if (!(signe === "+" || signe === "-" || signe === "x" || signe === "/" || signe === "*")) return message.reply("L'opérateur du calcul n'est pas bon.")
        else if (signe === "x") signe = "*";
        let result = functionsFile.simpleCalculatrice(first, second, signe)
        if (signe === "*") signe = "x";
        return message.reply(`Le résultat de **${first} ${signe} ${second} = ${result}**.`)
    }
    if (message.content.startsWith(prefix + "crédits")) {
        let crédits = new MessageEmbed()
        return message.channel.send(crédits.setTitle("(CRÉDITS)").setURL("https://github.com/Nyrok")
            .addField("Créateur : Nyrok", `**Remerciements :**
        \`Seryû-Ub\` - github.com/Seryu-Ub
        \`Plattyz\` - github.com/Plattyz
        \`Zelly\` - github.com/ZelliDev
`)
            .setColor(color)
            .setFooter("@Nyrok10 on Twitter", "https://cdn.discordapp.com/emojis/590848931852713984.png?v=1"))
    }
    if (message.content.startsWith(prefix + "hypothénuse-pythagore")) {
        let args = message.content.split(" ").slice(1)
        if (!args[0]) return message.reply(`Utilisation de la commande : **${prefix}hypothéhnuse-pythagore <côté A>, <côté B>**`)
        let a = `${args[0]}`
        let b = `${args[1]}`
        let côté_a = parseInt(a.replace(",", ""))
        let côté_b = parseInt(b.replace(",", ""))
        if (isNaN(côté_a) || isNaN(côté_b) || !(côté_a && côté_b)) return message.reply("Veuillez respecter le format de la commande : \n**" + prefix + "hypothénuse-pythagore <côté A>, <côté B>**")
        let result = functionsFile.hypothénusePythagore(côté_a, côté_b)
        return message.reply(`L'hypothénuse du triangle rectangle ayant pour côté A (**${côté_a}**) et pour côté B (**${côté_b}**) est de **${result}**.`)
    }
    if (message.content.startsWith(prefix + "côté-pythagore")) {
        let args = message.content.split(" ").slice(1)
        if (!args[0]) return message.reply(`Utilisation de la commande : **${prefix}côté-pythagore <côté A>, <hypothénuse>**`)
        let a = `${args[0]}`
        let b = `${args[1]}`
        let côté_a = parseInt(a.replace(",", ""))
        let hypothénuse = parseInt(b.replace(",", ""))
        if (isNaN(côté_a) || isNaN(hypothénuse) || !(côté_a && hypothénuse)) return message.reply("Veuillez respecter le format de la commande : \n**" + prefix + "côté-pythagore <côté A>, <hypothénuse>**")
        let result = functionsFile.côtéPythagore(côté_a, hypothénuse)
        return message.reply(`Le côté du triangle rectangle ayant pour côté A (**${côté_a}**) et pour hypothénuse (**${hypothénuse}**) est de **${result}**.`)
    }
    if (message.content.startsWith(prefix + "réciproque-pythagore")) {
        let args = message.content.split(" ").slice(1)
        if (!args[0]) return message.reply(`Utilisation de la commande : **${prefix}réciproque-pythagore <côté A>, <côté B>, <hypothénuse>**`)
        let a = `${args[0]}`
        let b = `${args[1]}`
        let h = `${args[2]}`
        let côté_a = parseInt(a.replace(",", ""))
        let côté_b = parseInt(b.replace(",", ""))
        let hypothénuse = parseInt(h.replace(",", ""))
        if (isNaN(côté_a) || isNaN(côté_b) || isNaN(hypothénuse) || !(côté_a && côté_b && hypothénuse)) return message.reply("Veuillez respecter le format de la commande : \n**" + prefix + "réciproque-pythagore <côté A>, <côté B>, <hypothénuse>**")
        let result = functionsFile.réciproquePythagore(côté_a, côté_b, hypothénuse)
        return message.reply(result)
    }
    if (message.content.startsWith(prefix + "aire-triangle")) {
        let args = message.content.split(" ").slice(1)
        if (!args[0]) return message.reply(`Utilisation de la commande : **${prefix}aire-triangle <base>, <hauteur>**`)
        let a = `${args[0]}`
        let b = `${args[1]}`
        let base = parseInt(a.replace(",", ""))
        let hauteur = parseInt(b.replace(",", ""))
        if (isNaN(base) || isNaN(hauteur) || !(base && hauteur)) return message.reply("Veuillez respecter le format de la commande : \n**" + prefix + "aire-triangle <base>, <hauteur>**")
        let result = functionsFile.aireTriangle(base, hauteur)
        return message.reply(`L'aire de ton triangle est de **${result}**`)
    }
    if (message.content.startsWith(prefix + "aire-trapèze")) {
        let args = message.content.split(" ").slice(1)
        if (!args[0]) return message.reply(`Utilisation de la commande : **${prefix}aire-trapèze <base A>, <base B>, <hauteur>**`)
        let a = `${args[0]}`
        let b = `${args[1]}`
        let h = `${args[2]}`
        let base_a = parseInt(a.replace(",", ""))
        let base_b = parseInt(b.replace(",", ""))
        let hauteur = parseInt(h.replace(",", ""))
        if (isNaN(base_a) || isNaN(base_b) || isNaN(hauteur) || !(base_a && base_b && hauteur)) return message.reply("Veuillez respecter le format de la commande : \n**" + prefix + "aire-trapèze <base A>, <base B>, <hauteur>**")
        let result = functionsFile.aireTrapèze(base_a, base_b, hauteur)
        return message.reply(`L'aire de ton trapèze est de **${result}**`)
    }
    if (message.content.startsWith(prefix + "aire-cercle")) {
        let args = message.content.split(" ").slice(1)
        if (!args[0]) return message.reply(`Utilisation de la commande : **${prefix}aire-cercle <rayon>**`)
        let r = `${args[0]}`
        let rayon = parseInt(r.replace(",", ""))
        if (isNaN(rayon)) return message.reply("Veuillez respecter le format de la commande : \n**" + prefix + "aire-cercle <rayon>**")
        let result = functionsFile.aireCercle(rayon)
        return message.reply(`L'aire de ton cercle est de **${result}**`)
    }
    if (message.content.startsWith(prefix + "aire-parallèlogramme")) {
        let args = message.content.split(" ").slice(1)
        if (!args[0]) return message.reply(`Utilisation de la commande : **${prefix}aire-parallèlogramme <côté>, <hauteur>**`)
        let a = `${args[0]}`
        let b = `${args[1]}`
        let côté = parseInt(a.replace(",", ""))
        let hauteur = parseInt(b.replace(",", ""))
        if (isNaN(côté) || isNaN(hauteur) || !(côté && hauteur)) return message.reply("Veuillez respecter le format de la commande : \n**" + prefix + "aire-parallèlogramme <côté>, <hauteur>**")
        let result = functionsFile.aireTriangle(côté, hauteur)
        return message.reply(`L'aire de ton parallèlogramme est de **${result}**`)
    }
    if (message.content.startsWith(prefix + "aire-rectangle")) {
        let args = message.content.split(" ").slice(1)
        console.log(args)
        if (!args[0]) return message.reply(`Utilisation de la commande : **${prefix}aire-rectangle <longueur>, <largeur>**`)
        let a = `${args[0]}`
        let b = `${args[1]}`
        let longueur = parseInt(a.replace(",", ""))
        let largeur = parseInt(b.replace(",", ""))
        if (isNaN(longueur) || isNaN(largeur) || !(longueur && largeur)) return message.reply("Veuillez respecter le format de la commande : \n**" + prefix + "aire-rectangle <longueur>, <largeur>**")
        let result = functionsFile.aireTriangle(longueur, largeur)
        return message.reply(`L'aire de ton rectangle est de **${result}**`)
    }
})