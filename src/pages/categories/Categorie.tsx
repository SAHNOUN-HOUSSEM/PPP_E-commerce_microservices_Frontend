// const categories = [
//   {
//     id: 1,
//     name: "Electronics",
//     description: "Best electronics in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 2,
//     name: "Clothing",
//     description: "Best clothing in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 3,
//     name: "Shoes",
//     description: "Best shoes in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 4,
//     name: "Furniture",
//     description: "Best furniture in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 5,
//     name: "Books",
//     description: "Best books in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 6,
//     name: "Toys",
//     description: "Best toys in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 7,
//     name: "Sport",
//     description: "Best sport in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 8,
//     name: "Health",
//     description: "Best health in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 9,
//     name: "Beauty",
//     description: "Best beauty in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 10,
//     name: "Jewelry",
//     description: "Best jewelry in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 11,
//     name: "Garden",
//     description: "Best garden in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 12,
//     name: "Tools",
//     description: "Best tools in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 13,
//     name: "Automotive",
//     description: "Best automotive in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
// ];

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8083/category").then((data) => {
      setCategories(data.data);
      // setCategories([]);
    });
  }, []);
  const handleCLick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    const categoryElement = target.closest(".category");
    if (categoryElement) {
      const categoryId = categoryElement.getAttribute("data-id");
      navigate("/categorie/" + categoryId + "/products");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 w-4/5 mx-auto py-12">
      <div
        className="bg-white p-6 rounded-lg shadow-lg
        overflow-hidden 
      "
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Categories
        </h2>

        {categories?.length == 0 && (
          <div className="mt-4 text-center text-gray-700">
            No categories found
          </div>
        )}
        {categories?.length > 0 && (
          <>
            <div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
              onClick={handleCLick}
            >
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-gray-200 rounded-lg overflow-hidden shadow-lg category"
                  data-id={category.id}
                  // onClick={() => handleClick(category.id)}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
