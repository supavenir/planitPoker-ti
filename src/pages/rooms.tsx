import UIList from "@/components/UIList";
import RoomService, {Room} from "@/pages/api/Room";
import Form from "@/components/Form";
import {useState} from "react";

function RoomsPage({rooms}:{rooms:Room[]}) {
    const [listItems, setListItems] = useState(rooms);
    console.log(listItems)
  return (
    <div>
      <h1>Rooms</h1>
        <UIList list={listItems} callback={(room)=>room.name}></UIList>
        <Form listItems={listItems} setListItems={setListItems}></Form>
    </div>
  );
}

let getServerSideProps = async () => {
    let rooms=await RoomService.getAll();
    return {
        props: {
            rooms: rooms
        }
    }
};


export {getServerSideProps};

export default RoomsPage;
