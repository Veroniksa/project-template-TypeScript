export function renderBlock (elementId: string, html: string) {
  const element: HTMLElement | null = document.getElementById(elementId)
  if(element == null){
    return null
  } else {
    return element.innerHTML = html
  }
}

interface Message {
  type: string
  text: string 
}

interface Action {
  name: string
  handler: () => void
}

export function renderToast(message: Message | null, action: Action | undefined) {
  let messageText = ''
  
  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }
  
  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function() {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null, undefined)
    }
  }
}