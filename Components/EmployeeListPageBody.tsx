import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  FlatList,
} from "react-native";
import Search from "./SearchBar";
import EmployeeCard from "./EmployeeCard";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

interface EmployeeData {
  id: number;
  name: string;
  dob: string;
  role: string;
}
interface SearchProps {
    value: string;
    onChangeText: (query: string) => void;
  }

const data: EmployeeData[] = [
  { id: 1, name: "John", dob: "16-11-2000", role: "Software Engineer" },
  { id: 2, name: "Mahesh", dob: "15-01-2000", role: "Web Developer" },
  { id: 3, name: "Alice", dob: "10-05-1998", role: "Product Manager" },
  { id: 4, name: "Bob", dob: "23-09-1995", role: "Frontend Developer" },
  { id: 5, name: "Emma", dob: "12-07-1997", role: "UI/UX Designer" },
  { id: 6, name: "Michael", dob: "05-03-1994", role: "Data Scientist" },
  { id: 7, name: "Sarah", dob: "30-08-1993", role: "Systems Analyst" },
  { id: 8, name: "David", dob: "18-04-1991", role: "Backend Developer" },
  { id: 9, name: "Olivia", dob: "20-12-1992", role: "Network Engineer" },
  { id: 10, name: "Ryan", dob: "25-06-1996", role: "DevOps Engineer" },
];


const renderItem = ({ item }: { item: EmployeeData }) => (
  <EmployeeCard data={item} />
);

function EmployeeListPageBody() {
    const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<EmployeeData[]>(data);

  const handleSearch = (query: string) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
    setSearchQuery(query);
  };
  
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/Group2x.png")} style={styles.image} />
      </View>
      <View style={styles.imagemetroContainer}>
        <Image
          source={require("../assets/moptrologo.png")}
          style={styles.imagemetro}
        />
        <View style={styles.overlay}>
          <Text style={styles.metroImageText}>4</Text>
        </View>
      </View>
      <View>
        <Search value={searchQuery} onChangeText={handleSearch}/>
      </View>
      <View style={{marginLeft:((-200/height)*100),height: 500,marginTop:5}}>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flexGrow: 0 }} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: 40,
    height: 40,
  },
  imageContainer: {
    marginTop: (400 / height) * 100,
    marginLeft: 298,
  },
  imagemetro: {
    width: 70,
    height: 70,
  },
  imagemetroContainer: {
    marginTop: (400 / height) * 100,
  },
  metroImageText: {
    color: "#36A546",
    fontSize: 18,
  },
  overlay: {
    position: "absolute",
    top: (-180 / height) * 100,
    right: -25,
    zIndex: 1,
    width: 35,
    height: 35,
    borderRadius: 20,
    borderColor: "#FFFEFE00",
    borderWidth: 1,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EmployeeListPageBody;
