import React from 'react'

import  { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    
    color:"black",
    lineHeight:2,
    fontSize:12,
    
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    
  },

  container:{
   flexDirection:'row',
   gap:30,

   
   
  },


 
 
  heading:{
    paddingTop:40,
      fontSize:35,
      paddingLeft:20,
  },
  contactDetails:{
   flexDirection:"column",
    marginTop: 40,
    paddingLeft: 20,
    
    
  },
  summary:{
    paddingLeft:20,
    marginTop:50,
    width:230,
  },
  rightContainer:{
    backgroundColor:'#3d3e42',
    width:'100%',
    Top:20,
    height:'200%',
    marginLeft:110,
  },
  rightsubsection:{
         marginTop:50,
         paddingHorizontal:20,
  }
})
const Temp2 = ({data}) => {
  console.log("data",data);



  return (

   <Document>
    <Page size='A4' style={styles.page }>
      
      <View  style={styles.container}>
         <View style={styles.left}>
            <Text style={styles.heading}>{data.name}</Text>
               <View style={styles.contactDetails}>
               <Text>Phone:  {data.contactNum}</Text>
               <Text> Email:  {data.email}</Text>  
               <Text >Address:  {data.areaName},{data.city},{data.stateName},{data.pincode}</Text> 
                
               </View>

               <View style={styles.summary}>
                <Text style={{fontSize:'15', fontWeight:'bold'}}>About Me:</Text>
               <Text>{data.summary}</Text>
               </View>
                
                <View style={styles.summary}>
                <Text style={{fontSize:'15', fontWeight:'bold'}}>LinkedIn:</Text>
                <Text>{data.linkedIn}</Text>
                </View>
              
               

                
           </View> 
     
          <View style={styles.rightContainer}>
             
             
            <View style={styles.rightsubsection}>
              <View>
              <Text style={{color:'green', fontSize:'15',fontWeight:'bold'}}>Academics:</Text>
               <Text style={{color:'white', paddingLeft:'20'}}>{data.schoolDegree},{data.schoolName}</Text>
               <Text style={{color:'white', paddingLeft:'20'}}>{data.schoolPassingYear}</Text>
              </View>
                
              <View style={{marginTop:'40'}}>
              <Text style={{color:'green', fontSize:'15',fontWeight:'bold'}}>Collage/Technical:</Text>
               <Text style={{color:'white', paddingLeft:'20'}}>{data.collageDegree},{data.collageName}</Text>
               <Text style={{color:'white', paddingLeft:'20'}}>{data.collagePassingYear}</Text>
              </View>

             { data.companyName? <View style={{marginTop:'40'}}>
              <Text style={{color:'green', fontSize:'15',fontWeight:'bold'}}>Experienc:</Text>
               <Text style={{color:'white', paddingLeft:'20'}}>Company Name:{data.companyName}</Text>
               <Text style={{color:'white', paddingLeft:'20'}}> Desigination:{data.desiginition}</Text>
               <Text style={{color:'white', paddingLeft:'20'}}> Duration:{data.duration}</Text>
              </View> :" "}
 
              <View style={{marginTop:'40'}}>
              <Text style={{color:'green', fontSize:'15',fontWeight:'bold'}}>Projects:</Text>
               <Text style={{color:'white', paddingLeft:'20'}}>Project Name:{data. projectName}</Text>
               <Text style={{color:'white', paddingLeft:'20'}}> Project Description:{data.projectDesc}</Text>
               <Text style={{color:'white', paddingLeft:'20'}}> URL:{data.projectUrl}</Text>
              </View>

              <View style={{marginTop:'40'}}>
              <Text style={{color:'green', fontSize:'15',fontWeight:'bold'}}>Skills:</Text>
               <Text style={{color:'white', paddingLeft:'20'}}>{data.skill}</Text>
 
              </View>
              

              <View style={{marginTop:'40'}}>
              <Text style={{color:'green', fontSize:'15',fontWeight:'bold'}}>Interests:</Text>
               <Text style={{color:'white', paddingLeft:'20'}}>{data.interest}</Text>
              </View>

              <View style={{marginTop:'40'}}>
              <Text style={{color:'green', fontSize:'15',fontWeight:'bold'}}>Certficate:</Text>
               <Text style={{color:'white', paddingLeft:'20'}}>{data.certificate}</Text>
              </View>





            </View>
           
          
            </View> 
        

        </View>    
      

    
         
      
    
    </Page>
   </Document>
  )
}

export default Temp2
  
