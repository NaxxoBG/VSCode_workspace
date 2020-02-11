function viewModel(model) {
    let filter = ''
    let phones = model.phones
    let observers = []

    function updateFilter(_filter) {
        filter = _filter.toLowerCase()
        phones = model.phones.filter(ph => ph.name().toLowerCase().includes(filter))
        observers.forEach(obs => obs())
    }

    function onChange(observer) {
        observers.push(observer)
    }

    const _viewModel = { updateFilter, onChange, phones: () => phones }
    Object.defineProperty(_viewModel, 'filter', { get: () => filter, set: updateFilter })
    Object.defineProperty(_viewModel, 'phones', { get: () => phones })

    return _viewModel
}
