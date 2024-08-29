const RootMenuId = 'copy-link-address@lilydjwg.me'
const RootMenuIdText = 'copy-link-address+text@lilydjwg.me'

browser.contextMenus.create({
  id: RootMenuId,
  title: browser.i18n.getMessage('contextMenuTitle'),
  contexts: ['link'],
})

browser.contextMenus.create({
  id: RootMenuIdText,
  title: browser.i18n.getMessage('contextMenuSelectionTitle'),
  contexts: ['selection'],
})

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if(info.menuItemId == RootMenuId) {
    navigator.clipboard.writeText(info.linkUrl)
  } else if(info.menuItemId == RootMenuIdText) {
    let url = new URL(tab.url)
    url.hash = ':~:text=' + encodeURIComponent(info.selectionText)
    navigator.clipboard.writeText(url.toString())
  }
})

