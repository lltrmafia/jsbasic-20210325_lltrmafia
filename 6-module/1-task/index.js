/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  
  constructor(arg1) {
    this.data = arg1;
    this.template = '';
  }

  btnClick(event){
    if(!event.target.classList.contains('btn')) return;
    event.target.closest('td').parentElement.style.display = 'none';
  }
  
  elem(){
    if(!this.el){
      this.el = document.createElement('TABLE');
      this.el.classList.add('new-table');
      this.el.addEventListener('click', event => {
        this.btnClick(event);
      });
    }

    for(let {name, age, salary, city} of this.data){
      this.template += `
          <tr>
            <td>${name}</td>
            <td>${age}</td>
            <td>${salary}</td>
            <td>${city}</td>
            <td><button class='btn'>X</button></td>
          </tr>
      `
    }
    
    this.el.insertAdjacentHTML('beforeEnd', this.template);
    return this.el;
  }
}

