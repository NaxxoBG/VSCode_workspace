function view(document) {
    const filterInput = document.getElementById('filter')
    const resetButton = document.getElementById('reset')
    const phoneTable = document.getElementById('phones')

    let listener = null
    filterInput.oninput = () => { if (listener) listener.updateFilter(filterInput.value) }
    resetButton.onclick = () => { if (listener) listener.clearFilter() }

    function listen(_listener) {
        listener = _listener
    }

    function displayFilter(filter) {
        filterInput.value = filter
    }

    function createTd(text) {
        const td = document.createElement('td')
        td.innerText = text
        return td
    }

    function createParent(tag, ...children) {
        const p = document.createElement(tag)
        children.forEach(ch => p.appendChild(ch))
        return p
    }

    function displayPhones(phones) {
        while(phoneTable.firstChild) phoneTable.removeChild(phoneTable.firstChild)
        phones.forEach(phone => {
            const tdName = createTd(phone.name())
            const tdSnippet = createTd(phone.snippet())
            const tr = createParent('tr', tdName, tdSnippet)
            phoneTable.appendChild(tr)
        })
    }

    return { listen, displayFilter, displayPhones }
}