import "./ManageItems.css";
import ItemForm from "../../Component/ItemForm/ItemForm.jsx";
import ItemList from "../../Component/ItemList/ItemList.jsx";
const ManageItems = () => {
    return (
        <div className="items-container text-light">
            <div className="left-column">
                <ItemForm/>
            </div>
            <div className="right-column">
                <ItemList/>
            </div>
        </div>
    )
}
export default ManageItems;