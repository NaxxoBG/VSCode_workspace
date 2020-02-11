Vue.filter('date', time => moment(time).format('DD/MM/YY, HH:mm'))

new Vue({
  name: "Notebook",
  el: '#notebook',
  data() {
    return {
      content: localStorage.getItem('content') || 'You can write in **markdown**',
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      selectedId: localStorage.getItem('selected-id') || null,
    }
  },
  computed: {
    linesCount() {
      if (this.selectedNote) {
        return this.selectedNote.content.split(/\r\n|\r|\n/).length
      }
    },
    wordCount() {
      if (this.selectedNote) {
        var s = this.selectedNote.content
        s = s.replace(/\n/g, ' ')
        s = s.replace(/(^\s*)|(\s*$)/gi, '')
        s = s.replace(/\s\s+/gi, ' ')
        return s.split(' ').length
      }
    },
    charactersCount() {
      if (this.selectedNote) {
        return this.selectedNote.content.split('').length
      }
    },
    notePreview() {
      return this.selectedNote ? marked(this.selectedNote.content) : ''
    },
    addButtonTitle() {
      return this.notes.length + ' note(s) already'
    },
    selectedNote() {
      return this.notes.find(note => note.id === this.selectedId)
    },
    sortedNotes() {
      return this.notes.slice()
        .sort((a, b) => a.created - b.created)
        .sort((a, b) => (a.favorite === b.favorite) ? 0 : a.favorite ? -1 : 1)
    },
  },
  methods: {
    saveNote() {
      console.log('saving note: ', this.content);
      localStorage.setItem('content', this.content)
      this.reportOperation('saving')
    },
    saveNotes() {
      localStorage.setItem('notes', JSON.stringify(this.notes))
      console.log('Notes saved!', new Date())
    },
    addNote() {
      const time = Date.now()
      const note = {
        id: String(time),
        title: 'New Note ' + (this.notes.length + 1),
        content: '**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
        created: time,
        favorite: false,
      }
      this.notes.push(note)
    },
    removeNote() {
      if (this.selectedNote && confirm('Delete the note?')) {
        const index = this.notes.indexOf(this.selectedNote)
        if (index !== -1) {
          this.notes.splice(index, 1)
        }
      }
    },
    selectNote(note) {
      this.selectedId = note.id;
    },
    reportOperation(op) {
      console.log(`The ${op} was completed.`)
    },
    favoriteNote() {
      this.selectedNote.favorite ^= true // invert the bool value favorite
    }
  },
  watch: {
    notes: {
      handler: 'saveNotes',
      deep: true,
    },
    content: {
      handler: 'saveNote',
    },
    selectedId(val) {
      localStorage.setItem('selected-id', val)
    }
  }
})

console.log('restored note: ', localStorage.getItem('content'))