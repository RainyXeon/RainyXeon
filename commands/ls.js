const command = {
  name: "ls",
  desc: "List all file",
  usage: null,

  run: (e, commandList) => {
    document.getElementById('term_screen').innerHTML += "<pre>rainyLore.exe</pre>"
  },

  template: (data, padding) => {
    if (!data && data == null)
      return `<div style="display: block; height: 20px;"></div>`
    return `<div style="${padding ? `padding-left: ${padding}px` : ""}">${data}</div>`
  }
}

export default command