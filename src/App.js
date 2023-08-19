import './App.css';
import Page from './components/main/Page';
import { SideNav } from './components/sidebar/SideNav';
import { TopNav } from './components/sidebar/TopNav';
import { styled } from '@mui/material/styles';

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH
  }
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});
function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <SideNav/>
      {/* <TopNav/> */}
      <LayoutRoot>
        <LayoutContainer>
          <Page/>
        </LayoutContainer>
      </LayoutRoot>
    </div>
  );
}

export default App;
