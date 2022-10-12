import React from 'react';
import'./Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='ques-1'>
                <h3>what is the purpose of react router?</h3>
                <p>ReactJS Router is mainly used for developing Single 
                    Page Web Applications. React Router is used to define 
                    multiple routes in the application. When a user types a 
                    specific URL into the browser, and if this URL path matches any 
                    'route' inside the router file, the user will be redirected to that 
                    particular route.</p>

            </div>
            <div className='ques-2'>
                <h3>how does context api works?</h3>
                <p>The React Context API is a way for a React app to effectively 
                    produce global variables that can be passed around. This is the
                     alternative to "prop drilling" or moving props from grandparent
                      to child to parent, and so on. Context is also touted as an easier
                      , lighter approach to state management using Redux.</p>

            </div>
            <div className='ques-3'>
                <h3>what is useRef?</h3>
                <p>useRef returns a mutable ref object whose .current property 
                    is initialized to the passed argument (initialValue). 
                    The returned object will persist for the full lifetime of 
                    the component.</p>

            </div>
        </div>
    );
};

export default Blog;