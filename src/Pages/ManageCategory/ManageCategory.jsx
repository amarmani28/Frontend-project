import './ManageCategory.css';
import CategoryForm from "../../Component/CategoryForm/CategoryForm.jsx";
import CategoryList from "../../Component/CategoryList/CategoryList.jsx";
const ManageCategory= () => {
    return (
        <div className="category-container text-light">
            <div className="left-column">
                <CategoryForm />
            </div>
            <div className="right-column">
                <CategoryList />
            </div>
        </div>
    )
}
export default ManageCategory;