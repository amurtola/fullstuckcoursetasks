const AddForm = ({ onSubmit, onPersonChange, newName, onPhoneChange, newNumber }) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input onChange={onPersonChange} value={newName} />
            </div>
            <div>
                number: <input onChange={onPhoneChange} value={newNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddForm
