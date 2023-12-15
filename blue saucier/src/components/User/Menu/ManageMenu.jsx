import React from 'react';
import { useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import { Link } from 'react-router-dom';


function ManageMenu({ username }) {

  console.log(username)

useEffect(() => {
  async function getMenus() {
    const querySnapshot = await getDocs(collection(db, `${username} menus`));
    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  }
  getMenus()
}, [])

  return (
    <div>
      <Link to='/mainMenu'>Main Menu</Link>
      <Link to='/createMenu'>Create Menu</Link>
    </div>
  )
}

export default ManageMenu;

/*
eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ0OWU0N2ZiZGQ0ZWUyNDE0Nzk2ZDhlMDhjZWY2YjU1ZDA3MDRlNGQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSXNhaWFzIEdhcmNpYSIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9ibHVlc2F1Y2llci0xNTk4NzIzODI4NDU5IiwiYXVkIjoiYmx1ZXNhdWNpZXItMTU5ODcyMzgyODQ1OSIsImF1dGhfdGltZSI6MTY5OTQ4MjA5MywidXNlcl9pZCI6ImhOeVVMOWNwRGNSUFQ0d0JPQWV0MnJBQUp3QTIiLCJzdWIiOiJoTnlVTDljcERjUlBUNHdCT0FldDJyQUFKd0EyIiwiaWF0IjoxNjk5NDgyMDkzLCJleHAiOjE2OTk0ODU2OTMsImVtYWlsIjoiaXNhaWFzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJpc2FpYXNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ngzXrE5A788caNgykagAvLqkcpTHksjCwl85jNW2GxCI0AU6c8UbyFgYmi_23oukJsJFtGOwD7nDQlc9q6yenodAWqVsISGB23VJQnW1S_EdPjwIpxC8volDmEk58OQNMJoIe7wBKvAihpckxNM2tBlOGKNgWorTImOl_07wHBYBFDATIg73Ywd8anUDklUkgC4u0XfevrVtnrgCjs8_tYxuzX5DfstZp9Ch5zSxFtpBVYvm0i8yhTie9WHU3ApB4LiPoG25qEKpPg8zf16MaNsq9nDnENFCIBPUdt2RQXuaBHfEYJU526yO9rW6xbN27QR8mBeTs01fSFs8V9--0g


*/

/*
"eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSXNhaWFzIEdhcmNpYSIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9ibHVlc2F1Y2llci0xNTk4NzIzODI4NDU5IiwiYXVkIjoiYmx1ZXNhdWNpZXItMTU5ODcyMzgyODQ1OSIsImF1dGhfdGltZSI6MTcwMjY1OTQxNiwidXNlcl9pZCI6ImhOeVVMOWNwRGNSUFQ0d0JPQWV0MnJBQUp3QTIiLCJzdWIiOiJoTnlVTDljcERjUlBUNHdCT0FldDJyQUFKd0EyIiwiaWF0IjoxNzAyNjU5NDE2LCJleHAiOjE3MDI2NjMwMTYsImVtYWlsIjoiaXNhaWFzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJpc2FpYXNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Py2tpVoQ53GoBA3ZFASLvPAKDeZ1r_V2AMV19A2t7VLfUJ-J5zUC0odmONEsO1lSLAjxxvHcK5-vzbkYenPsphmQZfehP1xs71t2ma0mERAf730ve9ofU48YKAIPqbvu_e8bzXVC1fcWM7tQm1QavM1_L03cq84hg9vZF37ze0A5DVP9rgukpRatvdBrL3dtB4oh898jYao4TfXlMGDwFIIKQzBwNq_6j0H2ET7gL92wlJDpZZOUpAUbTYMd5hfDXm7ack9EDy2Y2shmofIEGwKNzC23HVft3oWY8_Lyyy0F_4UgK7EDQgI3DbvQqaqAugMfrxc-qDDK16DHBlR_9Q"
*/




