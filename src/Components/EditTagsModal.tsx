import { Button, Col, Form, Modal, Row, Stack } from 'react-bootstrap';
import type { Tag } from '../App';

type EditTagsModalProps = {
	show: boolean;
	availableTags: Tag[];
	handleClose: () => void;
	onDeleteTag: (id: string) => void;
	onUpdateTag: (id: string, label: string) => void;
};

const EditTagsModal = ({ availableTags, handleClose, show, onDeleteTag, onUpdateTag }: EditTagsModalProps) => {
	return (
		<Modal show={show} onHide={handleClose} >
			<Modal.Header closeButton>
				<Modal.Title>Edit Tags</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Stack gap={2}>
						{availableTags.map((tag) => (
							<Row key={tag.id}>
								<Col>
									<Form.Control type='text' value={tag.label} onChange={e => onUpdateTag(tag.id, e.target.value)} />
								</Col>
								<Col xs='auto'>
									<Button onClick={() => onDeleteTag(tag.id)} variant='outline-danger'>&times;</Button>
								</Col>
							</Row>
						))}
					</Stack>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default EditTagsModal;
