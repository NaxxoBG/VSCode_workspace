function controller(model, view) {
    let filter = ''

    function updateFilter(_filter) {
        filter = _filter.toLowerCase()
        view.displayPhones(model.phones.filter(ph => ph.name().toLowerCase().includes(filter)))
    }

    function clearFilter() {
        filter = ''
        view.displayPhones(model.phones)
        view.displayFilter(filter)
    }

    clearFilter()

    const _controller = { updateFilter, clearFilter }

    view.listen(_controller)

    return _controller
}
