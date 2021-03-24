const RootMenuId = 'copy-link-address@lilydjwg.me'

browser.contextMenus.create({
  id: RootMenuId,
  title: browser.i18n.getMessage('contextMenuTitle'),
  contexts: ['link'],
})

browser.contextMenus.onClicked.addListener(function(info, tab) {
  navigator.clipboard.writeText(info.linkUrl)
})
