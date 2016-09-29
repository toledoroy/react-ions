import Quill from 'quill'
const Module = Quill.import('core/module')

class MergeTags extends Module {
  constructor(quill, options) {
    this.quill = quill;
    this.options = options;
    this.container = document.querySelector(options.container);
    console.log(this.container)
  }
}

Quill.register('modules/MergeTags', MergeTags)
