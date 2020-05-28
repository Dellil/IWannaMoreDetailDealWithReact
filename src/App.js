// styled-component 깔고 styled, {ThemeProvider} import해야됨
import React, { useReducer, useMemo, createContext } from 'react';
import produce from 'immer';
import UserList from './UserList';
import CreateUser from './CreateUser';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: "#228be6",
  gray: "#496057",
  pink: "#f06595",
};

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    setDialog(false);
  };
  const onCancel = () => {
    setDialog(false);
  };
  
function countActiveUsers(users) {
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'ljch',
      email: 'aksaksdm@naver.com',
      active: true
    },
    {
      id: 2,
      username: 'asdf',
      email: 'asdf@naver.com',
      active: false
    },
    {
      id: 3,
      username: 'sdaach',
      email: 'aas2es@naver.com',
      active: false
    }
  ]
}

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, draft => {
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      });
    default:
      return state;
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
    <UserDispatch.Provider value={dispatch}>
      <CreateUser >
      </CreateUser>
      <UserList users={users}></UserList>
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
    <ThemeProvider theme={{ palette }}>
      <>
        <AppBlock>
          <Button color="pink" size="large" onClick={onClick} fullWidth outline>
            삭ㅋ제ㅋ
          </Button>
        </AppBlock>
        <Dialog
          title="혼또니 마지데?"
          confirmText="삭제"
          cancelText="소취"
          visible={dialog}
          onConfirm={onConfirm}
          onCancel={onCancel}
        >
          혼또니 혼또데 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>
    </>
  )
}

export default App;
