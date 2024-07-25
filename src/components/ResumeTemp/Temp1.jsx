


import  { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
  flexDirection:"row",
     color:"black",
    padding:10,
    fontSize:12,
    
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  name :{
    fontSize:60,
    color:'black',
    marginLeft:20,
  },
  
  contact:{
   flexDirection:"column",
    marginLeft:22,
  },

 

  heading:{
      color:"deepskyblue",
      fontSize:18 ,
      textDecoration:"underline",
      fontWeight:"extrabold",
      padding:5,
      textTransform:"uppercase",
  }

});
const Temp1 = ({data}) => {

  // console.log("data",data);
  

  return (
   
    <Document>
    <Page size="A4" style={styles.page }>
         <View>
           <Text style={styles.name}>{data.name}</Text> 
            <View style={styles.contact}>
               <Text> Email:{data.email}</Text>  
               <Text> LinkedIn:{data.linkedIn}</Text>  
                <Text>Phone:{data.contactNum}</Text> 
                <Text >Address:{data.areaName},{data.city},{data.stateName},{data.pincode}</Text> 
            </View>
              
               
           <View style={styles.section}>
            <Text style={styles.heading}>Summary:</Text>
            <Text  style={{marginTop:"5", paddingHorizontal:"10"}}>{data.summary}</Text>
          </View>



      {
         data.companyName?<View style={styles.section}>
            <Text style={styles.heading}>Experience:</Text>
            <Text  style={{marginTop:"5", paddingHorizontal:"10"}}>Company Name:{data.companyName}</Text>
            <Text  style={{marginTop:"5", paddingHorizontal:"10"}}>{data.desiginition}</Text>
            <Text  style={{marginTop:"5", paddingHorizontal:"10"}}> Duration:{data.duration}</Text>
          </View>: " "
        }



         <View style={styles.section}>
            <Text style={styles.heading}>Education:</Text>
            <View style={{flexDirection:"row" ,gap:"20"}}>
            <View>
            <Text  style={{marginTop:"5", paddingHorizontal:"10"}}>{data.collageDegree}</Text>
            <Text  style={{marginTop:"5", paddingHorizontal:"10"}}>{data.collageName},{data.collagePassingYear}</Text>
          </View>
          <View>
            <Text  style={{marginTop:"5", paddingHorizontal:"10"}}>{data.schoolDegree}</Text>
            <Text  style={{marginTop:"5", paddingHorizontal:"10"}}>{data.schoolName},{data.schoolPassingYear}</Text>
          </View>
            </View>
         </View>



                 
         <View style={styles.section}>
            <Text style={styles.heading}>Project:</Text>
            <Text  style={{marginTop:"5", paddingHorizontal:"10"}}>Project Name: {data.projectName}</Text>
            <Text  style={{marginTop:"5", paddingHorizontal:"10"}}> Desciption:{data.projectDesc}</Text>
            <Text  style={{marginTop:"5", paddingHorizontal:"10"}}>ProjectUrl:{data.projectUrl}</Text>
          </View>
         
          <View style={styles.section}>
            <Text style={styles.heading}>Skills:</Text>
            <Text  style={{marginTop:"5", paddingHorizontal:"10"}}>{data.skill}</Text>
          </View>
            
          <View style={styles.section}>
            <Text style={styles.heading}>Interests:</Text>
            <Text  style={{marginTop:"5", paddingHorizontal:"10"}}>{data.interest}</Text>
          </View>

          </View>
      
    </Page>
 
   </Document>
   
 
 
  )
}

export default Temp1;
