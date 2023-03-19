import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEditBookMutation } from "../../features/api/apiSlice";

const Form = ({book}) => {
  const navigate = useNavigate();

    const [editBook, { isLoading, isError, isSuccess }] =
    useEditBookMutation();
    
    const [formData, setFormData] = useState({
        ...book
      });
      console.log(formData);
      console.log({id:book.id,...book})
      const {name, author, thumbnail, price, rating, featured} =formData;
    
      const handleChange = (e) => {
        e.preventDefault();
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
          featured: e.target.checked,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      
        setFormData({
          name: '',
          author: '',
          thumbnail: '',
          price: 0,
          rating: 0,
          featured: false
        });
    
        editBook({
          id:book.id,
          data: {
              ...formData
        }
        })
        navigate('/')
      };
  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="lws-bookName">Book Name</label>
        <input
          required onChange={handleChange}  
          className="text-input"
          type="text"
          id="lws-bookName"
          value={name}
          name="name"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-author">Author</label>
        <input
          required onChange={handleChange} 
          className="text-input"
          type="text"
          id="lws-author"
          value={author}
          name="author"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-thumbnail">Image Url</label>
        <input
          required onChange={handleChange} 
          className="text-input"
          type="text"
          id="lws-thumbnail"
          value={thumbnail}
          name="thumbnail"
        />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label htmlFor="lws-price">Price</label>
          <input
            required onChange={handleChange} 
            className="text-input"
            type="number"
            id="lws-price"
            value={price}
            name="price"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-rating">Rating</label>
          <input
            required onChange={handleChange} 
            className="text-input"
            type="number"
            id="lws-rating"
            value={rating}
            name="rating"
            min="1"
            max="5"
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="lws-featured"
          type="checkbox"
        //   value={featured}
          name="featured"
          className="w-4 h-4"
          onchange={handleChange}
          checked={featured}
        />
        <label htmlFor="lws-featured" className="ml-2 text-sm">
          {" "}
          This is a featured book{" "}
        </label>
      </div>

      <button type="submit" className="submit" id="lws-submit">
        Edit Book
      </button>
    </form>
  );
};

export default Form;
