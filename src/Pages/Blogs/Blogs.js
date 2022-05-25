import React from 'react';

const Blogs = () => {
    return (
        <div className='py-10'>
            <h2 className='text-4xl font-bold text-amber-500'>Questions & Answers  </h2>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  drop-shadow-4xl gap-10 mx-10 py-10'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"> How will you improve the performance of react Application?</h2>
                        <p>Keeping component state local where necessary. <br/>
                            Memoizing React components to prevent unnecessary re-renders.<br />
                            Code-splitting in React using dynamic import().<br />
                            Windowing or list virtualization in React.<br />
                            Lazy loading images in React</p>
                        
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">What are different ways to manage a state in a react application?</h2>
                        <p>There are 4 types of state in a react application. <br />
                          1.  Local state. <br/>
                          2.  Global state.<br/>
                          3.  Server state.<br/>
                          4.  URL state.<br/>
                        </p>
                        
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">How does prototypical inheritance work?</h2>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                        
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl ">
                    <div class="card-body">
                        <h2 class="card-title">Why you dont state directly in React ?For example, If You have const [products,setProducts]=useState.
                        Why do you not set products =[...] instead , you use the setProducts.?</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"></h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>
            
            </section>
        </div>
    );
};

export default Blogs;