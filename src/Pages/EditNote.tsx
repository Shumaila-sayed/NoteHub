import type { NoteData, Tag } from '../App';
import NoteForm from '../Components/NoteForm';
import { useNote } from '../CustomHook/useNote';

type EditNoteProps = {
    onSubmit: (id: string, data: NoteData) => void;
    onAddTag: (tag: Tag) => void;
    availableTags: Tag[];
};

const EditNote = ({ onSubmit, onAddTag, availableTags }: EditNoteProps) => {
    
    const note = useNote();
    return (
        <>
            <h1 className='mb-4'>Edit note</h1>
            <NoteForm
                title={note.title}
                markdown={note.markdown}
                tags={note.tags}
                onSubmit={data => onSubmit(note.id, data)}
                onAddTag={onAddTag}
                availableTags={availableTags}
            />
        </>
    );
};

export default EditNote;
