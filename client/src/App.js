import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Customer from './components/customer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
})

class App extends Component {
  state = {
    customers: "",
    completed: 0
  }

// 모든 컴포넌트가 마운트가 되었을 때 실행 된다.
  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    // this.callApi()
    //     //반환된 값을 state에 설정한다.
    //     .then(res => this.setState({customers: res}))
    //     // 오류가 발생했을때 출력한다.
    //     .catch(err => console.log(err))
  }
// 비동기적으로 수행한다.
  callApi = async () => {
    // 접근하고자 하는 api 주소
    const response = await fetch('/api/customers');
    // 제이슨 형태의 데이터를 바디에 집어 넣는다.
    const body = await response.json();
    return body
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({completed:completed >= 100 ? 0 : completed + 1});
  }

  render() {
    const { classes } = this.props;
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
              {/*state의 값을 비동기로 불러오기 때문에 처음엔 map의 값이 비어있다.*/}
              {/*this.state.customers 가 true면 고객의 데이터를 가져오고
              true가 아닐경우 공백 문자를 출력한다.*/}
              {this.state.customers ? this.state.customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gneder={c.gender} job={c.job}/>);}) :
                  <TableRow>
                    <TableCell colSpan={6} align={"center"}>
                      <CircularProgress variant={"determinate"} value={this.state.completed}/>
                    </TableCell>
                  </TableRow>
                  }
            </TableBody>
          </Table>
        </Paper>
    );
  }
}

export default App;
