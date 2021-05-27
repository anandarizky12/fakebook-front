import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import {Provider} from 'next-auth/client'
import {Provider as ReduxProvider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {reducers} from '../reducers/index'


const store = createStore(reducers, compose(applyMiddleware(thunk)));


function MyApp({ Component, pageProps }) {

  return (

      <Provider session={pageProps.session}>
         
          <ReduxProvider store={store}>
       
              <Component {...pageProps} />

          </ReduxProvider> 
        
      </Provider>
  
  )
}

export default MyApp
