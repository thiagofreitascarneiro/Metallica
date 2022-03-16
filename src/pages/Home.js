import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  FlatList,
  
 } from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard'

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill(){
      setMySkills(oldState => [...oldState, newSkill]);

    }

  return (
    
      <View style={styles.container}>
       
        <Text style={styles.title}> 
          METALICA ! 🤘
          add your favorite song.
        </Text>

        <TextInput
            style={styles.input}
            placeholder="New Skill"
            placeholderTextColor="#555"
            onChangeText={setNewSkill}
        />
        

        <Button onPress={handleAddNewSkill}/>

        <Text style={[styles.title, {marginVertical: 50}]}>
          My best songs   💀
        </Text>


          <FlatList   
            data={mySkills}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <SkillCard skill={item} />
              
            )}
            
          />
       
            

      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#121015',
      paddingHorizontal: 20,
      paddingVertical: 70,
      paddingHorizontal: 30

  },
  title: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: "#FFF",
    fontSize: 18,
    padding: 10,
    marginTop: 30,
    borderRadius: 7
  },
  
  skill: {
    color:'#FFF',
    backgroundColor: '#1F1E25',
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 20
  }


})