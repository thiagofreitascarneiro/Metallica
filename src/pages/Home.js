import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Plataform,
  TouchableOpacity
 } from 'react-native'


export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [myskills, setMySkills] = useState([]);

    function handleAddNewSkill(){
      setMySkills(oldState => [...oldState, newSkill]);

    }

  return (
    
      <View style={styles.container}>
        <Text style={styles.title}> METALICA, Viva o Rock! </Text>

        <TextInput
            style={styles.input}
            placeholder="New Skill"
            placeholderTextColor="#555"
            onChangeText={setNewSkill}
        />

        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.5}
          onPress={handleAddNewSkill}
        >    
        <Text 
          style={styles.buttonText}>
            Add
        </Text>
        </TouchableOpacity>

        <Text style={[styles.title, {marginVertical: 50}]}>
          My Skills
        </Text>

       { 
        myskills.map(skill => (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>    
                  {skill}
            </Text>
          </TouchableOpacity>
        ))
        }
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
    button: {
      backgroundColor: '#A370F7',
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      marginTop: 20,
      
    },
    buttonText: {
      color: '#FFF'
    },
    buttonSkill: {
      backgroundColor: '#1F1E25',
      padding: 15,
      borderRadius: 50,
      alignItems: 'center',
      marginVertical: 10
    },
    textSkill: {
      color: '#FFF',
      fontSize: 22,
      fontWeight: 'bold',
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