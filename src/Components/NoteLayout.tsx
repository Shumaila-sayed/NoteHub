import { Navigate, Outlet, useParams } from "react-router-dom";
import type { Note } from "../App";

type NoteLayoutProps = {
    notes: Note[]
}


const NoteLayout = ({ notes }: NoteLayoutProps) => {
    const { id } = useParams();
    const note = notes.find(n => n.id === id)

    if(note == null) return <Navigate to="/" replace />
    return <Outlet context={note}/>
}



export default NoteLayout;