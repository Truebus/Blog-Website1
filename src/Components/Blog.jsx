import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

export const Blog = () => {
    const [storedata, setStoreData] = useState([]);
    const [isEdit, setIsEdit] = useState(false); 
    const [editIndex, setEditIndex] = useState(null);
    const [title, setTitle] = useState('');
    const [intro, setIntro] = useState('');
    const [des, setDes] = useState('');
    const [name, setName] = useState('');

    const handletitle = (e) => {
        setTitle(e.target.value);
    };

    const handleintro = (e) => {
        setIntro(e.target.value);
    };

    const handledes = (e) => {
        setDes(e.target.value);
    };

    const handlename = (e) => {
        setName(e.target.value);
    };

    const adddata = () => {
        if (title && intro && des && name.trim()) {
            const newBlog = { title, intro, des, name };
            if (isEdit) {
                // Update the existing blog entry
                const updatedData = [...storedata];
                updatedData[editIndex] = newBlog; // Correctly update the blog post
                setStoreData(updatedData);
                setIsEdit(false);
                setEditIndex(null);
            } else {
                setStoreData([...storedata, newBlog]);
            }
            cleanup();
        }
    };

    const handledelete = (index) => {
        setStoreData((prev) => prev.filter((_, i) => i !== index));
    };

    const handledit = (index) => {
        const blogToEdit = storedata[index];
        setTitle(blogToEdit.title);
        setIntro(blogToEdit.intro);
        setDes(blogToEdit.des);
        setName(blogToEdit.name);
        setIsEdit(true);
        setEditIndex(index);
    };

    const cleanup = () => {
        setTitle('');
        setIntro('');
        setDes('');
        setName('');
    };

    return (
        <div>
            <div>
                <h1 className="text-center text-blue-900 font-bold text-3xl p-2" id="text1">Create New Blog</h1>
                <div className="bg-fuchsia-300 h-auto w-[600px] m-auto">
                    <form className="p-2 flex flex-col">
                        <button 
                            type="button" 
                            onClick={adddata} 
                            className="bg-violet-400 ml-[470px] h-[60px] w-[100px] p-2 font-bold rounded-lg hover:bg-gradient-to-tr from-red-600 to-yellow-400">
                            {isEdit ? "Update Blog" : "Add Blog"}
                        </button><br />
                        <label htmlFor="title" className="text-2xl font-semibold">Title:</label>
                        <input 
                            type="text" 
                            id="title" 
                            value={title} 
                            onChange={handletitle} 
                            placeholder="Enter Your Blog Title" 
                            className="outline-none border-none p-2 rounded-md focus:outline-sky-400 mb-2" 
                        />
                        <label htmlFor="intro" className="text-2xl font-semibold">Introduction:</label>
                        <input 
                            type="text" 
                            id="intro" 
                            value={intro} 
                            onChange={handleintro} 
                            placeholder="Enter Blog Introduction" 
                            className="outline-none border-none p-2 rounded-md focus:outline-sky-400 mb-2" 
                        />
                        <label className="text-2xl font-semibold" htmlFor="image">Description of Your Blog:</label>
                        <textarea 
                            rows={3} 
                            cols={7} 
                            placeholder="Enter Your Blog Details" 
                            value={des} 
                            className="outline-none border-none p-2 rounded-md focus:outline-sky-400 mb-2" 
                            onChange={handledes}>
                        </textarea>
                        <label className="text-2xl font-semibold" htmlFor="author">Publisher Name:</label>
                        <input 
                            type="text" 
                            value={name} 
                            placeholder="Enter Your Name" 
                            className="outline-none border-none p-2 rounded-md focus:outline-sky-400 mb-2" 
                            onChange={handlename} 
                        />
                    </form>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-semibold text-green-700 text-center">Show Blog Details:</h1>
                <div className="bg-gray-300 h-auto w-full p-3 box-border flex gap-2">
                    {storedata.map((x, index) => (
                        <div key={index} className="mb-4 p-3 bg-white rounded shadow w-[300px] h-[400px]">
                            <div className="relative left-[200px]">
                                <button 
                                    type="button" 
                                    className="bg-violet-400 hover:bg-gradient-to-tr from-red-600 to-yellow-400 mr-3 p-2" 
                                    onClick={() => handledit(index)}>
                                    <FaRegEdit />
                                </button>
                                <button 
                                    type="button" 
                                    className="bg-violet-400 hover:bg-gradient-to-tr from-red-600 to-yellow-400 mr-3 p-2" 
                                    onClick={() => handledelete(index)}>
                                    <MdOutlineDelete />
                                </button>
                            </div>
                            <h1 className="text-lg font-semibold">Title: {x.title}</h1>
                            <h2 className="text-lg font-semibold">Introduction: {x.intro}</h2>
                            <p className="text-lg font-semibold overflow-auto box-border break-words whitespace-normal">Description: {x.des}</p>
                            <p className="text-lg font-semibold">Publisher Name: {x.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
