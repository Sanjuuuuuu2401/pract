// import Courses ,Title and UserCard here

import Courses from "./Components/Courses";
import Title from "./Components/Title";
import UserCard from "./Components/UserCard";

// keep a user object with mentioned properties and pass down to UserCard as prop
export default function App() {
  return <>
  <Title/>
  <UserCard  image = "https://static.theprint.in/wp-content/uploads/2020/05/tanmay-bhat-2-edited.jpg?compress=true&quality=80&w=376&dpr=2.6" name = "Sanjay" followers = "8778" posts = "22" address = "hjdshj hd hued hedhuew"/>
  <Courses/>
  </>;
}
