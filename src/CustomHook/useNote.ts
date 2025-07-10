import { useOutletContext } from 'react-router-dom';
import type { Note } from '../App';

export function useNote() {
	return useOutletContext<Note>();
}
