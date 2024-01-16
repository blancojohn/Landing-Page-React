import React from 'react';
import SecciónCards from "./SecciónCards";
import SecciónFooter from "./SecciónFooter";

const App = () => {
    return (
        <>
            <div className='container'>
                <div className='Row d-flex'>
                    <div className='col-3'>
                        < SecciónCards imagen= "https://picsum.photos/id/19/500/325" cardTitle="Card title" textoBotón="Find Out More" descripción="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis" texto="Find Out More"/>
                    </div>
                    <div className='col-3'>
                        < SecciónCards imagen= "https://picsum.photos/id/19/500/325" cardTitle="Card title" textoBotón="Find Out More" descripción="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis" texto="Find Out More"/>
                    </div>
                    <div className='col-3'>
                        < SecciónCards imagen= "https://picsum.photos/id/19/500/325" cardTitle="Card title" textoBotón="Find Out More" descripción="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis" texto="Find Out More"/>
                    </div>
                    <div className='col-3'>
                        < SecciónCards imagen= "https://picsum.photos/id/19/500/325" cardTitle="Card title" textoBotón="Find Out More" descripción="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis" texto="Find Out More"/>
                    </div>

                </div>
            </div>
            < SecciónFooter texto="Copyright& Your Website 2023" />

        </>
    )
}


export default App;

