function model() {
    const phone = (name, snippet, age) => ({name: () => name, snippet: () => snippet, age: () => age})

    let phones = [
        phone('Nexus S', 'Fast just got faster with Nexus S.', 1), 
        phone('Motorola XOOM with Wi-Fi', 'The Next, Next Generation tablet.', 2),
        phone('MOTOROLA XOOM', 'The Next, Next Generation tablet.', 3 )
      ]

    return { phones }
}
