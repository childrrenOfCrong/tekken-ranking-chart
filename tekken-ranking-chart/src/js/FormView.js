class FormView {
  constructor(selector){
    this.form = qs(selector)
    this.init();
    this.inputEl = qs('input')
    this.inputEl.focus();
    this.sendNewUser = null;
  }
  init(){
    $on(this.form, 'submit', e=>this.handleSubmit(e))
  }
  handleSubmit(e){
    e.preventDefault();
    // debugger;
    const newUser = this.inputEl.value.trim()
    this.inputEl.value ="";
    if(!newUser) return alert('아무것도 입력 안했소')
    this.sendNewUser(newUser)
  }
}