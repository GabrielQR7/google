import  './App.css'

export default () => {

const imageUrl='https://picsum.photos/200/300';
//voce pode alterar as dimençoes conforme o nessesario

  return(
    <div className="app">
      <div className="todo-list">
        <h1>Lista de Tarefas</h1>
        <div className="todo-item">
          Tarefa 1
        </div>
        <img src={imageUrl} alt='' className='todo-img'/>
      </div>
    </div>
  )
}
