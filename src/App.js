import { useEffect } from 'react';
import './App.css';
import Profile from './pages/Profile';
import SignUpPage from './pages/SignUpPage';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from './firebase';
import { setUser } from './slices/userSlice';
import { useDispatch } from 'react-redux';
import PrivateRoutes from './components/common/PrivateRoutes';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribeAuth = onAuthStateChanged(auth ,(user)=>{
      if(user) {

        const unsubscribeSnapshot = onSnapshot(
          doc(db, "users", user.uid),
          (userDoc) => {
            if(userDoc.exists()){
              const userData = userDoc.data();
              dispatch(
                setUser({
                  name: userData.name,
                  email: userData.email,
                  uid:userData.uid,
                })
              );
            }
          },
          (error) =>{
            console.error("Error fetching user data", error);
          }
        ); 
        return() => {
          unsubscribeSnapshot();
        };
      }
    });

    return () =>{
      unsubscribeAuth();
    };
  }, );

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<SignUpPage/>} / >
          <Route element={<PrivateRoutes/>}>
            <Route path="/profile" element={<Profile/>} / >
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
