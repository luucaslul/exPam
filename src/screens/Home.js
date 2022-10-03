import react, {useState} from "react";

import {View, Text, Input, TouchableOpacity, StyleSheet, TextInput} from 'react-native';


export default function Home(){

    
        let [ValorTemperatura, setValorTemperatura] = useState();
        let [ValorDolar, setValorDolar] = useState();
        let [ValorNumero, setValorNumero] = useState();
        let [ValorIdade, setValorIdade] = useState();

        function func1(){
            let resultado = (160 + parseFloat(ValorTemperatura) * 9)/5 ;
            alert("O Resultado total é: " + resultado);
        }    

        function func2(){
            let resultado = parseFloat(ValorDolar) *  5.12 ;
            alert("Sua quantidade em R$ é: " + resultado);
        }    

        function func3(){
            let resultado = 2022 - parseFloat(ValorIdade);
            alert("Sua idade é: " + resultado);
        }    

        function func4(){
            let resultado = parseFloat(ValorNumero) % 2;

            if(resultado == 0){
                alert("Seu número é par");
            }else{
                alert("Seu número é ímpar");
            }

        }  

    return(
        <View style = {styles.container}>

            <View style = {styles.bodyBox}>
                <Text style = {styles.titulo}>Exercícios</Text>
                <Text style = {styles.subtitulo}>Olá, professor</Text>
            </View>

            <View style = {styles.bodyBox}>
            <Text style = {styles.titulo}>❄️  C° em F°  🔥</Text>
            <Text style = {styles.subtitulo}>Insira o valor em C°</Text>
                <TextInput onChangeText = {setValorTemperatura} style = {styles.input} placeholder = "Digite seu número..."></TextInput>

                <TouchableOpacity onPress={func1} style = {styles.botao}>
                    <Text style = {styles.textoBotao}>Calcular</Text>
                </TouchableOpacity>
            </View>          

            <View style = {styles.bodyBox}>
            <Text style = {styles.titulo}>💵  Dólar em Real  🪙</Text>
            <Text style = {styles.subtitulo}>Insira o valor em US$ (o dolar hoje custa R$5,12)</Text>
                <TextInput onChangeText = {setValorDolar} style = {styles.input} placeholder = "Digite seu número..."></TextInput>

                <TouchableOpacity onPress={func2} style = {styles.botao}>
                    <Text style = {styles.textoBotao}>Calcular</Text>
                </TouchableOpacity>
            </View>          
            
            <View style = {styles.bodyBox}>
            <Text style = {styles.titulo}>👴  Idade atual  🧒</Text>
            <Text style = {styles.subtitulo}>Insira o ano de seu nascimento</Text>
                <TextInput onChangeText = {setValorIdade} style = {styles.input} placeholder = "Digite seu número..."></TextInput>

                <TouchableOpacity onPress={func3} style = {styles.botao}>
                    <Text style = {styles.textoBotao}>Calcular</Text>
                </TouchableOpacity>
            </View>          

            <View style = {styles.bodyBox}>
            <Text style = {styles.titulo}>➕  Par ou Ímpar?  ➖</Text>
                <TextInput onChangeText = {setValorNumero} style = {styles.input} placeholder = "Digite seu número..."></TextInput>

                <TouchableOpacity onPress={func4} style = {styles.botao}>
                    <Text style = {styles.textoBotao}>Calcular</Text>
                </TouchableOpacity>
            </View>          

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#161921',
      alignItems: 'center',
      justifyContent: 'center',
    },

    bodyBox: {
        width: '300px',
        alignItems: 'center',
        padding:'25px',
        backgroundColor:'#2a3042',
        borderRadius:'5px',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 30,
        margin:'10px',
        },

    titulo: {
        fontSize: '22px',
        color: '#fff',
        fontWeight: 'bold',
        
    },

    tituloMovie: {
        fontSize: '18px',
        color: '#fff',
        fontWeight: 'bold',
        
    },

    subtitulo: {
        fontSize: '10px',
        color: '#fff',
    },

    botao:{
        backgroundColor:'#eb38a3',
        paddingHorizontal:'20px',
        paddingVertical:'10px',
        borderRadius:'20px',
        marginTop:'10px',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },



      textoBotao: {
        color:'#000',
        fontSize: '15px',
        color: '#fff',
        fontWeight: 'bold',
    },

    input:{
        backgroundColor:'#13131a',
        padding:'5px',
        marginVertical:'15px',
        width:'250px',
        paddingHorizontal: '10px',
        borderRadius:'5px',
        fontSize: '18px',
        color:'#fff',
        fontWeight: 'bold',
    },

    movieButton:{
        paddingHorizontal: '10px',
        backgroundColor:'#181b25',
        padding:'5px',
        paddingVertical:'10px',
        margin:'5px',
        borderRadius:'12px',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.6,
        shadowRadius: 2,
    }
    
  });
  
  