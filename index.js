import help from "./commands/help.js";
import info from "./commands/info.js"
import clear from "./commands/clear.js"
import ls from "./commands/ls.js"
import cls from "./commands/cls.js"
import rainyLore from './commands/rainy_lore.js'
import warni from "./warn.js";

let counter = 0
const commandList = { help, info, clear, ls, cls, rainyLore }
let empty_counter = 0

let history = []

function handleCommand(e) {
  const commandName = e.target.value
  const command = commandList[commandName]
  if (command) command.run(e, commandList)
  else {
    const no_command = `<div>'${commandName}' is not recognized as an internal or external command,</div>
    <div>operable program or batch file.</div>
    <div style="display: block; height: 20px;"></div>
    `
    document.getElementById('term_screen').innerHTML += no_command
    return
  }
}

function fromBinary(encoded) {
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint16Array(bytes.buffer));
}

function handleArrowUp(e) {
  counter -= 1
  if (counter == -1) counter = history.length - 1
  e.target.value = history[counter]
}

function handleArrowDown(e) {
  counter += 1
  if (counter == history.length) counter = 0
  e.target.value = history[counter]
}

const handleFunction = (e) => {
  if (e.code == "ArrowUp") return handleArrowUp(e)
  if (e.code == "ArrowDown") return handleArrowDown(e)
  if (e.code !== "Enter") return

  const node = document.createElement("div")
  node.innerHTML = e.target.value
  node.setAttribute("class", "cmd_input")

  e.target.parentNode.appendChild(node);
  e.target.parentNode.removeChild(e.target);

  e.target.removeEventListener('keydown', () => {})
  e.target.removeEventListener('blur', () => {})

  if (e.target.value.length !== 0) history.push(e.target.value)

  if (empty_counter < 10 && e.target.value.length == 0) empty_counter += 1
  if (empty_counter < 10) handleCommand(e)
  else {
    document.getElementById('term_screen').innerHTML = fromBinary(warni);
    empty_counter = 0
  }

  document.getElementById('term_screen').innerHTML += `<div style="display: flex; align-items: center;">
    <div style="margin-right: 10px;">C:\\Users\\DeepInRain\\RainyXeon></div>
    <input dummy="true" type="text" id="input_cmd" class="cmd_input" placeholder="Use 'help' to see more command!">
  </div>`

  document.getElementById("input_cmd").focus()

  counter = 0

  return createNewListener()
}

function createNewListener() {
  const input_cmd = document.getElementById("input_cmd")
  input_cmd.addEventListener('keydown', handleFunction)
}

createNewListener()