function view(document, vm) {
    const filterInput = document.getElementById('filter')
    const resetButton = document.getElementById('reset')
    const phoneTable = document.getElementById('phones')

    filterInput.oninput = () => { vm.filter = filterInput.value }
    vm.onChange(() => {  filterInput.value = vm.filter })

    
    resetButton.onclick = () => { vm.filter = '' }

    vm.onChange(() => {
        displayPhones()
    })

    displayPhones()

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

    function displayPhones() {
        while(phoneTable.firstChild) phoneTable.removeChild(phoneTable.firstChild)
        vm.phones.forEach(phone => {
            const tdName = createTd(phone.name())
            const tdSnippet = createTd(phone.snippet())
            const tr = createParent('tr', tdName, tdSnippet)
            phoneTable.appendChild(tr)
        })
    }

    return { listen, displayFilter, displayPhones }
}