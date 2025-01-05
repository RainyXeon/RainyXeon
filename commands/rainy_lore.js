const command = {
  name: "rainyLore",
  desc: "List all file",
  usage: null,
  hidden: true,

  run: (e, commandList) => {
    document.getElementById('term_screen').innerHTML += `<pre>
    Hi, if you see this file and execute it then too bad for you.
    This file doesn't contain any infomation except text.
    To know more about me, please use 'info' command :)

    Peace,
    RainyXeon</pre>`
  },

  template: (data, padding) => {
    if (!data && data == null)
      return `<div style="display: block; height: 20px;"></div>`
    return `<div style="${padding ? `padding-left: ${padding}px` : ""}">${data}</div>`
  }
}

export default command