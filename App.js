import React from 'react';
import {TouchableWithoutFeedback, Keyboard,View} from 'react-native'
import Search from './components/search';
import Appbar from './components/appbar';

function App(){
  return(
    
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View>
        <Appbar/>
        <Search/>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default App;