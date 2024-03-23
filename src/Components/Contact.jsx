const Contact = () => {
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact page </h1>
            <form action="">
                <input type="text" placeholder="name" className="border border-black m-2 p-2" />
                <input type="text" placeholder="message" className="border border-black m-2 p-2" />
                <button className="border border-black m-2 p-2 rounded-lg bg-gray-200">Submit</button>
            </form>
        </div>
    )
};

export default Contact
