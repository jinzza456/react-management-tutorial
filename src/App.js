import logo from './logo.svg';
import './App.css';
import Customer from './components/customer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
// import { withStyles } from '@material-ui/core/styles'
//
// const styles = theme => ({
//   root: {
//     width: '100%',
//     overflowX: "auto"
//   },
//   table: {
//     minWidth : 1080
//   }
// })

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
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gneder={c.gender} job={c.job}/>);})}
          </TableBody>
        </Table>
      </Paper>
  );
}

export default App;
