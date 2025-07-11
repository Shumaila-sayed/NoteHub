import type { NoteData, Tag } from '../App';
import NoteForm from '../Components/NoteForm';

type NewNoteProps = {
	onSubmit: (data: NoteData) => void;
	onAddTag: (tag: Tag) => void;
	availableTags: Tag[];
};

const NewNote = ({ onSubmit, onAddTag, availableTags}: NewNoteProps) => {
	return (
		<>
			<h1 className='mb-4'>New note</h1>
			<NoteForm
				onSubmit={onSubmit}
				onAddTag={onAddTag}
				availableTags={availableTags}
			/>
		</>
	);
};

export default NewNote;
