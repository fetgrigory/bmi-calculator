import './App.css';
import './index.css'
import React, {useState} from 'react'
 
function App() {
 
  // структура
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  let calcBmi = (event) => {
    //запретить отправку на сервер
    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Пожалуйста, введите действительный вес и рост')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
 
      // Логика для сообщения
 
      if (bmi < 25) {
        setMessage('У вас недостаточный вес')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('У вас здоровый вес')
      } else {
        setMessage('У вас избыточный вес')
      }
    }
  }
 
 
  let reload = () => {
    window.location.reload()
  }
 
  return (
    <div className="app">
    <div className='container'>
      <h2 className='center'>Калькулятор индекса массы тела (ИМТ)</h2>
      <form onSubmit={calcBmi}>
 
        <div>
          <label>Вес: (кг)</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div>
          <label>Рост : (см)</label>
          <input value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>
 
        <div>
          <button className='btn' type='submit'>Рассчитать</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Перезагрузить</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Ваш ИМТ равен: {bmi}</h3>
        <p>{message}</p>
        <label>Copyright 2022 Феткулин Григорий</label>
      </div>
    </div>
  </div>
  );
}
 
export default App;