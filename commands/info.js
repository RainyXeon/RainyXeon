import prettyMilliseconds from "../libs/pretty_ms/index.js"

const command = {
  name: "info",
  desc: "My current infomation",
  usage: null,

  run: (e, commandList) => {
    const projects = [
      `<a href="https://github.com/LunaticSea" target="_blank">LunaticSea Ecosystem</a>`,
      `<a href="https://github.com/RainyXeon/ByteBlaze" target="_blank">ByteBlaze</a>`,
      `<a href="https://github.com/RainyXeon/Rainlink" target="_blank">Rainlink</a>`,
      `<a href="https://github.com/RainyXeon/Cylane" target="_blank">Cylane</a>`
    ]
    const social_media = [
      `<a href="https://github.com/RainyXeon" target="_blank">Github</a>`,
      `<a href="https://discord.com/users/898728768791789628" target="_blank">Discord (rainyxeon)</a>`,
      `<a href="mailto:xeondev@xeondex.onmicrossoft.com">Email</a>`,
      `<a href="https://x.com/RainyXeon" target="_blank">X (Twitter)</a>`
    ]

    document.getElementById('term_screen').innerHTML += 
`<pre>
             .^.          .~.              | RainyXeon (Arisu: Rain)
            ^G^7?7!^..^!7?7^B.             | ----------------------------------------------------------------
           .G.Y7775&57777!?J:B.            | Description: A full stack developer from Vietnam
          .#J57:J7Y#57777J.Y?^G            | Online: ${prettyMilliseconds(Date.now() - 1210872600000)}
      .^!7J?G#JB:!Y#5777!:B.5!?&J!^:       | Language (Senior): JavaScript, TypeScript, Lua
   .5777?77777BPB5Y#57!^Y?:G~&G5J?7!!P.    | Language (Amateur): C#, C++, C, Java  
    B:^B.!J7!77JG7^.     5YP&??J~.B:~P     | Database: MongoDB, MySQL, PostgreSQL, Redis
    .B.Y7^B 5Y.           BJYB #!JP^B      | Framework: ExpressJS, ReactJS, NestJS
     :B.P~!5.G.            GBY&J#PP#.      | Projects: ${projects.join(', ')}
     .#PP#J&YBG            .G.5!~P.B:      | Best at: Backend, Frontend, DevOps and A bit of Mobile App
     B^PJ!# BYJB           .Y5 B^7Y.B.     | Years Experience: ${prettyMilliseconds(Date.now() - 1588294800000)}
    P~:B.~J??&PY5     .^7GJ77!7J!.B^:B     | Contacts: ${social_media.join(', ')}
   .P!!7?J5G&~G:?Y^!75#Y5BPB77777?7775.    | You can call me:
      :^!J&?!5.B:!7775#Y!:BJ#G?J7!^.       |  - rainy
           G^?Y.J77775#Y7J:75J#.           |  - ArisuRain
           .B:J?!77775&5777Y.G.            |  - Mưa
            .B^7?7!^..^!7?7^G^             |  - Chuvoso
             .~.          .^.              |  - Ame-san
</pre>`
  },

  template: (data, padding) => {
    if (!data && data == null)
      return `<div style="display: block; height: 20px;"></div>`
    return `<div style="${padding ? `padding-left: ${padding}px` : ""}">${data}</div>`
  }
}

export default command