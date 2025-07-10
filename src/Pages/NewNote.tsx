import type { NoteData } from '../App';
import NoteForm from '../Components/NoteForm';

type NewNoteProps = {
	onSubmit: (data: NoteData) => void;
};

const NewNote = ({ onSubmit }: NewNoteProps) => {
	return (
		<>
			<h1 className='mb-4'>new note</h1>
			<NoteForm onSubmit={onSubmit} />
		</>
	);
};

export default NewNote;
