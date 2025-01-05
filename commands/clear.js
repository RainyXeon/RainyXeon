const command = {
  name: "clear",
  desc: "Clear all screen",
  usage: null,

  run: (e, commandList) => {
    document.getElementById('term_screen').innerHTML = ""
  },

  template: (data, padding) => {
    if (!data && data == null)
      return `<div style="display: block; height: 20px;"></div>`
    return `<div style="${padding ? `padding-left: ${padding}px` : ""}">${data}</div>`
  }
}

export default command