import { useLocation } from "react-router-dom";
import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import docs from "../Documents/docs";

const ReadPDF = () => {

  const location = useLocation()
  const { id } = location.state
  const index = docs.findIndex(item => item.id === id)
  const file = docs[index]
  
  return (
      <PDFViewer style={styles.viewer}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{file.title}</Text>            
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>{file.content}</Text>
            </View>
            <View style={styles.author}>
              <Text style={styles.text}>{file.author}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>  
  )
}

export default ReadPDF;





// Create styles
const styles = StyleSheet.create({
  viewer: {
    flexDirection: 'column',
    height: 3508,
    width: '100%'
  },
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    alignItems: 'center'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  titleContainer: {
    alignItems: 'center',
    width: '80%',
    height: 100,
    margin: 50
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  text: {
    fontSize: 14
  },
  content: {
    alignItems: 'center',
    width: '80%',
    flexGrow: 1    
  },
  author: {
    alignItems: 'center',
    width: '80%',
    marginBottom: 50
  }
});
