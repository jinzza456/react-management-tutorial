import logo from './logo.svg';
import './App.css';
import Customer from './components/customer'

const customers = [
  {
    'id':1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '티모',
    'birthday':'961222',
    'gender':'남자',
    'job':'탑'
  },
  {
    'id':2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '진수',
    'birthday':'910226',
    'gender':'남자',
    'job':'학생'
  },
  {
    'id':3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '홍길동',
    'birthday':'961222',
    'gender':'남자',
    'job':'정글'
  }
]

function App() {
  return (
      <div>
        {
          customers.map(c => {
            return (
                <Customer
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.gender}
                    job={c.job}
                />
            );
          })
        }
      </div>
  );
}

export default App;
