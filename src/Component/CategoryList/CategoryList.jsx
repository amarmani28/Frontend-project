import './CategoryList.css';
import {useContext, useState} from "react";
import {AppContext} from "../../Context/AppContext.jsx";
import toast from "react-hot-toast";
import {deleteCategory} from "../../Service/CategoryService.js";

const CategoryList = () => {

    const {categories,setCategories} = useContext(AppContext)

    const [searchTerm, setSearchTerm] = useState('');

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const deleteByCategoryId = async (categoryId) => {
        try{
            const response = await deleteCategory(categoryId);
            if(response.status === 204){

                const updatedCategories =
                    categories.filter(category =>
                        category.categoryId !== categoryId
                    );

                setCategories(updatedCategories);

                toast.success('Category deleted!');

            }
            else{

                toast.error('unable to delete the category');

            }

        }
        catch(error){

            console.log(error);

            toast.error('unable to delete the category');

        }

    }
    return (

        <div
            className='category-list-container'
            style={{
                height:'100vh',
                overflowY:'auto',
                overflowX:'hidden'
            }}
        >
            <div className='input-group mb-3'>

                <input
                    className='form-control'
                    type='text'
                    placeholder='Search by keyboard'
                    id="keyboard"

                    onChange={(e)=>
                        setSearchTerm(e.target.value)
                    }

                    value={searchTerm}
                />

                <span className='input-group-text bg-warning'>

                    <i className="bi bi-search"></i>

                </span>

            </div>
            <div className='row g-3 pe-2'>
                {filteredCategories.map((category,index) => (
                    <div className='col-12' key={index}>
                        <div
                            className='card p-3'
                            style={{
                                backgroundColor:category.bgColor
                            }}
                        >
                            <div className='d-flex align-items-center'>
                                <div style={{marginRight:'15px'}}>

                                    <img
                                        src={category.imgUrl}
                                        alt={category.name}
                                        className="category-image"
                                    />
                                </div>
                                <div className='flex-grow-1'>

                                    <h5 className='mb-1 text-white'>

                                        {category.name}
                                    </h5>
                                    <p className='mb-0 text-white'>
                                        {category.items} Items
                                    </p>

                                </div>
                                <div>

                                    <button
                                        className='btn btn-danger btn-sm'

                                        onClick={()=>
                                            deleteByCategoryId(category.categoryId)
                                        }
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryList;