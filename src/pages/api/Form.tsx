import React, { useState } from 'react';
import RoomService, {Room} from "@/pages/api/Room";
import SuiteService, {Suite} from "@/pages/api/Suite";


function Form({listItems, setListItems}:{listItems:Room[], setListItems:Function}) {
    const [roomName, setRoomName] = useState('');
    let suiteList : Suite[] = [];
    SuiteService.getAll().then((stories) => {
        suiteList = stories;
        suiteList.forEach((story) => {
            console.log(story);
        });
    });

    return (
        <form onSubmit={async (e)=>{
            e.preventDefault();
            const newRoom = {
                name: roomName,
                description: "oui",
                points: 1,
                connectedUsers: "[]",
                idOwner: 1,
                idSuite: 1,
                idTeam: 1
            };
            await RoomService.add(newRoom).then(() => {
                setListItems([...listItems, newRoom]);
            });
        }}>
            <input type="text" placeholder="Nom" onChange={(e) => setRoomName(e.target.value)} />

            <select name="stories" id="stories">
                <option value="">Sélectionnez une suite</option>
                {suiteList.map((suite) => (
                    <option key={suite.name} value={suite.name}>
                        {suite.name}
                    </option>
                ))}
            </select>
            <input type="submit"/>
        </form>
    );
}
export default Form;