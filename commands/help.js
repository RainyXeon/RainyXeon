const command = {
  name: "help",
  desc: "List all command, usage and its description",
  usage: null,

  run: (e, commandList) => {
    const res_string = [
      command.template("Avaliable commands:"),
      command.template(),
    ]
    const allCommands = Object.values(commandList)

    for (const element of allCommands) {
      if (element.hidden) continue
      res_string.push(command.template(element.name))

      res_string.push(command.template(`Description: ${element.desc}`, 40))
    
      if (element.usage !== null)
        res_string.push(command.template(`Usage: ${element.name}`, 40))

      res_string.push(command.template())
    }
  
    document.getElementById('term_screen').innerHTML += res_string.join('\n')
  },

  template: (data, padding) => {
    if (!data && data == null)
      return `<div style="display: block; height: 20px;"></div>`
    else
      return `<div style="${padding ? `padding-left: ${padding}px` : ""}">${data}</div>`
  }
}

export default command