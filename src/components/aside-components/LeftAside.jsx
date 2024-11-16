import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAside = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])

    // "category_id": "01",
    //     "category_name": "Breaking News"
    return (
        <div>
            <h2 className='font-bold'>All Categories({categories.length})</h2>
            <div className="flex flex-col mt-6 gap-2 w-9/12 ">
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`} key={category.category_id} className="btn btn-ghost">
                        {category.category_name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftAside;