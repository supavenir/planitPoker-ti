import React, {useEffect, useState} from 'react';
import RoomService, {Room} from "@/pages/api/Room";
import SuiteService, {Suite} from "@/pages/api/Suite";

function Form({listItems, setListItems}:{listItems:Room[], setListItems:Function}) {
    const [roomName, setRoomName] = useState('');
    const [selectedSuite, setSelectedSuite] = useState(0);
    const [suiteList, setSuiteList] = useState<Suite[]>([]);
    const [roomDescription, setRoomDescription] = useState('');
    useEffect(() => {
        SuiteService.getAll().then((stories) => {
            setSuiteList(stories);
        });
    }, []);

    return (
        <form onSubmit={async (e)=>{
            e.preventDefault();
            let newRoom = {
                name: roomName,
                description: roomDescription,
                points: 1,
                connectedUsers: "[]",
                idOwner: 1,
                idSuite: selectedSuite,
                idTeam: 1
            };
            if(newRoom.idSuite == 0 || newRoom.idSuite == null) {
                alert("Veuillez sélectionner une suite");
            }else {
                await RoomService.add(newRoom).then(() => {
                    setListItems([...listItems, newRoom]);
                }).catch((err) => {
                    alert(err);
                });
            }
        }}>
            <input type="text" placeholder="Nom" required onChange={(e) => setRoomName(e.target.value)} />
            <input type="text" placeholder="Description" required onChange={(e) => setRoomDescription(e.target.value)} />

            <select name="stories" id="stories" required onChange={(e) => setSelectedSuite(parseInt(e.target.value))}>
                <option value="0">Sélectionnez une suite</option>
                {suiteList.map((suite) => (
                    <option key={suite.name} value={suite.id}>
                        {suite.name}
                    </option>
                ))}
            </select>
            <input type="submit"/>
        </form>
    );
}
export default Form;